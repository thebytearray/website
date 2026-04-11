import type { FeaturedAppReview } from "@/components/FeaturedAppSection";

import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/animations";
import { StarFilledIcon, StarIcon } from "@/components/icons";

export interface AppReviewsSectionProps {
  reviews: FeaturedAppReview[];
  appName?: string;
}

const STAR_SIZE = 12;

function ReviewStars({ count }: { count: number }) {
  const filled = Math.min(5, Math.max(0, Math.round(count)));

  return (
    <div
      aria-label={`${filled} out of 5 stars`}
      className="flex gap-px items-center"
      role="img"
    >
      {Array.from({ length: 5 }, (_, i) =>
        i < filled ? (
          <StarFilledIcon
            key={i}
            aria-hidden
            className="text-amber-500 dark:text-amber-400 shrink-0"
            size={STAR_SIZE}
          />
        ) : (
          <StarIcon
            key={i}
            aria-hidden
            className="text-foreground/18 shrink-0"
            size={STAR_SIZE}
          />
        ),
      )}
    </div>
  );
}

export function AppReviewsSection({
  reviews,
  appName,
}: AppReviewsSectionProps) {
  if (!reviews.length) return null;

  return (
    <motion.div
      className="mt-16 sm:mt-20 max-w-5xl mx-auto"
      variants={fadeInUp}
    >
      <div className="text-center mb-2">
        <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-[0.22em] mb-1.5 font-medium">
          Reviews
        </p>
        <h2 className="text-xl sm:text-2xl font-display text-foreground tracking-tight leading-[1.15]">
          What users say
        </h2>
      </div>
      <p className="text-center text-[10px] font-mono text-foreground/40 uppercase tracking-[0.18em] mb-6">
        Reviews from Google Play
        {appName ? ` · ${appName}` : ""}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
        {reviews.map((review, globalIndex) => (
          <li
            key={globalIndex}
            className="rounded-xl border border-foreground/[0.08] bg-foreground/[0.02] p-4 flex flex-col"
          >
            <div className="flex items-start gap-2.5 mb-2 shrink-0">
              <img
                alt={review.name}
                className="w-9 h-9 rounded-full object-cover ring-1 ring-foreground/[0.06]"
                height={36}
                loading="lazy"
                referrerPolicy="no-referrer"
                src={review.avatar}
                width={36}
              />
              <div className="min-w-0 flex-1">
                <p className="font-medium text-sm text-foreground truncate">
                  {review.name}
                </p>
                <div className="mt-0.5">
                  <ReviewStars count={review.stars} />
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/55 leading-relaxed">
              &ldquo;{review.comment}&rdquo;
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
