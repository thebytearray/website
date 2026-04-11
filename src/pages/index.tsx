import { useState, useEffect, useCallback } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Input, Textarea } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import { motion } from "framer-motion";

import { FeaturedAppSection } from "@/components/FeaturedAppSection";
import { PageLayout } from "@/layouts/PageLayout";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/config/site";
import { aboutContent } from "@/config/about";
import { fadeIn, fadeInUp, staggerContainer } from "@/lib/animations";
import { fetchGitHubRepos } from "@/lib/githubApi";
import {
  GithubIcon,
  StarIcon,
  ForkIcon,
  ExternalLinkIcon,
  EmailIcon,
  SendIcon,
  ArrowRightIcon,
  languageColors,
  ShieldIcon,
  QrCodeIcon,
  ServerIcon,
  AppsIcon,
  MusicIcon,
  VideoIcon,
  TagIcon,
  ImageIcon,
  WifiOffIcon,
} from "@/components/icons";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  fork: boolean;
}

// App data
const convertitScreenshots = [
  {
    src: "/images/convertit/Screenshot_20251211_065244.png",
    alt: "Home screen with features",
  },
  {
    src: "/images/convertit/Screenshot_20251211_065315.png",
    alt: "Audio conversion",
  },
  {
    src: "/images/convertit/Screenshot_20251211_065357.png",
    alt: "Format selection",
  },
  {
    src: "/images/convertit/Screenshot_20251211_065428.png",
    alt: "Conversion progress",
  },
  {
    src: "/images/convertit/Screenshot_20251211_065436.png",
    alt: "Conversion complete",
  },
];

const convertitFeatures = [
  {
    icon: MusicIcon,
    title: "Audio Conversion",
    desc: "Convert between MP3, FLAC, WAV, AAC, OGG, and more",
  },
  {
    icon: VideoIcon,
    title: "Video Conversion",
    desc: "Transform video files to various formats",
  },
  {
    icon: TagIcon,
    title: "Metadata Editor",
    desc: "Edit audio tags and metadata with ease",
  },
  {
    icon: ImageIcon,
    title: "EXIF Cleaner",
    desc: "Remove EXIF data from images and videos",
  },
  {
    icon: WifiOffIcon,
    title: "100% Offline",
    desc: "All processing happens locally on your device",
  },
  {
    icon: ShieldIcon,
    title: "Privacy First",
    desc: "No data collection, no tracking, no ads",
  },
];

const convertitReviews = [
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjVFGgjSvjWSCq2j34MJyRqoc-uFr5gwZtRanCCSh0mL3crl2gf36g",
    name: "Nasbo",
    stars: 5,
    comment:
      "pretty good app, i can convert things easily and faster unlike where i convert through the browser (cloud convertor 💔) although no bugs at all! but i'd like to see some cool improvements, like flac convertor support and UI interface i'll give this app rate 5 stars :p",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWFibLGguqvq7dcB0PVTG59gzTipO_F6h8HkdHas3iqyZ7NJJNA",
    name: "Tasfiqul Farden",
    stars: 5,
    comment:
      "Good UI that makes the conversion simple, hopefully more formats will be added in the future releases.",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/a-/ALV-UjWWXhOt3pA8EpT3-2PrVS2X1REithpyzA9Rtol-fhqxmBU766P-",
    name: "Playful Cloud",
    stars: 5,
    comment: "Best Audio Conversion app on Playstore.",
  },
  {
    avatar:
      "https://lh3.googleusercontent.com/a/ACg8ocJtRgPW-aqv_l4lQrGTfgoWTGBY6lrFTK9mhiPm8SSbqCIJQcw=mo",
    name: "Jitendra Nath",
    stars: 5,
    comment: "Amazing 🔥",
  },
];

const hy2ngScreenshots = [
  {
    src: "/images/hy2ng/Screenshot_20251201_041544.png",
    alt: "Configurations list",
  },
  {
    src: "/images/hy2ng/Screenshot_20251201_041639.png",
    alt: "Add configuration",
  },
  {
    src: "/images/hy2ng/Screenshot_20251201_041720.png",
    alt: "QR code sharing",
  },
  {
    src: "/images/hy2ng/Screenshot_20251201_041741.png",
    alt: "Server setup wizard",
  },
  { src: "/images/hy2ng/Screenshot_20251201_041802.png", alt: "Per-app proxy" },
];

const hy2ngFeatures = [
  {
    icon: ServerIcon,
    title: "Server Setup Wizard",
    desc: "Configure your own VPS with built-in setup guide",
  },
  {
    icon: QrCodeIcon,
    title: "QR Code Import",
    desc: "Import configs via QR code or clipboard",
  },
  {
    icon: AppsIcon,
    title: "Per-App Proxy",
    desc: "Choose which apps use the VPN connection",
  },
  {
    icon: ShieldIcon,
    title: "Privacy First",
    desc: "No ads, no tracking, all data stays on device",
  },
];

export default function IndexPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const { repos: data } = await fetchGitHubRepos(
        siteConfig.githubApi.repos,
      );
      const filteredRepos = (data as GitHubRepo[])
        .filter((repo) => !repo.fork)
        .sort((a, b) => b.stargazers_count - a.stargazers_count);

      setRepos(filteredRepos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load projects");
    } finally {
      setLoading(false);
    }
  }, []);

  const languages = Array.from(
    new Set(repos.map((repo) => repo.language).filter(Boolean)),
  ).sort();

  const filteredRepos = selectedLanguage
    ? repos.filter((repo) => repo.language === selectedLanguage)
    : repos;

  const handleContactSubmit = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    const subject = encodeURIComponent(`Message from ${contactForm.name}`);
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setContactForm({ name: "", email: "", message: "" });
    }, 3000);
  }, [contactForm.name, contactForm.email, contactForm.message, isSubmitting]);

  const totalStars = repos.reduce(
    (sum, repo) => sum + repo.stargazers_count,
    0,
  );

  return (
    <PageLayout>
      {/* ======== HERO ======== */}
      <section className="relative border-b border-foreground/[0.06] overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 sm:py-32 md:py-36 min-h-[70vh] flex flex-col justify-center">
          <motion.div
            animate="visible"
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-display text-foreground tracking-tight leading-[1.08] mb-6"
              variants={fadeInUp}
            >
              Software that works
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-foreground/55 max-w-xl mx-auto mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Privacy-friendly tools, libraries, and products. Open source where
              it helps the community; clear policies everywhere else.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center"
              variants={fadeInUp}
            >
              <Button
                isExternal
                as={Link}
                className="font-medium bg-foreground text-background btn-hover px-8"
                endContent={<ArrowRightIcon size={16} />}
                href={siteConfig.links.github}
                radius="full"
                size="lg"
              >
                View Projects
              </Button>
              <Button
                as={Link}
                className="font-medium border-foreground/[0.12] hover:border-foreground/25 hover:bg-foreground/[0.03] px-8"
                href="#contact"
                radius="full"
                size="lg"
                variant="bordered"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-10 sm:gap-12 mt-14 pt-8 border-t border-foreground/[0.06] max-w-lg mx-auto"
              variants={fadeInUp}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-foreground font-mono stat-number tracking-tight">
                  {repos.length || "..."}
                </div>
                <div className="text-[11px] text-foreground/40 mt-1.5 uppercase tracking-[0.15em]">
                  Repositories
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-foreground font-mono stat-number tracking-tight">
                  {totalStars || "..."}
                </div>
                <div className="text-[11px] text-foreground/40 mt-1.5 uppercase tracking-[0.15em]">
                  GitHub Stars
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-semibold text-foreground font-mono tracking-tight">
                  OSS
                </div>
                <div className="text-[11px] text-foreground/40 mt-1.5 uppercase tracking-[0.15em]">
                  &amp; Products
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section
        className="relative py-24 sm:py-32 border-t border-foreground/[0.06] overflow-hidden"
        id="about"
      >
        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            whileInView="visible"
          >
            <motion.p
              className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] font-medium mb-10 text-center lg:text-left"
              variants={fadeInUp}
            >
              {aboutContent.label}
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <motion.div
                className="text-center lg:text-left"
                variants={fadeInUp}
              >
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight leading-[1.1] mb-5">
                  {aboutContent.headline}
                </h2>
                <p className="text-lg text-foreground/55 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {aboutContent.lead}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="rounded-[28px] border border-foreground/[0.08] bg-foreground/[0.03] px-6 sm:px-8 py-2 divide-y divide-foreground/[0.06]">
                  {aboutContent.pillars.map((item) => (
                    <div key={item.num} className="py-6 first:pt-5 last:pb-5">
                      <span className="text-[11px] font-mono text-foreground/35 tracking-wider">
                        {item.num}
                      </span>
                      <h3 className="font-medium text-foreground text-base sm:text-lg mt-2 mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm text-foreground/55 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-14 lg:mt-16 max-w-3xl lg:max-w-none"
              variants={fadeInUp}
            >
              <p className="text-foreground/55 leading-relaxed text-base lg:text-lg text-left">
                {aboutContent.mission}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== FEATURED APPS ======== */}
      <FeaturedAppSection
        appName="Convertit Pro"
        description="A powerful offline media toolkit for Android. Convert audio and video, edit metadata, and clean EXIF data with complete privacy."
        features={convertitFeatures}
        iconAlt="Convertit Pro App Icon"
        iconSrc="/images/convertit/c_pro.png"
        id="convertit"
        playStoreUrl="https://play.google.com/store/apps/details?id=org.thebytearray.convertit"
        privacyUrl="/convertit-privacy"
        reviews={convertitReviews}
        screenshots={convertitScreenshots}
        subtitle="Media Toolkit"
      />

      <FeaturedAppSection
        appName="Hy2NG"
        description="A powerful Hysteria2 VPN client for Android with a built-in server setup wizard. Connect to Hysteria2 servers with ease."
        features={hy2ngFeatures}
        iconAlt="Hy2NG App Icon"
        iconSrc="/images/hy2ng/hy2ng.png"
        id="featured-app"
        playStoreUrl="https://play.google.com/store/apps/details?id=org.thebytearray.hy2.ng"
        privacyUrl="/hy2ng-privacy"
        screenshots={hy2ngScreenshots}
        subtitle="Hysteria2 Client"
      />

      {/* ======== PROJECTS ======== */}
      <section
        className="relative py-28 sm:py-36 border-t border-foreground/[0.06] overflow-hidden"
        id="projects"
      >
        <div className="absolute inset-0 bg-section-gradient" />

        <div className="relative container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            whileInView="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionHeader
                className="mb-10"
                description="Public repositories and community-driven projects"
                descriptionMaxWidth="max-w-md"
                label="Projects"
                title="Open Source"
              />
            </motion.div>

            {loading ? (
              <div className="flex justify-center py-20">
                <Spinner color="default" size="lg" />
              </div>
            ) : error ? (
              <motion.div className="text-center py-20" variants={fadeInUp}>
                <p className="text-foreground/55 mb-4">{error}</p>
                <Button
                  className="border-foreground/[0.12] text-foreground/55"
                  radius="full"
                  size="sm"
                  variant="bordered"
                  onPress={fetchRepos}
                >
                  Retry
                </Button>
              </motion.div>
            ) : repos.length === 0 ? (
              <motion.div className="text-center py-20" variants={fadeInUp}>
                <p className="text-foreground/55">No repositories found.</p>
              </motion.div>
            ) : (
              <>
                {languages.length > 1 && (
                  <motion.div
                    className="flex flex-wrap justify-center gap-2 mb-8"
                    variants={fadeInUp}
                  >
                    <Button
                      className={`text-xs ${
                        selectedLanguage === null
                          ? "bg-foreground text-background"
                          : "border-foreground/[0.12] text-foreground/55 hover:border-foreground/25"
                      }`}
                      radius="full"
                      size="sm"
                      variant={selectedLanguage === null ? "solid" : "bordered"}
                      onPress={() => setSelectedLanguage(null)}
                    >
                      All ({repos.length})
                    </Button>
                    {languages.map((lang) => (
                      <Button
                        key={lang}
                        className={`text-xs ${
                          selectedLanguage === lang
                            ? "bg-foreground text-background"
                            : "border-foreground/[0.12] text-foreground/55 hover:border-foreground/25"
                        }`}
                        radius="full"
                        size="sm"
                        variant={
                          selectedLanguage === lang ? "solid" : "bordered"
                        }
                        onPress={() => setSelectedLanguage(lang)}
                      >
                        <span
                          className="w-2 h-2 rounded-full mr-1.5"
                          style={{
                            backgroundColor: languageColors[lang!] || "#71717a",
                          }}
                        />
                        {lang} (
                        {repos.filter((r) => r.language === lang).length})
                      </Button>
                    ))}
                  </motion.div>
                )}

                <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                  variants={staggerContainer}
                >
                  {filteredRepos.map((repo) => (
                    <motion.div key={repo.id} variants={fadeInUp}>
                      <Card
                        isExternal
                        isPressable
                        as={Link}
                        className="h-full bg-foreground/[0.02] border border-foreground/[0.06] group card-hover"
                        href={repo.html_url}
                        shadow="none"
                      >
                        <CardHeader className="flex justify-between items-start pb-0">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-foreground/[0.06] flex items-center justify-center">
                              <GithubIcon
                                className="text-foreground/40"
                                size={15}
                              />
                            </div>
                            <h3 className="font-medium text-foreground group-hover:opacity-70 transition-opacity font-mono text-sm">
                              {repo.name}
                            </h3>
                          </div>
                          <ExternalLinkIcon
                            className="text-foreground/20 group-hover:text-foreground/40 transition-colors"
                            size={13}
                          />
                        </CardHeader>
                        <CardBody className="py-2.5">
                          <p className="text-sm text-foreground/55 line-clamp-2">
                            {repo.description || "No description"}
                          </p>
                        </CardBody>
                        <CardFooter className="pt-0 gap-3">
                          {repo.language && (
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-2.5 h-2.5 rounded-full"
                                style={{
                                  backgroundColor:
                                    languageColors[repo.language] || "#71717a",
                                }}
                              />
                              <span className="text-xs text-foreground/40 font-mono">
                                {repo.language}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <StarIcon
                              className="text-foreground/30"
                              size={12}
                            />
                            <span className="text-xs text-foreground/40 font-mono">
                              {repo.stargazers_count}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ForkIcon
                              className="text-foreground/30"
                              size={12}
                            />
                            <span className="text-xs text-foreground/40 font-mono">
                              {repo.forks_count}
                            </span>
                          </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}

            {repos.length > 0 && !loading && (
              <motion.div className="text-center mt-10" variants={fadeIn}>
                <Button
                  isExternal
                  as={Link}
                  className="font-medium border-foreground/[0.12] hover:border-foreground/25 text-foreground/55"
                  endContent={<ExternalLinkIcon size={12} />}
                  href={siteConfig.links.github}
                  radius="full"
                  size="sm"
                  variant="bordered"
                >
                  View All on GitHub
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ======== TEAM ======== */}
      <section
        className="relative py-24 sm:py-32 border-t border-foreground/[0.06] overflow-hidden"
        id="team"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <motion.div
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            whileInView="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionHeader
                className="mb-12"
                label="Team"
                title="Contributors"
              />
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="rounded-[28px] border border-foreground/[0.08] bg-foreground/[0.03] p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
                <div className="flex justify-center md:justify-start shrink-0">
                  <Avatar
                    className="w-28 h-28 sm:w-32 sm:h-32 ring-4 ring-background"
                    src={siteConfig.team.founder.avatar}
                  />
                </div>

                <div className="text-center md:text-left flex-1 min-w-0">
                  <h3 className="font-display text-2xl sm:text-3xl text-foreground tracking-tight">
                    {siteConfig.team.founder.name}
                  </h3>
                  <p className="inline-flex mt-3 rounded-full px-3 py-1 text-sm bg-foreground/[0.06] text-foreground/70">
                    {siteConfig.team.founder.role}
                  </p>
                  <p className="text-foreground/55 text-sm sm:text-base mt-4 leading-relaxed max-w-xl md:max-w-none mx-auto md:mx-0">
                    {siteConfig.team.founder.bio}
                  </p>
                  <div className="mt-6 flex justify-center md:justify-start">
                    <Button
                      isExternal
                      as={Link}
                      className="font-medium bg-foreground text-background btn-hover"
                      href={siteConfig.team.founder.github}
                      radius="full"
                      size="md"
                      startContent={<GithubIcon size={16} />}
                    >
                      @{siteConfig.team.founder.username}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== CONTACT ======== */}
      <section
        className="relative py-24 sm:py-32 border-t border-foreground/[0.06] overflow-hidden"
        id="contact"
      >
        <div className="absolute inset-0 bg-section-gradient" />

        <div className="relative container mx-auto px-4 sm:px-6 max-w-5xl">
          <motion.div
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            whileInView="visible"
          >
            <motion.div
              className="lg:col-span-5 space-y-6 text-center lg:text-left"
              variants={fadeInUp}
            >
              <p className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] font-medium">
                Contact
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-foreground tracking-tight leading-[1.1]">
                Get in touch
              </h2>
              <p className="text-lg text-foreground/55 leading-relaxed">
                Questions or interested in collaborating? Send a message or
                email us directly.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                <Button
                  isExternal
                  as={Link}
                  className="font-medium border-foreground/[0.12] bg-foreground/[0.04] hover:bg-foreground/[0.07] text-foreground/80"
                  href={`mailto:${siteConfig.email}`}
                  radius="full"
                  size="md"
                  startContent={<EmailIcon size={16} />}
                  variant="bordered"
                >
                  {siteConfig.email}
                </Button>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-7 w-full" variants={fadeInUp}>
              <Card
                className="rounded-[28px] bg-foreground/[0.02] border border-foreground/[0.08]"
                shadow="none"
              >
                <CardBody className="p-6 sm:p-8 space-y-5">
                  <Input
                    classNames={{
                      label: "text-foreground/55 text-xs font-medium",
                      inputWrapper:
                        "rounded-2xl border-foreground/[0.08] hover:border-foreground/[0.15] focus-within:!border-foreground/30",
                    }}
                    label="Name"
                    labelPlacement="outside"
                    placeholder="Your name"
                    radius="lg"
                    size="md"
                    type="text"
                    value={contactForm.name}
                    variant="bordered"
                    onValueChange={(value) =>
                      setContactForm({ ...contactForm, name: value })
                    }
                  />
                  <Input
                    classNames={{
                      label: "text-foreground/55 text-xs font-medium",
                      inputWrapper:
                        "rounded-2xl border-foreground/[0.08] hover:border-foreground/[0.15] focus-within:!border-foreground/30",
                    }}
                    label="Email"
                    labelPlacement="outside"
                    placeholder="your@email.com"
                    radius="lg"
                    size="md"
                    type="email"
                    value={contactForm.email}
                    variant="bordered"
                    onValueChange={(value) =>
                      setContactForm({ ...contactForm, email: value })
                    }
                  />
                  <Textarea
                    disableAutosize
                    classNames={{
                      label: "text-foreground/55 text-xs font-medium",
                      inputWrapper:
                        "rounded-2xl border-foreground/[0.08] hover:border-foreground/[0.15] focus-within:!border-foreground/30",
                    }}
                    label="Message"
                    labelPlacement="outside"
                    minRows={4}
                    placeholder="Your message"
                    radius="lg"
                    size="md"
                    value={contactForm.message}
                    variant="bordered"
                    onValueChange={(value) =>
                      setContactForm({ ...contactForm, message: value })
                    }
                  />
                  {formSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-3">
                        <SendIcon
                          className="text-green-600 dark:text-green-400"
                          size={20}
                        />
                      </div>
                      <p className="font-medium text-foreground">
                        Your email app should open now
                      </p>
                      <p className="text-sm text-foreground/55 mt-1">
                        Send the pre-filled email to complete your message
                      </p>
                    </div>
                  ) : (
                    <Button
                      className="w-full font-medium bg-foreground text-background btn-hover"
                      endContent={<SendIcon size={14} />}
                      isDisabled={
                        !contactForm.name ||
                        !contactForm.email ||
                        !contactForm.message ||
                        isSubmitting
                      }
                      isLoading={isSubmitting}
                      radius="full"
                      size="lg"
                      onPress={handleContactSubmit}
                    >
                      Open email app to send message
                    </Button>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
