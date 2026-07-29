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
    <footer className="border-t border-foreground/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm">
            <span className="text-foreground/70 font-medium">
              {siteConfig.name}
            </span>
            <a
              className="text-foreground/50 hover:text-foreground transition-colors"
              href={siteConfig.links.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GithubIcon size={16} />
            </a>
            <a
              className="text-foreground/50 hover:text-foreground transition-colors"
              href={`mailto:${siteConfig.email}`}
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
        <div className="text-center sm:text-left text-xs text-foreground/40 mt-4 pt-4 border-t border-foreground/[0.06]">
          &copy; {currentYear} The Byte Array
        </div>
      </div>
    </footer>
  );
}
