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
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/LogoMark";
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

  return (
    <HeroUINavbar
      maxWidth="xl"
      position="sticky"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        base: "bg-background/80 backdrop-blur-xl border-b border-foreground/[0.06]",
        wrapper: "px-4 sm:px-6",
      }}
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
              className="cursor-pointer text-[13px] text-foreground/55 hover:text-foreground px-4 py-2 rounded-lg transition-colors duration-150"
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
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                className="w-full text-sm py-3 px-4 rounded-xl text-foreground/55 hover:bg-foreground/[0.04] hover:text-foreground transition-colors cursor-pointer font-medium"
                color="foreground"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
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
  );
};
