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

const colTitle =
  "text-xs font-semibold text-foreground tracking-wide mb-4";

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
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                className="hover:text-foreground transition-colors"
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
            <p className="text-base font-semibold text-foreground">{siteConfig.name}</p>
            <p className="text-sm text-foreground/55 mt-1 max-w-lg leading-relaxed">
              {siteConfig.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 lg:gap-16">
            <div>
              <p className={colTitle}>Product</p>
              <nav className="flex flex-col" aria-label="Products">
                <Link
                  href="#convertit"
                  className={linkClass}
                  onClick={(e) => goToHash(e, "#convertit")}
                >
                  Convertit Pro
                </Link>
                <Link
                  href="#featured-app"
                  className={linkClass}
                  onClick={(e) => goToHash(e, "#featured-app")}
                >
                  Hy2NG
                </Link>
                <Link
                  href="#projects"
                  className={linkClass}
                  onClick={(e) => goToHash(e, "#projects")}
                >
                  Open Source
                </Link>
              </nav>
            </div>

            <div>
              <p className={colTitle}>Company</p>
              <nav className="flex flex-col" aria-label="Company">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={linkClass}
                    onClick={(e) => goToHash(e, item.href)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className={colTitle}>Connect</p>
              <nav className="flex flex-col" aria-label="Social and contact">
                <Link
                  isExternal
                  href={siteConfig.links.github}
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <GithubIcon size={16} className="text-foreground/40 shrink-0" />
                  GitHub
                </Link>
                <Link
                  isExternal
                  href={`mailto:${siteConfig.email}`}
                  className={`${linkClass} inline-flex items-center gap-2`}
                >
                  <EmailIcon size={16} className="text-foreground/40 shrink-0" />
                  Email
                </Link>
              </nav>
            </div>

            <div>
              <p className={colTitle}>Legal</p>
              <nav className="flex flex-col" aria-label="Legal">
                <Link href="/hy2ng-privacy" className={linkClass}>
                  Hy2NG Privacy
                </Link>
                <Link href="/convertit-privacy" className={linkClass}>
                  Convertit Privacy
                </Link>
                <Link
                  isExternal
                  href="https://www.gnu.org/licenses/gpl-3.0.html"
                  className={linkClass}
                >
                  GPL-3.0
                </Link>
              </nav>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-foreground/[0.08] text-xs text-foreground/45 text-center md:text-left">
            <p>&copy; {currentYear} The Byte Array. All rights reserved.</p>
            <p className="mt-1 text-foreground/35">Privacy-friendly software.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
