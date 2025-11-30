import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

import { Navbar } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import { EmailIcon } from "@/components/icons";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function Hy2ngPrivacyPage() {
  const lastUpdated = "November 30, 2025";

  return (
    <div className="relative flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="relative pt-24 pb-12 border-b border-default-100">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="absolute inset-0 bg-dots opacity-20" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-xs font-mono text-primary uppercase tracking-widest mb-3"
            >
              Legal
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-default-500 mb-2"
            >
              Hy2NG : Client &amp; Server Setup
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-sm text-default-400 font-mono"
            >
              Last updated: {lastUpdated}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-8"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp}>
              <Card
                className="bg-primary/5 border border-primary/20"
                shadow="none"
              >
                <CardBody className="p-5">
                  <p className="text-default-600 leading-relaxed">
                    <strong className="text-foreground">In short:</strong> We
                    do not collect any data. Everything stays on your device.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Section: No Data Collection */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                We Don&apos;t Collect Any Data
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  Hy2NG does not collect, transmit, or store any personal
                  information on our servers. We have no analytics, no
                  tracking, and no way to see how you use the app.
                </p>
                <p>
                  All your data—VPN configurations, settings, and
                  preferences—is stored locally on your device and never
                  leaves it.
                </p>
              </div>
            </motion.div>

            {/* Section: What's Stored on Your Device */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                What&apos;s Stored on Your Device
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>The app saves the following locally:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>VPN server configurations you add</li>
                  <li>App settings (theme, DNS, MTU)</li>
                  <li>Per-app proxy preferences</li>
                </ul>
                <p className="text-sm text-default-500 mt-3">
                  This data is deleted when you uninstall the app.
                </p>
              </div>
            </motion.div>

            {/* Section: Network Connections */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Network Connections
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  The app only connects to VPN servers that <strong className="text-foreground">you</strong> configure.
                  We don&apos;t operate any servers and have no visibility into your
                  traffic.
                </p>
                <p>
                  If you use the server setup wizard, the app connects to your
                  own server via SSH using credentials you provide.
                </p>
              </div>
            </motion.div>

            {/* Section: Google Play */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Google Play Services
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  This app is distributed through Google Play. Google may
                  collect certain data as part of their standard Play Store
                  services (such as purchase verification and app licensing).
                </p>
                <p>
                  This data collection is handled by Google, not by us. For
                  details on what Google collects, please see{" "}
                  <Link
                    isExternal
                    href="https://policies.google.com/privacy"
                    className="text-primary hover:underline"
                  >
                    Google&apos;s Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </motion.div>

            {/* Section: Permissions */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                App Permissions
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">VPN:</strong> To create
                    the VPN tunnel
                  </li>
                  <li>
                    <strong className="text-foreground">Internet:</strong> To
                    connect to VPN servers
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications:</strong>{" "}
                    To show connection status
                  </li>
                  <li>
                    <strong className="text-foreground">Camera:</strong>{" "}
                    Optional, only for QR code scanning
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Contact */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Contact
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>Questions? Reach out:</p>
                <div className="flex items-center gap-2 mt-2">
                  <EmailIcon size={16} className="text-primary" />
                  <Link
                    isExternal
                    href={`mailto:${siteConfig.email}`}
                    className="text-primary hover:underline"
                  >
                    {siteConfig.email}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Back to Home */}
            <motion.div variants={fadeInUp} className="pt-8">
              <Divider className="mb-8" />
              <div className="text-center">
                <Link
                  href="/"
                  className="text-sm text-default-500 hover:text-primary transition-colors"
                >
                  ← Back to The Byte Array
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-default-100 bg-background mt-auto">
        <div className="container mx-auto px-4 sm:px-6 py-8">
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
