import { Link } from "react-router-dom";

import { PageLayout } from "@/layouts/PageLayout";

export default function NotFoundPage() {
  return (
    <PageLayout footerVariant="minimal">
      <section className="flex flex-col items-center justify-center min-h-[55vh] sm:min-h-[60vh] px-4 py-16 text-center">
        <p className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] font-medium mb-5">
          404
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1] mb-4">
          Page not found
        </h1>
        <p className="text-foreground/55 text-base max-w-md mb-10 leading-relaxed">
          That URL does not exist or has moved. Check the address or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3 text-sm font-medium btn-hover"
        >
          Back to home
        </Link>
      </section>
    </PageLayout>
  );
}
