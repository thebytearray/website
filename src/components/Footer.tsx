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
  "text-sm text-foreground/50 hover:text-foreground transition-colors";

const colTitle = "text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-4";

export function Footer({ variant = "full" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { goToHash } = useHashNavigation();

  if (variant === "minimal") {
    return (
      <footer className="border-t border-foreground/[0.06] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-foreground/50">
            <p>&copy; {currentYear} The Byte Array</p>
            <a
              className="hover:text-foreground transition-colors"
              href="https://www.gnu.org/licenses/gpl-3.0.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              GPL-3.0
            </a>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-foreground/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <p className="text-sm font-semibold text-foreground mb-3">{siteConfig.name}</p>
            <p className="text-sm text-foreground/55 leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <p className={colTitle}>Product</p>
            <nav aria-label="Products" className="flex flex-col gap-3">
              <button className={linkClass} onClick={(e) => goToHash(e, "#openloader")} type="button">
                OpenLoader
              </button>
              <button className={linkClass} onClick={(e) => goToHash(e, "#featured-app")} type="button">
                Hy2NG
              </button>
              <button className={linkClass} onClick={(e) => goToHash(e, "#projects")} type="button">
                Open Source
              </button>
            </nav>
          </div>

          <div>
            <p className={colTitle}>Company</p>
            <nav aria-label="Company" className="flex flex-col gap-3">
              {siteConfig.navItems.map((item) => (
                <button key={item.href} className={linkClass} onClick={(e) => goToHash(e, item.href)} type="button">
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="col-span-2 md:col-span-1">
            <p className={colTitle}>Connect</p>
            <nav aria-label="Social and contact" className="flex flex-col gap-3">
              <a
                className={`${linkClass} inline-flex items-center gap-2`}
                href={siteConfig.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon className="text-foreground/40 shrink-0" size={16} />
                GitHub
              </a>
              <a className={`${linkClass} inline-flex items-center gap-2`} href={`mailto:${siteConfig.email}`}>
                <EmailIcon className="text-foreground/40 shrink-0" size={16} />
                Email
              </a>
              <a className={linkClass} href="/hy2ng-privacy">Hy2NG Privacy</a>
              <a className={linkClass} href="/openloader-privacy">OpenLoader Privacy</a>
              <a
                className={linkClass}
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                GPL-3.0
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-foreground/[0.06] text-xs text-foreground/45">
          <p>&copy; {currentYear} The Byte Array. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
