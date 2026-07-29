import { siteConfig } from "@/config/site";
import { GithubIcon, EmailIcon } from "@/components/icons";

type FooterVariant = "full" | "minimal";

interface FooterProps {
  variant?: FooterVariant;
}

export function Footer({ variant = "full" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "minimal") {
    return (
      <footer className="border-t border-foreground/[0.06] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-between text-sm text-foreground/50">
            <span>&copy; {currentYear} The Byte Array</span>
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
    <footer className="relative border-t border-foreground/[0.06] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/[0.01] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 text-sm">
            <span className="text-foreground font-medium tracking-tight">
              {siteConfig.name}
            </span>
            <span className="w-px h-4 bg-foreground/[0.1]" />
            <a
              className="text-foreground/50 hover:text-foreground transition-colors"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              className="text-foreground/50 hover:text-foreground transition-colors"
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
            >
              <EmailIcon size={16} />
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm text-foreground/50">
            <a
              className="hover:text-foreground transition-colors"
              href="/hy2ng-privacy"
            >
              Hy2NG Privacy
            </a>
            <a
              className="hover:text-foreground transition-colors"
              href="/openloader-privacy"
            >
              OpenLoader Privacy
            </a>
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
        <div className="text-center sm:text-left text-xs text-foreground/40 mt-6 pt-5 border-t border-foreground/[0.06]">
          &copy; {currentYear} The Byte Array. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
