import { useState, useEffect, useCallback } from "react";
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
  DownloadIcon,
  AndroidIcon,
  TerminalIcon,
  ZapIcon,
  SystemIcon,
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

const openloaderScreenshots = [
  { src: "/images/openloader/1.png", alt: "OpenLoader home screen" },
  { src: "/images/openloader/2.png", alt: "Install queue and progress" },
  {
    src: "/images/openloader/3.png",
    alt: "Wireless debugging and device connection",
  },
  { src: "/images/openloader/4.png", alt: "Settings and install options" },
];

const openloaderFeatures = [
  {
    icon: DownloadIcon,
    title: "Sideload APKs",
    desc: "Install APK files you provide outside the store flow, including several in one queue",
  },
  {
    icon: AndroidIcon,
    title: "Faster on many devices",
    desc: "Sideload and push debug builds to several phones or tablets without repeating every step",
  },
  {
    icon: TerminalIcon,
    title: "Wireless ADB",
    desc: "Connect and deploy over the network on Android 11 and newer",
  },
  {
    icon: ZapIcon,
    title: "Pairing helpers",
    desc: "Flows and checks for wireless debugging and pairing where supported",
  },
  {
    icon: SystemIcon,
    title: "Optional Shizuku",
    desc: "Use a privileged install path when you grant Shizuku access",
  },
  {
    icon: ShieldIcon,
    title: "Privacy first",
    desc: "No analytics or cloud account; history and preferences stay on your device",
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
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center border-b border-foreground/[0.06]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-32">
          <motion.div
            animate="visible"
            className="max-w-3xl"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.p
              className="text-[10px] sm:text-xs font-mono text-foreground/40 uppercase tracking-[0.2em] mb-4 sm:mb-6"
              variants={fadeInUp}
            >
              The Byte Array
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display text-foreground tracking-tight leading-[1.05] mb-4 sm:mb-6"
              variants={fadeInUp}
            >
              No crap, straight to the point apps{" "}
              <br className="hidden sm:block" />
              <span className="text-foreground/40">
                with privacy by default
              </span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base lg:text-lg text-foreground/55 max-w-xl mb-8 sm:mb-10 leading-relaxed"
              variants={fadeInUp}
            >
              Tools, libraries, and products that solve real problems without
              trading away your privacy. Open source where it helps the
              community; clear policies everywhere else.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              variants={fadeInUp}
            >
              <a
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-foreground text-background text-sm font-medium transition-opacity hover:opacity-80"
                href={siteConfig.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                View Projects
                <ArrowRightIcon size={16} />
              </a>
              <button
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-foreground/[0.12] hover:border-foreground/25 hover:bg-foreground/[0.03] text-sm font-medium transition-colors"
                type="button"
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get in Touch
              </button>
            </motion.div>

            <motion.div
              className="flex gap-8 sm:gap-10 lg:gap-12 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-foreground/[0.06]"
              variants={fadeInUp}
            >
              <div className="text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground font-mono stat-number tracking-tight">
                  {repos.length || "\u2026"}
                </div>
                <div className="text-[10px] sm:text-[11px] text-foreground/40 mt-1 sm:mt-1.5 uppercase tracking-[0.15em]">
                  Repositories
                </div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground font-mono stat-number tracking-tight">
                  {totalStars || "\u2026"}
                </div>
                <div className="text-[10px] sm:text-[11px] text-foreground/40 mt-1 sm:mt-1.5 uppercase tracking-[0.15em]">
                  GitHub Stars
                </div>
              </div>
              <div className="text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground font-mono tracking-tight">
                  OSS
                </div>
                <div className="text-[10px] sm:text-[11px] text-foreground/40 mt-1 sm:mt-1.5 uppercase tracking-[0.15em]">
                  &amp; Products
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section
        className="relative py-20 sm:py-24 lg:py-32 border-t border-foreground/[0.06]"
        id="about"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            whileInView="visible"
          >
            <motion.p
              className="text-[10px] sm:text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] font-medium mb-8 sm:mb-10 text-center lg:text-left"
              variants={fadeInUp}
            >
              {aboutContent.label}
            </motion.p>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <motion.div
                className="text-center lg:text-left"
                variants={fadeInUp}
              >
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground tracking-tight leading-[1.1] mb-4 sm:mb-5">
                  {aboutContent.headline}
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-foreground/55 leading-relaxed max-w-md mx-auto lg:mx-0">
                  {aboutContent.lead}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="border border-foreground/[0.08] bg-foreground/[0.02] px-5 sm:px-8 py-2 divide-y divide-foreground/[0.06]">
                  {aboutContent.pillars.map((item) => (
                    <div
                      key={item.num}
                      className="py-5 sm:py-6 first:pt-4 sm:first:pt-5 last:pb-4 sm:last:pb-5"
                    >
                      <span className="text-[10px] sm:text-[11px] font-mono text-foreground/35 tracking-wider">
                        {item.num}
                      </span>
                      <h3 className="font-medium text-foreground text-sm sm:text-base lg:text-lg mt-1.5 sm:mt-2 mb-1.5 sm:mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-foreground/55 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 lg:mt-16 max-w-3xl lg:max-w-none"
              variants={fadeInUp}
            >
              <p className="text-foreground/55 leading-relaxed text-sm sm:text-base lg:text-lg text-left">
                {aboutContent.mission}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ======== FEATURED APPS ======== */}
      <FeaturedAppSection
        appName="OpenLoader"
        description="Sideload APKs you already have on devices you own, including several in one go. Built with Android developers in mind: queue installs, push to multiple devices over wireless ADB, optional Shizuku for privileged installs, Material You UI. Open source under GPL-3.0."
        features={openloaderFeatures}
        iconAlt="OpenLoader app icon"
        iconSrc="/images/openloader/icon.png"
        id="openloader"
        playStoreUrl="https://play.google.com/store/apps/details?id=org.thebytearray.app.android.openloader"
        privacyUrl="/openloader-privacy"
        screenshots={openloaderScreenshots}
        subtitle="Sideload APK installs"
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
        className="relative py-20 sm:py-28 lg:py-36 border-t border-foreground/[0.06]"
        id="projects"
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
                className="mb-8 sm:mb-10"
                description="Public repositories and community-driven projects"
                label="Projects"
                title="Open Source"
              />
            </motion.div>

            {loading ? (
              <div className="flex justify-center py-16 sm:py-20">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-foreground/20 border-t-transparent animate-spin" />
              </div>
            ) : error ? (
              <motion.div
                className="text-center py-16 sm:py-20"
                variants={fadeInUp}
              >
                <p aria-live="polite" className="text-foreground/55 mb-4">
                  {error}
                </p>
                <button
                  className="px-4 py-1.5 border border-foreground/[0.12] text-foreground/55 text-xs"
                  type="button"
                  onClick={fetchRepos}
                >
                  Retry
                </button>
              </motion.div>
            ) : repos.length === 0 ? (
              <motion.div
                className="text-center py-16 sm:py-20"
                variants={fadeInUp}
              >
                <p className="text-foreground/55">No repositories found.</p>
              </motion.div>
            ) : (
              <>
                {languages.length > 1 && (
                  <motion.div
                    className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-6 sm:mb-8"
                    variants={fadeInUp}
                  >
                    <button
                      className={`text-xs px-2.5 sm:px-3 py-1.5 transition-colors ${
                        selectedLanguage === null
                          ? "bg-foreground text-background"
                          : "border border-foreground/[0.12] text-foreground/55 hover:border-foreground/25"
                      }`}
                      type="button"
                      onClick={() => setSelectedLanguage(null)}
                    >
                      All ({repos.length})
                    </button>
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        className={`text-xs px-2.5 sm:px-3 py-1.5 transition-colors ${
                          selectedLanguage === lang
                            ? "bg-foreground text-background"
                            : "border border-foreground/[0.12] text-foreground/55 hover:border-foreground/25"
                        }`}
                        type="button"
                        onClick={() => setSelectedLanguage(lang)}
                      >
                        <span
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 mr-1 sm:mr-1.5 inline-block"
                          style={{
                            backgroundColor: languageColors[lang!] || "#71717a",
                          }}
                        />
                        {lang} (
                        {repos.filter((r) => r.language === lang).length})
                      </button>
                    ))}
                  </motion.div>
                )}

                <motion.div
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
                  variants={staggerContainer}
                >
                  {filteredRepos.map((repo) => (
                    <motion.div key={repo.id} variants={fadeInUp}>
                      <a
                        className="flex flex-col h-full border border-foreground/[0.06] bg-foreground/[0.02] p-4 sm:p-5 transition-opacity hover:opacity-80"
                        href={repo.html_url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2.5 min-w-0">
                            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-foreground/[0.06] flex items-center justify-center shrink-0">
                              <GithubIcon
                                className="text-foreground/40"
                                size={14}
                              />
                            </div>
                            <h3 className="font-medium text-foreground group-hover:opacity-70 transition-opacity font-mono text-sm truncate">
                              {repo.name}
                            </h3>
                          </div>
                          <ExternalLinkIcon
                            className="text-foreground/20 group-hover:text-foreground/40 transition-colors shrink-0"
                            size={13}
                          />
                        </div>
                        <p className="text-xs sm:text-sm text-foreground/55 line-clamp-2 mb-auto leading-relaxed">
                          {repo.description || "No description"}
                        </p>
                        <div className="flex items-center gap-3 mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-foreground/[0.06]">
                          {repo.language && (
                            <div className="flex items-center gap-1.5">
                              <span
                                className="w-2 h-2 shrink-0"
                                style={{
                                  backgroundColor:
                                    languageColors[repo.language] || "#71717a",
                                }}
                              />
                              <span className="text-[11px] sm:text-xs text-foreground/40 font-mono">
                                {repo.language}
                              </span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            <StarIcon
                              className="text-foreground/30"
                              size={12}
                            />
                            <span className="text-[11px] sm:text-xs text-foreground/40 font-mono">
                              {repo.stargazers_count}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <ForkIcon
                              className="text-foreground/30"
                              size={12}
                            />
                            <span className="text-[11px] sm:text-xs text-foreground/40 font-mono">
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}

            {repos.length > 0 && !loading && (
              <motion.div
                className="text-center mt-8 sm:mt-10"
                variants={fadeIn}
              >
                <a
                  className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 border border-foreground/[0.12] hover:border-foreground/25 text-foreground/55 text-xs font-medium transition-colors"
                  href={siteConfig.links.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View All on GitHub
                  <ExternalLinkIcon size={12} />
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ======== TEAM ======== */}
      <section
        className="relative py-20 sm:py-24 lg:py-32 border-t border-foreground/[0.06]"
        id="team"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            whileInView="visible"
          >
            <motion.div variants={fadeInUp}>
              <SectionHeader
                className="mb-10 sm:mb-12"
                label="Team"
                title="Contributors"
              />
            </motion.div>

            <div className="max-w-xl mx-auto">
              <motion.div
                className="border border-foreground/[0.06] bg-foreground/[0.02] divide-y divide-foreground/[0.06]"
                variants={fadeInUp}
              >
                {siteConfig.team.members.map((member) => (
                  <div
                    key={member.username}
                    className="flex items-center gap-4 p-4 sm:p-5"
                  >
                    <img
                      alt={member.name}
                      className="w-10 h-10 shrink-0"
                      src={member.avatar}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-foreground text-sm">
                          {member.name}
                        </h3>
                        <span className="text-[11px] text-foreground/40 font-mono">
                          {member.role}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/50 truncate">
                        {member.bio}
                      </p>
                    </div>
                    <a
                      className="shrink-0 text-foreground/40 hover:text-foreground transition-colors"
                      href={member.github}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <GithubIcon size={16} />
                    </a>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======== CONTACT ======== */}
      <section
        className="relative py-20 sm:py-24 lg:py-32 border-t border-foreground/[0.06]"
        id="contact"
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-5xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-80px" }}
            whileInView="visible"
          >
            <motion.div
              className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left"
              variants={fadeInUp}
            >
              <p className="text-[10px] sm:text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] font-medium">
                Contact
              </p>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground tracking-tight leading-[1.1]">
                Get in touch
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/55 leading-relaxed">
                Questions or interested in collaborating? Send a message or
                email us directly.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 pt-2">
                <a
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-foreground/[0.12] bg-foreground/[0.04] hover:bg-foreground/[0.07] text-foreground/80 text-xs sm:text-sm transition-colors"
                  href={`mailto:${siteConfig.email}`}
                >
                  <EmailIcon size={14} />
                  {siteConfig.email}
                </a>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-7 w-full" variants={fadeInUp}>
              <div className="border border-foreground/[0.08] bg-foreground/[0.02] p-5 sm:p-6 lg:p-8">
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <label
                      className="block text-foreground/55 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2"
                      htmlFor="contact-name"
                    >
                      Name
                    </label>
                    <input
                      autoComplete="name"
                      className="w-full border border-foreground/[0.08] bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 transition-colors"
                      id="contact-name"
                      placeholder="Your name"
                      type="text"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-foreground/55 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2"
                      htmlFor="contact-email"
                    >
                      Email
                    </label>
                    <input
                      autoComplete="email"
                      className="w-full border border-foreground/[0.08] bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 transition-colors"
                      id="contact-email"
                      placeholder="your@email.com"
                      spellCheck="false"
                      type="email"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-foreground/55 text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2"
                      htmlFor="contact-message"
                    >
                      Message
                    </label>
                    <textarea
                      className="w-full border border-foreground/[0.08] bg-background px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-foreground/30 transition-colors resize-none"
                      id="contact-message"
                      placeholder="Your message"
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({
                          ...contactForm,
                          message: e.target.value,
                        })
                      }
                    />
                  </div>
                  {formSubmitted ? (
                    <div
                      aria-live="polite"
                      className="flex flex-col items-center justify-center py-4 sm:py-6 text-center"
                      role="status"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/10 flex items-center justify-center mb-2 sm:mb-3">
                        <SendIcon
                          className="text-green-600 dark:text-green-400"
                          size={18}
                        />
                      </div>
                      <p className="text-sm sm:text-base font-medium text-foreground">
                        Your email app should open now
                      </p>
                      <p className="text-xs sm:text-sm text-foreground/55 mt-1">
                        Send the pre-filled email to complete your message
                      </p>
                    </div>
                  ) : (
                    <button
                      className="w-full inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-2.5 bg-foreground text-background text-xs sm:text-sm font-medium transition-opacity hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
                      disabled={
                        !contactForm.name ||
                        !contactForm.email ||
                        !contactForm.message ||
                        isSubmitting
                      }
                      type="button"
                      onClick={handleContactSubmit}
                    >
                      {isSubmitting
                        ? "Opening..."
                        : "Open email app to send message"}
                      {!isSubmitting && <SendIcon size={14} />}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
