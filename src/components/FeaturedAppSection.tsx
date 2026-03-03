import { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayStoreIcon,
  StarFilledIcon,
} from "@/components/icons";

export interface FeaturedAppFeature {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

export interface FeaturedAppReview {
  avatar: string;
  name: string;
  stars: number;
  comment: string;
}

export interface FeaturedAppSectionProps {
  id: string;
  appName: string;
  subtitle: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
  screenshots: { src: string; alt: string }[];
  features: FeaturedAppFeature[];
  reviews?: FeaturedAppReview[];
  playStoreUrl: string;
}

export function FeaturedAppSection({
  id,
  appName,
  subtitle,
  description,
  iconSrc,
  iconAlt,
  screenshots,
  features,
  reviews,
  playStoreUrl,
}: FeaturedAppSectionProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set());
  const carouselRef = useRef<HTMLDivElement>(null);

  const toggleReview = (index: number) => {
    setExpandedReviews((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        const idx = currentScreenshot;
        [idx, (idx + 1) % screenshots.length].forEach((i) => {
          const img = new Image();
          img.src = screenshots[i].src;
        });
      },
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [currentScreenshot, screenshots]);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section
      id={id}
      className="relative py-24 sm:py-32 bg-default-50/50 dark:bg-default-50/20 border-t border-default-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader
              label="Featured App"
              title={appName}
              description={description}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Screenshots Carousel */}
            <motion.div
              ref={carouselRef}
              variants={fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                <div className="relative bg-[#1a1a1a] rounded-[2.8rem] p-[3px] shadow-2xl ring-1 ring-zinc-700/50">
                  <div className="bg-[#0d0d0d] rounded-[2.6rem] p-[6px]">
                    <div className="relative rounded-[2.2rem] overflow-hidden bg-black aspect-[9/20]">
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#0a0a0a] rounded-full z-10 ring-1 ring-zinc-800" />
                      {screenshots.map((screenshot, index) => (
                        <motion.img
                          key={index}
                          src={screenshot.src}
                          alt={screenshot.alt}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={false}
                          animate={{
                            opacity: index === currentScreenshot ? 1 : 0,
                            scale: index === currentScreenshot ? 1 : 1.02,
                          }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute left-[-2px] top-28 w-[3px] h-8 bg-zinc-700 rounded-l-sm" />
                  <div className="absolute left-[-2px] top-40 w-[3px] h-12 bg-zinc-700 rounded-l-sm" />
                  <div className="absolute right-[-2px] top-32 w-[3px] h-10 bg-zinc-700 rounded-r-sm" />
                </div>

                <Button
                  isIconOnly
                  variant="flat"
                  size="sm"
                  radius="full"
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 min-w-8 border border-default-200 dark:border-default-100 hover:border-primary hover:text-primary"
                  aria-label="Previous screenshot"
                  onPress={prevScreenshot}
                >
                  <ChevronLeftIcon size={16} />
                </Button>
                <Button
                  isIconOnly
                  variant="flat"
                  size="sm"
                  radius="full"
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 min-w-8 border border-default-200 dark:border-default-100 hover:border-primary hover:text-primary"
                  aria-label="Next screenshot"
                  onPress={nextScreenshot}
                >
                  <ChevronRightIcon size={16} />
                </Button>

                <div className="flex justify-center gap-1.5 mt-6">
                  {screenshots.map((_, index) => (
                    <Button
                      key={index}
                      isIconOnly
                      variant="flat"
                      size="sm"
                      radius="full"
                      className={`w-2 h-2 min-w-2 min-h-2 p-0 transition-all ${
                        index === currentScreenshot
                          ? "bg-primary w-6 min-w-6"
                          : "bg-default-300 dark:bg-default-200 hover:bg-default-400"
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                      onPress={() => setCurrentScreenshot(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* App Info */}
            <motion.div
              variants={fadeInUp}
              className="order-1 lg:order-2 space-y-8"
            >
              <div className="flex items-center gap-3">
                <img
                  src={iconSrc}
                  alt={iconAlt}
                  loading="lazy"
                  className="w-14 h-14 rounded-2xl shadow-lg"
                />
                <div>
                  <h3 className="font-medium text-lg text-foreground">{appName}</h3>
                  <p className="text-xs text-default-500 font-mono">{subtitle}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card p-4 rounded-xl border border-default-200 dark:border-default-100/50 bg-background/80 hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <feature.icon size={18} className="text-primary" />
                    </div>
                    <h4 className="font-medium text-sm text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-default-500 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  as={Link}
                  isExternal
                  href={playStoreUrl}
                  color="primary"
                  size="lg"
                  radius="lg"
                  className="font-medium btn-glow shadow-lg shadow-primary/20"
                  startContent={<PlayStoreIcon size={18} />}
                >
                  Get on Google Play
                </Button>
              </div>

              <p className="text-xs text-default-400">
                Questions or feedback?{" "}
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.email}
                </Link>
              </p>
            </motion.div>
          </div>

          {/* User Reviews */}
          {reviews && reviews.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-24">
              <SectionHeader
                label="Reviews"
                title="What Users Say"
                className="mb-12"
              />
              <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {reviews.map((review, index) => {
                  const isExpanded = expandedReviews.has(index);
                  const isLongReview = review.comment.length > 150;
                  return (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="p-5 rounded-2xl border border-default-200 dark:border-default-100/50 bg-background/80 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3 mb-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          loading="lazy"
                          className="w-11 h-11 rounded-full object-cover ring-2 ring-default-100 dark:ring-default-200"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm text-foreground truncate">
                            {review.name}
                          </h4>
                          <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: review.stars }).map((_, i) => (
                              <StarFilledIcon
                                key={i}
                                size={14}
                                className="text-amber-400 drop-shadow-sm"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p
                        className={`text-sm text-default-500 leading-relaxed italic ${
                          !isExpanded && isLongReview ? "line-clamp-3" : ""
                        }`}
                      >
                        &quot;{review.comment}&quot;
                      </p>
                      {isLongReview && (
                        <Button
                          variant="light"
                          size="sm"
                          className="mt-3 text-xs text-primary hover:text-primary/80 font-medium min-w-0 h-auto p-0"
                          onPress={() => toggleReview(index)}
                        >
                          {isExpanded ? "← Show less" : "Read more →"}
                        </Button>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
