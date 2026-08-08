import { Link } from "react-router-dom";

import { PageLayout } from "@/layouts/PageLayout";

export default function NotFoundPage() {
  return (
    <PageLayout footerVariant="minimal">
      <section className="flex flex-col items-center justify-center min-h-[55vh] sm:min-h-[60vh] px-4 py-16 text-center">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-px w-6 bg-foreground/20" />
          <span className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] font-medium">
            404
          </span>
          <span className="h-px w-6 bg-foreground/20" />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1] mb-4">
          Page not found
        </h1>
        <p className="text-foreground/55 text-base max-w-md mb-10 leading-relaxed">
          That URL does not exist or has moved. Check the address or return to
          the homepage.
        </p>
        <Link
          className="group relative inline-flex items-center justify-center bg-foreground text-background px-8 py-3 text-sm font-medium rounded-md transition-transform hover:scale-[1.02] overflow-hidden"
          to="/"
        >
          <span
            aria-hidden
            className="absolute inset-0 bg-background origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
          />
          <span className="relative z-10 transition-colors duration-300 group-hover:text-foreground">
            Back to home
          </span>
        </Link>
      </section>
    </PageLayout>
  );
}
