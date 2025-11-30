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
        base: "bg-background/90 backdrop-blur-md border-b border-default-100",
        wrapper: "px-4 sm:px-6",
      }}
    >
      {/* Logo */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-2 max-w-fit">
          <Link
            className="flex justify-start items-center gap-2 cursor-pointer"
            color="foreground"
            onClick={handleLogoClick}
          >
            <span className="font-mono text-base font-bold text-foreground">
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
                "cursor-pointer text-sm text-default-500 hover:text-foreground px-3 py-1.5 rounded-md hover:bg-default-100 transition-all",
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
        <NavbarItem className="flex gap-2 items-center">
          <ThemeSwitch />
          <Button
            isExternal
            as={Link}
            className="font-medium font-mono text-xs"
            color="primary"
            href={siteConfig.links.github}
            radius="md"
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
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="pt-4 bg-background/98 backdrop-blur-md">
        <div className="mx-4 mt-2 flex flex-col gap-1">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full text-sm py-2.5 px-3 rounded-md text-default-600 hover:bg-default-100 hover:text-foreground transition-all cursor-pointer"
                color="foreground"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          
          <NavbarMenuItem className="mt-3 pt-3 border-t border-default-100">
            <Button
              isExternal
              as={Link}
              className="w-full font-medium font-mono text-xs"
              color="primary"
              href={siteConfig.links.github}
              radius="md"
              variant="flat"
              startContent={<GithubIcon size={14} />}
            >
              GitHub
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
