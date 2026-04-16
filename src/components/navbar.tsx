import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/LogoMark";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
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

      if (!isHomePage) return;

      const sections = [
        "about",
        "openloader",
        "convertit",
        "featured-app",
        "projects",
        "team",
        "contact",
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
    // In-app routes (e.g. /blog), not same-page #sections
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
        location.pathname === href ||
        location.pathname.startsWith(`${href}/`);
    } else {
      const sectionId = href.replace("#", "");
      isActive = activeSection === sectionId;
    }

    return `cursor-pointer text-[13px] px-4 py-2 rounded-lg transition-all duration-200 ${
      isActive
        ? "text-foreground bg-foreground/[0.06] font-medium"
        : "text-foreground/55 hover:text-foreground hover:bg-foreground/[0.03]"
    }`;
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 h-0.5 bg-foreground z-50 transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />
      <HeroUINavbar
        classNames={{
          base: "bg-background/80 backdrop-blur-xl border-b border-foreground/[0.06]",
          wrapper: "px-4 sm:px-6",
        }}
        isMenuOpen={isMenuOpen}
        maxWidth="xl"
        position="sticky"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
          <NavbarBrand className="gap-2 max-w-fit">
            <Link
              aria-label="The Byte Array home"
              className="flex justify-start items-center cursor-pointer group"
              color="foreground"
              onClick={handleLogoClick}
            >
              <LogoMark className="text-base sm:text-lg" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden md:flex gap-0" justify="center">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={navItemClass(item.href)}
                color="foreground"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent
          className="hidden md:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="flex gap-2 items-center">
            <ThemeSwitch />
            <Button
              isExternal
              as={Link}
              className="font-medium text-xs bg-foreground text-background btn-hover"
              href={siteConfig.links.github}
              radius="full"
              size="sm"
              startContent={<GithubIcon size={14} />}
            >
              GitHub
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="text-foreground"
          />
        </NavbarContent>

        <NavbarMenu className="pt-6 bg-background/98 backdrop-blur-xl">
          <div className="mx-4 mt-2 flex flex-col gap-1">
            {siteConfig.navMenuItems.map((item, index) => {
              const menuActive = item.href.startsWith("/")
                ? location.pathname === item.href ||
                  location.pathname.startsWith(`${item.href}/`)
                : activeSection === item.href.replace("#", "");
              return (
                <NavbarMenuItem key={`${item.label}-${index}`}>
                  <Link
                    aria-current={menuActive ? "page" : undefined}
                    className={`w-full text-sm py-3 px-4 rounded-xl transition-colors cursor-pointer font-medium ${
                      menuActive
                        ? "bg-foreground/[0.06] text-foreground"
                        : "text-foreground/55 hover:bg-foreground/[0.04] hover:text-foreground"
                    }`}
                    color="foreground"
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              );
            })}
            <NavbarMenuItem className="mt-4 pt-4 border-t border-foreground/[0.06]">
              <Button
                isExternal
                as={Link}
                className="w-full font-medium text-sm bg-foreground text-background"
                href={siteConfig.links.github}
                radius="full"
                size="md"
                startContent={<GithubIcon size={16} />}
              >
                GitHub
              </Button>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </>
  );
};
