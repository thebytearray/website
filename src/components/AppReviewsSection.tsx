import { motion } from "framer-motion";

import { StarFilledIcon } from "@/components/icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface AppReview {
  avatar: string;
  name: string;
  stars: number;
  comment: string;
}

interface AppReviewsSectionProps {
  reviews: AppReview[];
}

export function AppReviewsSection({
  reviews,
}: AppReviewsSectionProps) {
  if (!reviews.length) return null;

  return (
    <motion.div
      className="mt-20"
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, margin: "-80px" }}
      whileInView="visible"
    >
      <motion.h3
        className="text-lg font-medium text-foreground text-center mb-8"
        variants={fadeInUp}
      >
        What users are saying
      </motion.h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            className="p-5 bg-foreground/[0.03] border border-foreground/[0.06] rounded-xl"
            variants={fadeInUp}
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                alt={review.name}
                className="w-8 h-8 rounded-full ring-1 ring-foreground/[0.06]"
                src={review.avatar}
              />
              <div>
                <p className="text-sm font-medium text-foreground">
                  {review.name}
                </p>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <StarFilledIcon
                      key={j}
                      className={`w-3 h-3 ${
                        j < review.stars
                          ? "text-amber-500"
                          : "text-foreground/15"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              &ldquo;{review.comment}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
