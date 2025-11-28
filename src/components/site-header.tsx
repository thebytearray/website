"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { useState } from "react";
import { SocialIcons } from "./social-icons";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    if (href === '/blog') {
      // Navigate to blog page
      window.location.href = '/blog';
      return;
    }
    
    if (pathname === '/') {
      // If we're on the home page, just scroll to the section
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on a different page, navigate to home page with the hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center min-w-0 flex-1 sm:flex-initial">
            <Link href="/" className="flex items-center space-x-2 group">
              <span className="font-bold text-lg sm:text-xl whitespace-nowrap bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent truncate">
                The byte[]
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            {[
              { href: "#about", label: "About" },
              { href: "#projects", label: "Projects" },
              { href: "#team", label: "Team" },
              { href: "/blog", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                  pathname === item.href && "text-primary after:w-full"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="hidden sm:block">
              <SocialIcons />
            </div>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-4 pt-2 border-t">
              {/* Mobile Social Icons */}
              <div className="sm:hidden pb-3 border-b border-border mb-3">
                <SocialIcons />
              </div>
              
              {/* Mobile Navigation */}
              {[
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#team", label: "Team" },
                { href: "/blog", label: "Blog" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    handleNavClick(item.href);
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    "block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary hover:bg-primary/10",
                    pathname === item.href && "text-primary bg-primary/10"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 