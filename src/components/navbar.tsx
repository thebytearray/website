import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/LogoMark";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrollTop = window.scrollY;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      setScrollProgress(progress);
      setScrolled(scrollTop > 10);

      if (!isHomePage) return;

      const sections = [
        "about", "openloader", "featured-app", "projects", "team", "contact",
      ];
      const scrollPosition = scrollTop + winHeight / 3;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(sectionId);
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
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
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

  const navItemClass = (href: string) => {
    let isActive = false;
    if (href.startsWith("/")) {
      isActive =
        location.pathname === href || location.pathname.startsWith(`${href}/`);
    } else {
      const sectionId = href.replace("#", "");
      isActive = activeSection === sectionId;
    }
    return `cursor-pointer text-sm px-3 py-1.5 transition-colors ${
      isActive
        ? "text-foreground bg-foreground/[0.06] font-medium"
        : "text-foreground/55 hover:text-foreground hover:bg-foreground/[0.03]"
    }`;
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 h-[1px] bg-foreground/15 z-50 transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          scrolled
            ? "border-b border-foreground/[0.06] bg-background/90 navbar-blur"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-12 px-4 sm:px-6 max-w-7xl mx-auto">
          <button
            aria-label="The Byte Array home"
            className="flex items-center gap-2 cursor-pointer group text-foreground shrink-0"
            onClick={handleLogoClick}
            type="button"
          >
            <LogoMark className="text-base sm:text-lg font-semibold" />
          </button>

          <nav className="hidden md:flex items-center gap-0.5 mx-4">
            {siteConfig.navItems.map((item) => (
              <button
                key={item.href}
                className={navItemClass(item.href)}
                onClick={() => handleNavClick(item.href)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <ThemeSwitch />
            <a
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 bg-foreground text-background btn-hover"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon size={13} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <button
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex flex-col gap-1 p-1.5 text-foreground/55 hover:text-foreground ml-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
            >
              <span className={`block w-4 h-px bg-current transition-all ${isMenuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
              <span className={`block w-4 h-px bg-current transition-all ${isMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-4 h-px bg-current transition-all ${isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-30 md:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.nav
              animate={{ y: 0 }}
              className="absolute top-12 left-0 right-0 bg-background border-b border-foreground/[0.06] p-3 flex flex-col gap-0.5"
              exit={{ y: -8, opacity: 0 }}
              initial={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {siteConfig.navItems.map((item) => (
                <button
                  key={item.href}
                  className={`w-full text-left text-sm py-2.5 px-3 transition-colors ${
                    (item.href.startsWith("/")
                      ? location.pathname === item.href
                      : activeSection === item.href.replace("#", ""))
                      ? "bg-foreground/[0.06] text-foreground font-medium"
                      : "text-foreground/55 hover:bg-foreground/[0.04] hover:text-foreground"
                  }`}
                  onClick={() => handleNavClick(item.href)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-2 pt-3 border-t border-foreground/[0.06]">
                <a
                  className="flex items-center justify-center gap-2 w-full text-sm font-medium py-2.5 px-4 bg-foreground text-background"
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubIcon size={16} />
                  GitHub
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
