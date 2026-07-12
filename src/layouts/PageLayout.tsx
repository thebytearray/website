import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

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
    <div className="relative flex flex-col min-h-screen bg-background">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[60] focus:z-[60] bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium shadow-lg"
        href="#main-content"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="flex-1" id="main-content">
        {children}
      </main>
      <Footer variant={footerVariant} />
      <BackToTop />
    </div>
  );
}
