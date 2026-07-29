import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

type FooterVariant = "full" | "minimal";

interface PageLayoutProps {
  children: React.ReactNode;
  footerVariant?: FooterVariant;
}

export function PageLayout({
  children,
  footerVariant = "full",
}: PageLayoutProps) {
  return (
    <div className="relative flex flex-col min-h-screen bg-background text-foreground">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[60] focus:z-[60] bg-foreground text-background px-4 py-2 rounded-lg text-sm font-medium shadow-lg"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="flex-1 pt-16" id="main-content">
        {children}
      </main>
      <Footer variant={footerVariant} />
    </div>
  );
}
