import { FC, useState, useEffect } from "react";
import clsx from "clsx";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const dark = stored ? stored === "dark" : prefersDark;

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    setIsMounted(true);
  }, []);

  const applyTheme = (dark: boolean) => {
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    localStorage.setItem("theme", dark ? "dark" : "light");

    const meta = document.querySelector('meta[name="theme-color"]');

    if (meta) {
      meta.setAttribute("content", dark ? "#0a0a0a" : "#ffffff");
    }
  };

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !isDark;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      applyTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const maxDist =
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      ) * 1.15;

    const overlay = document.createElement("div");
    overlay.style.cssText = [
      "position: fixed",
      `left: ${x}px`,
      `top: ${y}px`,
      `width: ${maxDist * 2}px`,
      `height: ${maxDist * 2}px`,
      "margin: 0",
      "border-radius: 50%",
      `background: ${next ? "#0a0a0a" : "#ffffff"}`,
      "transform: translate(-50%, -50%) scale(0)",
      "transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      "z-index: 9999",
      "pointer-events: none",
      "will-change: transform",
    ].join(";");
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.transform = "translate(-50%, -50%) scale(1)";
    });

    window.setTimeout(() => applyTheme(next), 420);
    window.setTimeout(() => overlay.remove(), 560);
  };

  if (!isMounted) return <div className="w-5 h-5" />;

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={clsx(
        "flex items-center justify-center w-8 h-8 rounded-lg text-foreground/45 hover:text-foreground/70 hover:bg-foreground/[0.06] transition-all duration-200",
        className,
      )}
      type="button"
      onClick={toggle}
    >
      <div className="relative w-[18px] h-[18px]">
        <svg
          fill="none"
          height="18"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
          }`}
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
        <svg
          fill="none"
          height="18"
          viewBox="0 0 24 24"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          className={`absolute inset-0 transition-all duration-300 ${
            isDark ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
          }`}
        >
          <circle
            cx="12"
            cy="12"
            r="5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </button>
  );
};
