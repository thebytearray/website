import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { EmailIcon, GithubIcon } from "@/components/icons";

type FooterVariant = "full" | "minimal";

interface FooterProps {
  variant?: FooterVariant;
}

export function Footer({ variant = "full" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  if (variant === "minimal") {
    return (
      <footer className="border-t border-default-100 bg-background mt-auto">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[11px] text-default-400 font-mono">
              © {currentYear} The Byte Array
            </p>
            <p className="text-[11px] text-default-400">
              Licensed under{" "}
              <Link
                isExternal
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                className="text-default-500 hover:text-primary transition-colors"
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
    <footer className="relative border-t border-default-100 bg-background overflow-hidden">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-5xl mx-auto">
          {/* Brand */}
          <div>
            <Link
              href="#"
              className="inline-block mb-3"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <span className="font-display text-lg font-medium text-foreground">
                The Byte[]
              </span>
            </Link>
            <p className="text-sm text-default-500 leading-relaxed">
              Building quality software & open source tools.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display font-medium mb-4 text-xs text-foreground uppercase tracking-widest">
              Navigation
            </h4>
            <div className="space-y-2.5">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-default-500 hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-medium mb-4 text-xs text-foreground uppercase tracking-widest">
              Connect
            </h4>
            <div className="space-y-2.5">
              <Link
                isExternal
                href={siteConfig.links.github}
                className="flex items-center gap-2 text-sm text-default-500 hover:text-primary transition-colors"
              >
                <GithubIcon size={14} />
                GitHub
              </Link>
              <Link
                isExternal
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-sm text-default-500 hover:text-primary transition-colors"
              >
                <EmailIcon size={14} />
                Email
              </Link>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h4 className="font-display font-medium mb-4 text-xs text-foreground uppercase tracking-widest">
              Privacy
            </h4>
            <div className="space-y-2.5">
              <Link
                href="/hy2ng-privacy"
                className="block text-sm text-default-500 hover:text-primary transition-colors"
              >
                Hy2NG Privacy Policy
              </Link>
              <Link
                href="/convertit-privacy"
                className="block text-sm text-default-500 hover:text-primary transition-colors"
              >
                Convertit Pro Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="divider-gradient my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-default-400 font-mono">
            © {currentYear} The Byte Array
          </p>
          <p className="text-xs text-default-400">
            Licensed under{" "}
            <Link
              isExternal
              href="https://www.gnu.org/licenses/gpl-3.0.html"
              className="text-primary/80 hover:text-primary transition-colors"
            >
              GPL-3.0
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
