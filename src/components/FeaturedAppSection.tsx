import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { AppReviewsSection } from "@/components/AppReviewsSection";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayStoreIcon,
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
  privacyUrl?: string;
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
  privacyUrl,
}: FeaturedAppSectionProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

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
      { rootMargin: "100px" },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [currentScreenshot, screenshots]);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length,
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevScreenshot();
    if (e.key === "ArrowRight") nextScreenshot();
  };

  return (
    <section
      className="relative py-28 sm:py-36 border-t border-foreground/[0.06] section-glow"
      id={id}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-80px" }}
          whileInView="visible"
        >
          <motion.div variants={fadeInUp}>
            <SectionHeader
              description={description}
              label="Featured App"
              title={appName}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
            {/* Screenshots Carousel */}
            <motion.div
              ref={carouselRef}
              className="relative order-2 lg:order-1"
              variants={fadeInUp}
            >
              <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                <button
                  aria-label="Navigate screenshots with arrow keys"
                  className="relative w-full rounded-[2.8rem] p-[3px] shadow-xl ring-1 ring-foreground/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
                  style={{ background: "var(--surface-secondary)" }}
                  type="button"
                  onKeyDown={handleKeyDown}
                >
                  <div
                    className="rounded-[2.6rem] p-[6px]"
                    style={{ background: "var(--surface-tertiary)" }}
                  >
                    <div className="relative rounded-[2.2rem] overflow-hidden bg-black aspect-[9/20]">
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#0a0a0a] rounded-full z-10 ring-1 ring-zinc-800" />
                      {screenshots.map((screenshot, index) => (
                        <motion.img
                          key={index}
                          alt={screenshot.alt}
                          animate={{
                            opacity: index === currentScreenshot ? 1 : 0,
                          }}
                          className="absolute inset-0 w-full h-full object-cover"
                          initial={false}
                          loading="lazy"
                          src={screenshot.src}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="absolute left-[-2px] top-28 w-[3px] h-8 rounded-l-sm bg-foreground/[0.08]" />
                  <div className="absolute left-[-2px] top-40 w-[3px] h-12 rounded-l-sm bg-foreground/[0.08]" />
                  <div className="absolute right-[-2px] top-32 w-[3px] h-10 rounded-r-sm bg-foreground/[0.08]" />
                </button>

                <button
                  aria-label="Previous screenshot"
                  className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 lg:w-9 lg:h-9 items-center justify-center rounded-xl bg-foreground/[0.06] border border-foreground/[0.08] hover:bg-foreground/[0.1] text-foreground/55 transition-all hover:scale-105"
                  type="button"
                  onClick={prevScreenshot}
                >
                  <ChevronLeftIcon size={14} />
                </button>
                <button
                  aria-label="Next screenshot"
                  className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 lg:w-9 lg:h-9 items-center justify-center rounded-xl bg-foreground/[0.06] border border-foreground/[0.08] hover:bg-foreground/[0.1] text-foreground/55 transition-all hover:scale-105"
                  type="button"
                  onClick={nextScreenshot}
                >
                  <ChevronRightIcon size={14} />
                </button>

                <div
                  aria-label="Screenshots"
                  className="flex justify-center gap-2 mt-6"
                  role="tablist"
                >
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      aria-label={`Screenshot ${index + 1}`}
                      aria-selected={index === currentScreenshot}
                      className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 ${
                        index === currentScreenshot
                          ? "bg-foreground w-6"
                          : "bg-foreground/15 w-2 hover:bg-foreground/30"
                      }`}
                      role="tab"
                      onClick={() => setCurrentScreenshot(index)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* App Info */}
            <motion.div
              className="order-1 lg:order-2 space-y-8"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-4">
                <img
                  alt={iconAlt}
                  className="w-16 h-16 rounded-2xl shadow-lg ring-1 ring-foreground/[0.06]"
                  loading="lazy"
                  src={iconSrc}
                />
                <div>
                  <h3 className="font-display text-2xl text-foreground italic">
                    {appName}
                  </h3>
                  <p className="text-sm text-foreground/40 font-mono">
                    {subtitle}
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 border border-foreground/[0.06] bg-foreground/[0.02] rounded-xl hover:border-foreground/[0.12] transition-all duration-200 group card-hover"
                  >
                    <div className="w-9 h-9 bg-foreground/[0.06] rounded-lg flex items-center justify-center mb-3 group-hover:bg-foreground/[0.1] transition-colors">
                      <feature.icon className="text-foreground/55" size={18} />
                    </div>
                    <h4 className="font-medium text-sm text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-foreground/40 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium rounded-full transition-all hover:opacity-85 hover:scale-[1.02]"
                  href={playStoreUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <PlayStoreIcon size={18} />
                  Get on Google Play
                </a>
                {privacyUrl && (
                  <a
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-foreground/[0.12] hover:border-foreground/25 text-foreground/70 text-sm font-medium rounded-full transition-colors"
                    href={privacyUrl}
                  >
                    Privacy Policy
                  </a>
                )}
              </div>

              <p className="text-xs text-foreground/40">
                Questions or feedback?{" "}
                <a
                  className="text-foreground/55 hover:text-foreground transition-colors text-xs underline underline-offset-2"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
            </motion.div>
          </div>

          {reviews && reviews.length > 0 && (
            <AppReviewsSection reviews={reviews} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
