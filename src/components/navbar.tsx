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
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (isHomePage) {
      // On home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to home with hash
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

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-background/80 backdrop-blur-xl border-b border-default-100/50 shadow-sm",
        wrapper: "px-4 sm:px-6",
      }}
    >
      {/* Logo */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-2 max-w-fit">
          <Link
            className="flex justify-start items-center gap-2 cursor-pointer group"
            color="foreground"
            onClick={handleLogoClick}
          >
            <span className="font-display text-lg font-medium text-foreground group-hover:text-primary transition-colors">
              The Byte[]
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className="hidden md:flex gap-1" justify="center">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "cursor-pointer text-sm text-default-500 hover:text-foreground px-4 py-2 rounded-lg hover:bg-default-100/80 transition-all duration-200",
              )}
              color="foreground"
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Desktop Actions */}
      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="flex gap-3 items-center">
          <ThemeSwitch />
          <Button
            isExternal
            as={Link}
            className="font-medium text-xs px-4 shadow-sm"
            color="primary"
            href={siteConfig.links.github}
            radius="lg"
            size="sm"
            variant="flat"
            startContent={<GithubIcon size={14} />}
          >
            GitHub
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle 
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-foreground"
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-6 bg-background/98 backdrop-blur-xl">
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full text-base py-3 px-4 rounded-xl text-default-600 hover:bg-default-100 hover:text-foreground transition-all cursor-pointer font-medium"
                color="foreground"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          
          <NavbarMenuItem className="mt-4 pt-4 border-t border-default-100">
            <Button
              isExternal
              as={Link}
              className="w-full font-medium text-sm"
              color="primary"
              href={siteConfig.links.github}
              radius="lg"
              size="md"
              variant="flat"
              startContent={<GithubIcon size={16} />}
            >
              GitHub
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
