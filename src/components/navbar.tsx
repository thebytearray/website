import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/LogoMark";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const winHeight = window.innerHeight;
      const sections = [
        "about",
        "openloader",
        "featured-app",
        "projects",
        "team",
        "contact",
      ];

      for (const id of sections) {
        const el = document.getElementById(id);

        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (
            scrollY + winHeight / 3 >= top &&
            scrollY + winHeight / 3 < top + height
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/")) {
      navigate(href);

      return;
    }
    if (isHomePage) {
      const el = document.querySelector(href);

      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/" + href);
    }
  };

  const handleLogoClick = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const isActive = (href: string) => {
    if (href.startsWith("/")) {
      return (
        location.pathname === href || location.pathname.startsWith(`${href}/`)
      );
    }

    return activeSection === href.replace("#", "");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-foreground/[0.06]">
      <div className="flex items-center justify-between h-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <button
          aria-label="The Byte Array home"
          className="flex items-center gap-2 cursor-pointer text-foreground shrink-0"
          type="button"
          onClick={handleLogoClick}
        >
          <LogoMark className="text-base sm:text-lg font-semibold" />
        </button>

        <nav className="hidden md:flex items-center gap-0">
          {siteConfig.navItems.map((item) => (
            <button
              key={item.href}
              className={`relative px-3 py-1.5 text-sm transition-colors ${
                isActive(item.href)
                  ? "text-foreground"
                  : "text-foreground/50 hover:text-foreground"
              }`}
              type="button"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-3 right-3 h-[1.5px] bg-foreground" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <ThemeSwitch />
          <button
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex items-center justify-center w-8 h-8 text-foreground/50 hover:text-foreground"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3l10 10M13 3L3 13"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
            ) : (
              <svg
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 4h12M2 8h12M2 12h12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-foreground/[0.06] bg-background">
          <nav className="px-3 py-2 flex flex-col gap-0.5">
            {siteConfig.navItems.map((item) => (
              <button
                key={item.href}
                className={`w-full text-left text-sm py-2.5 px-3 transition-colors ${
                  isActive(item.href)
                    ? "text-foreground font-medium"
                    : "text-foreground/50 hover:text-foreground"
                }`}
                type="button"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
