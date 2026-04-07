import { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
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
      className="relative py-28 sm:py-36 border-t border-foreground/[0.06] overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots opacity-40" />

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

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
            {/* Screenshots Carousel */}
            <motion.div
              ref={carouselRef}
              variants={fadeInUp}
              className="relative order-2 lg:order-1"
            >
              <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                <div className="relative bg-[#1a1a1a] rounded-[2.8rem] p-[3px] shadow-2xl ring-1 ring-white/5">
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
                          transition={{ duration: 0.3, ease: "easeOut" }}
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
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 min-w-8 bg-foreground/[0.06] border border-foreground/[0.08] hover:bg-foreground/[0.1] text-foreground/55"
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
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 min-w-8 bg-foreground/[0.06] border border-foreground/[0.08] hover:bg-foreground/[0.1] text-foreground/55"
                  aria-label="Next screenshot"
                  onPress={nextScreenshot}
                >
                  <ChevronRightIcon size={16} />
                </Button>

                <div className="flex justify-center gap-1.5 mt-6">
                  {screenshots.map((_, index) => (
                    <button
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-200 ${
                        index === currentScreenshot
                          ? "bg-foreground w-6"
                          : "bg-foreground/20 w-1.5 hover:bg-foreground/35"
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                      onClick={() => setCurrentScreenshot(index)}
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
              <div className="flex items-center gap-4">
                <img
                  src={iconSrc}
                  alt={iconAlt}
                  loading="lazy"
                  className="w-16 h-16 rounded-2xl shadow-lg"
                />
                <div>
                  <h3 className="font-display text-2xl text-foreground italic">{appName}</h3>
                  <p className="text-sm text-foreground/40 font-mono">{subtitle}</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="feature-card p-4 rounded-xl border border-foreground/[0.06] bg-foreground/[0.02] hover:border-foreground/[0.12] transition-all duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-foreground/[0.06] flex items-center justify-center mb-3 group-hover:bg-foreground/[0.1] transition-colors">
                      <feature.icon size={18} className="text-foreground/55" />
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

              <div className="flex flex-wrap gap-3">
                <Button
                  as={Link}
                  isExternal
                  href={playStoreUrl}
                  className="font-medium bg-foreground text-background btn-hover"
                  size="lg"
                  radius="full"
                  startContent={<PlayStoreIcon size={18} />}
                >
                  Get on Google Play
                </Button>
              </div>

              <p className="text-xs text-foreground/40">
                Questions or feedback?{" "}
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/55 hover:text-foreground transition-colors text-xs underline underline-offset-2"
                >
                  {siteConfig.email}
                </Link>
              </p>
            </motion.div>
          </div>

          {reviews && reviews.length > 0 && (
            <AppReviewsSection reviews={reviews} appName={appName} />
          )}
        </motion.div>
      </div>
    </section>
  );
}
