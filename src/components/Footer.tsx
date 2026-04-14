import { Link } from "@heroui/link";
import { useLocation, useNavigate } from "react-router-dom";

import { siteConfig } from "@/config/site";
import { GithubIcon, EmailIcon } from "@/components/icons";

type FooterVariant = "full" | "minimal";

interface FooterProps {
  variant?: FooterVariant;
}

function useHashNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goToHash = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate({ pathname: "/", hash: href.slice(1) });
    }
  };

  return { goToHash };
}

const linkClass =
  "text-sm text-foreground/60 hover:text-foreground transition-colors py-1 block w-fit";

const colTitle = "text-xs font-semibold text-foreground tracking-wide mb-4";

export function Footer({ variant = "full" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { goToHash } = useHashNavigation();

  if (variant === "minimal") {
    return (
      <footer className="border-t border-foreground/[0.08] bg-background mt-auto">
        <div className="container mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-sm text-foreground/50">
            <p>&copy; {currentYear} The Byte Array</p>
            <p>
              <Link
                isExternal
                className="hover:text-foreground transition-colors"
                href="https://www.gnu.org/licenses/gpl-3.0.html"
              >
                GPL-3.0
              </Link>
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-foreground/[0.08] bg-background">
      <div className="container mx-auto px-4 sm:px-6 pt-12 pb-8 lg:pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 md:mb-12">
            <p className="text-base font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="text-sm text-foreground/55 mt-1 max-w-lg leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16">
            <div>
              <p className={colTitle}>Product</p>
              <nav aria-label="Products" className="flex flex-col">
                <Link
                  className={linkClass}
                  href="#convertit"
                  onClick={(e) => goToHash(e, "#convertit")}
                >
                  Convertit Pro
                </Link>
                <Link
                  className={linkClass}
                  href="#featured-app"
                  onClick={(e) => goToHash(e, "#featured-app")}
                >
                  Hy2NG
                </Link>
                <Link
                  className={linkClass}
                  href="#projects"
                  onClick={(e) => goToHash(e, "#projects")}
                >
                  Open Source
                </Link>
              </nav>
            </div>

            <div>
              <p className={colTitle}>Company</p>
              <nav aria-label="Company" className="flex flex-col">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    className={linkClass}
                    href={item.href}
                    onClick={(e) => goToHash(e, item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className={colTitle}>Connect</p>
              <nav aria-label="Social and contact" className="flex flex-col">
                <Link
                  isExternal
                  className={`${linkClass} inline-flex items-center gap-2`}
                  href={siteConfig.links.github}
                >
                  <GithubIcon
                    className="text-foreground/40 shrink-0"
                    size={16}
                  />
                  GitHub
                </Link>
                <Link
                  isExternal
                  className={`${linkClass} inline-flex items-center gap-2`}
                  href={`mailto:${siteConfig.email}`}
                >
                  <EmailIcon
                    className="text-foreground/40 shrink-0"
                    size={16}
                  />
                  Email
                </Link>
              </nav>
            </div>

            <div>
              <p className={colTitle}>Legal</p>
              <nav aria-label="Legal" className="flex flex-col">
                <Link className={linkClass} href="/hy2ng-privacy">
                  Hy2NG Privacy
                </Link>
                <Link className={linkClass} href="/convertit-privacy">
                  Convertit Privacy
                </Link>
                <Link className={linkClass} href="/openloader-privacy">
                  OpenLoader Privacy
                </Link>
                <Link
                  isExternal
                  className={linkClass}
                  href="https://www.gnu.org/licenses/gpl-3.0.html"
                >
                  GPL-3.0
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-foreground/[0.08] text-xs text-foreground/45 text-center md:text-left">
            <p>&copy; {currentYear} The Byte Array. All rights reserved.</p>
            <p className="mt-1 text-foreground/35">
              Privacy-friendly software.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
