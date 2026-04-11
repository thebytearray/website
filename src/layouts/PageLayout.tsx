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
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer variant={footerVariant} />
      <BackToTop />
    </div>
  );
}
