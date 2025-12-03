import { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Avatar } from "@heroui/avatar";
import { Input } from "@heroui/input";
import { Spinner } from "@heroui/spinner";
import { Divider } from "@heroui/divider";
import { motion, useScroll, useTransform } from "framer-motion";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
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
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayStoreIcon,
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4 }
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// Typewriter hook
const useTypewriter = (text: string, speed: number = 35, delay: number = 0) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        currentIndex++;
        timeout = setTimeout(startTyping, speed);
      } else {
        setIsComplete(true);
      }
    };

    const delayTimeout = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(delayTimeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

// Terminal code block
const TerminalCodeBlock = () => {
  const { displayText, isComplete } = useTypewriter(
    `const byteArray = {
  focus: "Developer tools",
  license: "Open source",
  stack: ["TypeScript", "Kotlin", "Go"]
};

export default byteArray;`,
    28,
    600
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="w-full max-w-md"
    >
      <div className="rounded-xl border border-default-200 dark:border-default-100 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-default-200 dark:border-default-100 bg-default-50 dark:bg-zinc-900">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span className="text-[11px] text-default-400 ml-3 font-mono">index.ts</span>
        </div>
        <div className="p-4 font-mono text-[13px] leading-relaxed">
          <pre className="text-default-700 dark:text-default-400 whitespace-pre-wrap">
            <code>
              {displayText}
              {!isComplete && (
                <span className="inline-block w-[2px] h-4 bg-primary ml-0.5 animate-blink" />
              )}
            </code>
          </pre>
        </div>
      </div>
    </motion.div>
  );
};

// Hy2NG App Screenshots
const hy2ngScreenshots = [
  { src: "/images/hy2ng/Screenshot_20251201_041544.png", alt: "Configurations list" },
  { src: "/images/hy2ng/Screenshot_20251201_041639.png", alt: "Add configuration" },
  { src: "/images/hy2ng/Screenshot_20251201_041720.png", alt: "QR code sharing" },
  { src: "/images/hy2ng/Screenshot_20251201_041741.png", alt: "Server setup wizard" },
  { src: "/images/hy2ng/Screenshot_20251201_041802.png", alt: "Per-app proxy" },
];

// Hy2NG App Features
const hy2ngFeatures = [
  { icon: ServerIcon, title: "Server Setup Wizard", desc: "Configure your own VPS with built-in setup guide" },
  { icon: QrCodeIcon, title: "QR Code Import", desc: "Import configs via QR code or clipboard" },
  { icon: AppsIcon, title: "Per-App Proxy", desc: "Choose which apps use the VPN connection" },
  { icon: ShieldIcon, title: "Privacy First", desc: "No ads, no tracking, all data stays on device" },
];

// Featured App Section Component
const FeaturedAppSection = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % hy2ngScreenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + hy2ngScreenshots.length) % hy2ngScreenshots.length);
  };

  return (
    <section id="featured-app" className="py-20 sm:py-28 bg-default-50/80 dark:bg-default-50/30 border-t border-default-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Featured</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Hy2NG
            </h2>
            <p className="text-default-500 mt-3 max-w-lg mx-auto text-sm leading-relaxed">
              A powerful Hysteria2 VPN client for Android with built-in server setup wizard.
              Connect to Hysteria2 servers with ease.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Screenshots Carousel */}
            <motion.div variants={fadeInUp} className="relative order-2 lg:order-1">
              <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
                {/* Pixel 9 Pro Frame */}
                <div className="relative bg-[#1a1a1a] rounded-[2.8rem] p-[3px] shadow-2xl ring-1 ring-zinc-700/50">
                  {/* Inner bezel */}
                  <div className="bg-[#0d0d0d] rounded-[2.6rem] p-[6px]">
                    {/* Screen */}
                    <div className="relative rounded-[2.2rem] overflow-hidden bg-black aspect-[9/20]">
                      {/* Pixel 9 Pro punch-hole camera */}
                      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-[#0a0a0a] rounded-full z-10 ring-1 ring-zinc-800" />
                      
                      {/* Screenshot Image */}
                      <motion.img
                        key={currentScreenshot}
                        src={hy2ngScreenshots[currentScreenshot].src}
                        alt={hy2ngScreenshots[currentScreenshot].alt}
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>
                  
                  {/* Side buttons - Volume */}
                  <div className="absolute left-[-2px] top-28 w-[3px] h-8 bg-zinc-700 rounded-l-sm" />
                  <div className="absolute left-[-2px] top-40 w-[3px] h-12 bg-zinc-700 rounded-l-sm" />
                  {/* Power button */}
                  <div className="absolute right-[-2px] top-32 w-[3px] h-10 bg-zinc-700 rounded-r-sm" />
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevScreenshot}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 rounded-full bg-background border border-default-200 dark:border-default-100 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeftIcon size={16} />
                </button>
                <button
                  onClick={nextScreenshot}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-8 h-8 rounded-full bg-background border border-default-200 dark:border-default-100 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next screenshot"
                >
                  <ChevronRightIcon size={16} />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-1.5 mt-6">
                  {hy2ngScreenshots.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentScreenshot(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentScreenshot
                          ? "bg-primary w-6"
                          : "bg-default-300 dark:bg-default-200 hover:bg-default-400"
                      }`}
                      aria-label={`Go to screenshot ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* App Info */}
            <motion.div variants={fadeInUp} className="order-1 lg:order-2 space-y-8">
              {/* App Badge */}
              <div className="flex items-center gap-3">
                <img 
                  src="/images/hy2ng/hy2ng.png" 
                  alt="Hy2NG App Icon" 
                  className="w-14 h-14 rounded-2xl shadow-lg"
                />
                <div>
                  <h3 className="font-bold text-lg text-foreground">Hy2NG</h3>
                  <p className="text-xs text-default-500 font-mono">Hysteria2 Client</p>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {hy2ngFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl border border-default-200 dark:border-default-100 bg-background hover:border-primary/50 transition-colors group"
                  >
                    <feature.icon size={20} className="text-primary mb-2" />
                    <h4 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h4>
                    <p className="text-xs text-default-500 leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <div className="flex flex-wrap gap-3">
                <Button
                  as={Link}
                  isExternal
                  href="https://play.google.com/store/apps/details?id=org.thebytearray.hy2.ng"
                  color="primary"
                  size="md"
                  radius="md"
                  className="font-semibold"
                  startContent={<PlayStoreIcon size={18} />}
                >
                  Get on Google Play
                </Button>
              </div>

              {/* Contact */}
              <p className="text-xs text-default-400">
                Questions or feedback?{" "}
                <Link href="mailto:contact@thebytearray.org" className="text-primary hover:underline">
                  contact@thebytearray.org
                </Link>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function IndexPage() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  useEffect(() => {
    fetchRepos();
  }, []);

  const fetchRepos = async () => {
    try {
      setLoading(true);
      const response = await fetch(siteConfig.githubApi.repos);
      if (!response.ok) throw new Error("Failed to fetch repositories");
      const data = await response.json();
      const filteredRepos = data
        .filter((repo: GitHubRepo) => !repo.fork)
        .sort(
          (a: GitHubRepo, b: GitHubRepo) =>
            b.stargazers_count - a.stargazers_count,
        );
      setRepos(filteredRepos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleContactSubmit = () => {
    const subject = encodeURIComponent(`Message from ${contactForm.name}`);
    const body = encodeURIComponent(`Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[90vh] flex items-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-dots opacity-40" />
        
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="relative z-10 container mx-auto px-4 sm:px-6 py-16 lg:py-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-center lg:text-left"
            >
              {/* Main Heading */}
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight mb-5 leading-[1.1] text-foreground"
              >
                Software development
                <br />
                <span className="text-primary">done right</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg text-default-500 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              >
                We build developer tools, libraries, and applications—with 
                select projects released as open source for the community.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <Button
                  as={Link}
                  isExternal
                  href={siteConfig.links.github}
                  color="primary"
                  size="lg"
                  radius="md"
                  className="font-semibold"
                  endContent={<ArrowRightIcon size={16} />}
                >
                  View Projects
                </Button>
                <Button
                  as={Link}
                  href="#contact"
                  variant="bordered"
                  size="lg"
                  radius="md"
                  className="font-semibold border-default-200 dark:border-default-100 hover:border-primary hover:text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get in Touch
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-default-100 dark:border-default-100"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground font-mono">
                    {repos.length || "—"}
                  </div>
                  <div className="text-xs text-default-400 mt-0.5 uppercase tracking-wide">Repositories</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-foreground font-mono">
                    {totalStars || "—"}
                  </div>
                  <div className="text-xs text-default-400 mt-0.5 uppercase tracking-wide">GitHub Stars</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-primary font-mono">
                    OSS
                  </div>
                  <div className="text-xs text-default-400 mt-0.5 uppercase tracking-wide">& Products</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right content - Terminal */}
            <div className="hidden lg:flex justify-center">
              <TerminalCodeBlock />
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 rounded-full border-2 border-default-200 dark:border-default-200 flex justify-center pt-1.5">
            <motion.div 
              className="w-1 h-1.5 bg-primary rounded-full"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 border-t border-default-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-14">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">About</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                The Byte Array
              </h2>
            </motion.div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="text-default-600 leading-relaxed">
                  We're a software development team building tools, libraries, and 
                  applications. Some of our work is released as open source for the community.
                </p>
                <p className="text-default-600 leading-relaxed">
                  We're also working on commercial products and SaaS solutions. 
                  We open source projects when it makes sense—not everything needs to be public.
                </p>
                <p className="text-default-600 leading-relaxed">
                  Our focus is on building practical software that solves real problems, 
                  whether that's a free library or a paid service.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="rounded-xl border border-default-200 dark:border-default-100 p-5 space-y-4 bg-default-50/50 dark:bg-default-50/50">
                  {[
                    { title: "Developer Tools", desc: "CLI applications, build tools, and utilities that streamline workflows." },
                    { title: "Libraries", desc: "Reusable packages for common problems across multiple languages." },
                    { title: "Applications", desc: "End-user software built with modern technologies." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{item.title}</h4>
                        <p className="text-sm text-default-500 mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured App Section - Hy2NG */}
      <FeaturedAppSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 sm:py-28 bg-default-50/80 dark:bg-default-50/30 border-t border-default-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Projects</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Our Open-Source Work
              </h2>
              <p className="text-default-500 mt-3 max-w-md mx-auto text-sm">
                Public repositories and open source projects
              </p>
            </motion.div>

            {/* Projects Grid */}
            {loading ? (
              <div className="flex justify-center py-16">
                <Spinner size="lg" color="primary" />
              </div>
            ) : error ? (
              <motion.div variants={fadeInUp} className="text-center py-16">
                <p className="text-default-500 mb-4">{error}</p>
                <Button color="primary" variant="flat" size="sm" onPress={fetchRepos}>
                  Retry
                </Button>
              </motion.div>
            ) : repos.length === 0 ? (
              <motion.div variants={fadeInUp} className="text-center py-16">
                <p className="text-default-500">No repositories found.</p>
              </motion.div>
            ) : (
              <motion.div
                variants={staggerContainer}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {repos.map((repo) => (
                  <motion.div key={repo.id} variants={fadeInUp}>
                    <Card
                      as={Link}
                      isExternal
                      href={repo.html_url}
                      className="h-full bg-background border border-default-200 dark:border-default-100 group card-hover"
                      shadow="none"
                      isPressable
                    >
                      <CardHeader className="flex justify-between items-start pb-0">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-default-100 dark:bg-default-100 flex items-center justify-center">
                            <GithubIcon size={16} className="text-default-500" />
                          </div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors font-mono text-sm">
                            {repo.name}
                          </h3>
                        </div>
                        <ExternalLinkIcon
                          size={14}
                          className="text-default-300 group-hover:text-primary transition-colors"
                        />
                      </CardHeader>
                      <CardBody className="py-2.5">
                        <p className="text-sm text-default-500 line-clamp-2">
                          {repo.description || "No description"}
                        </p>
                      </CardBody>
                      <CardFooter className="pt-0 gap-3">
                        {repo.language && (
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-2.5 h-2.5 rounded-full"
                              style={{
                                backgroundColor: languageColors[repo.language] || "#71717a",
                              }}
                            />
                            <span className="text-xs text-default-400 font-mono">
                              {repo.language}
                            </span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <StarIcon size={12} className="text-default-400" />
                          <span className="text-xs text-default-400 font-mono">
                            {repo.stargazers_count}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ForkIcon size={12} className="text-default-400" />
                          <span className="text-xs text-default-400 font-mono">
                            {repo.forks_count}
                          </span>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* View All */}
            {repos.length > 0 && (
              <motion.div variants={fadeIn} className="text-center mt-8">
                <Button
                  as={Link}
                  isExternal
                  href={siteConfig.links.github}
                  variant="flat"
                  radius="md"
                  size="sm"
                  className="font-medium bg-default-100 dark:bg-default-100"
                  endContent={<ExternalLinkIcon size={12} />}
                >
                  View All on GitHub
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 sm:py-28 border-t border-default-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Team</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Contributors
              </h2>
            </motion.div>

            {/* Team Member */}
            <motion.div variants={fadeInUp}>
              <Card
                className="max-w-xs mx-auto bg-background border border-default-200 dark:border-default-100 overflow-hidden"
                shadow="none"
              >
                <div className="h-20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

                <CardBody className="relative px-6 pb-6 -mt-10">
                  <div className="flex justify-center mb-4">
                    <Avatar
                      src={siteConfig.team.founder.avatar}
                      className="w-20 h-20 ring-4 ring-background"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-bold text-foreground">
                      {siteConfig.team.founder.name}
                    </h3>
                    <p className="text-primary text-xs font-mono mt-0.5">
                      {siteConfig.team.founder.role}
                    </p>
                    <p className="text-default-500 text-sm mt-3 leading-relaxed">
                      {siteConfig.team.founder.bio}
                    </p>

                    <div className="mt-4">
                      <Button
                        as={Link}
                        isExternal
                        href={siteConfig.team.founder.github}
                        variant="flat"
                        radius="md"
                        size="sm"
                        className="bg-default-100 dark:bg-default-100 font-mono text-xs"
                        startContent={<GithubIcon size={14} />}
                      >
                        @{siteConfig.team.founder.username}
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 bg-default-50/80 dark:bg-default-50/30 border-t border-default-100">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
            className="max-w-md mx-auto"
          >
            {/* Section Header */}
            <motion.div variants={fadeInUp} className="text-center mb-10">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Contact</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="text-default-500 mt-3 text-sm">
                Questions or interested in collaborating?
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <Card
                className="bg-background border border-default-200 dark:border-default-100"
                shadow="none"
              >
                <CardBody className="p-5 space-y-4">
                  <Input
                    type="text"
                    label="Name"
                    labelPlacement="outside"
                    placeholder="Your name"
                    variant="bordered"
                    radius="md"
                    size="sm"
                    value={contactForm.name}
                    onValueChange={(value) => setContactForm({ ...contactForm, name: value })}
                    classNames={{
                      label: "text-default-600 text-xs font-medium",
                      inputWrapper: "border-default-200 dark:border-default-100",
                    }}
                  />
                  <Input
                    type="email"
                    label="Email"
                    labelPlacement="outside"
                    placeholder="your@email.com"
                    variant="bordered"
                    radius="md"
                    size="sm"
                    value={contactForm.email}
                    onValueChange={(value) => setContactForm({ ...contactForm, email: value })}
                    classNames={{
                      label: "text-default-600 text-xs font-medium",
                      inputWrapper: "border-default-200 dark:border-default-100",
                    }}
                  />
                  <div className="space-y-1.5">
                    <label className="text-default-600 text-xs font-medium">Message</label>
                    <textarea
                      placeholder="Your message"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border-2 border-default-200 dark:border-default-100 focus:border-primary focus:outline-none bg-transparent text-foreground placeholder:text-default-400 transition-colors resize-none text-sm"
                    />
                  </div>
                  <div className="flex gap-2 pt-1">
                    <Button
                      color="primary"
                      radius="md"
                      size="sm"
                      className="flex-1 font-medium"
                      endContent={<SendIcon size={14} />}
                      onPress={handleContactSubmit}
                      isDisabled={!contactForm.name || !contactForm.email || !contactForm.message}
                    >
                      Send Message
                    </Button>
                    <Button
                      as={Link}
                      isExternal
                      href={`mailto:${siteConfig.email}`}
                      variant="flat"
                      radius="md"
                      size="sm"
                      className="flex-1 font-medium bg-default-100 dark:bg-default-100"
                      startContent={<EmailIcon size={14} />}
                    >
                      Email
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-default-100 bg-background">
        <div className="container mx-auto px-4 sm:px-6 py-10">
          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {/* Brand */}
            <div>
              <Link
                href="#"
                className="inline-block mb-2"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="font-mono text-base font-bold text-foreground">
                  The Byte[]
                </span>
              </Link>
              <p className="text-xs text-default-400">
                Software & open source.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-semibold mb-2 text-xs text-foreground uppercase tracking-wide">Navigation</h4>
              <div className="space-y-1.5">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-xs text-default-500 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-semibold mb-2 text-xs text-foreground uppercase tracking-wide">Connect</h4>
              <div className="space-y-1.5">
                <Link
                  isExternal
                  href={siteConfig.links.github}
                  className="flex items-center gap-1.5 text-xs text-default-500 hover:text-primary transition-colors"
                >
                  <GithubIcon size={12} />
                  GitHub
                </Link>
                <Link
                  isExternal
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-1.5 text-xs text-default-500 hover:text-primary transition-colors"
                >
                  <EmailIcon size={12} />
                  Email
                </Link>
              </div>
            </div>
          </div>

          <Divider className="my-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-[11px] text-default-400 font-mono">
              © {new Date().getFullYear()} The Byte Array
            </p>
            <p className="text-[11px] text-default-400">
              Licensed under{" "}
              <Link
                isExternal
                href="https://www.gnu.org/licenses/gpl-3.0.html"
                className="text-default-500 hover:text-primary transition-colors"
              >
                GPL-3.0
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
