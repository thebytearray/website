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
                  <strong className="text-foreground">TL;DR:</strong> Hy2NG
                  does not collect, store, or transmit any personal data. All
                  your VPN configurations and settings stay on your device.
                  We don&apos;t track you, we don&apos;t have analytics, and
                  we don&apos;t sell anything.
                </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Section: Information We Don't Collect */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Information We Don&apos;t Collect
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>Hy2NG is designed with privacy as a core principle. We do not collect:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Device identifiers or advertising IDs</li>
                  <li>Location data</li>
                  <li>Usage analytics or app statistics</li>
                  <li>Browsing history or network traffic content</li>
                  <li>Crash reports or diagnostics (unless you manually send feedback)</li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Data Stored Locally */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Data Stored Locally on Your Device
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  The app stores certain data locally on your device to function properly.
                  This data never leaves your device:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">VPN Configurations:</strong>{" "}
                    Server addresses, ports, passwords, and connection settings you enter
                    or import via QR code
                  </li>
                  <li>
                    <strong className="text-foreground">App Settings:</strong>{" "}
                    Your preferences like theme (dark/light), DNS settings, and MTU values
                  </li>
                  <li>
                    <strong className="text-foreground">Per-App Proxy Settings:</strong>{" "}
                    Which apps you&apos;ve chosen to exclude from the VPN tunnel
                  </li>
                </ul>
                <p className="text-sm text-default-500 mt-4">
                  All this data is stored using Android&apos;s secure DataStore and
                  is deleted when you uninstall the app.
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
                <p>The app makes the following network connections:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">VPN Server:</strong>{" "}
                    When you connect, the app establishes an encrypted tunnel to
                    the Hysteria2 server you configured. We don&apos;t operate
                    these servers—you provide them.
                  </li>
                  <li>
                    <strong className="text-foreground">Server Setup Wizard:</strong>{" "}
                    If you use the built-in server setup feature, the app connects
                    to your server via SSH using credentials you provide. These
                    credentials are used only for the setup session and are not
                    stored permanently.
                  </li>
                </ul>
                <p className="mt-3">
                  <strong className="text-foreground">Important:</strong> The app
                  does not connect to any of our servers. We have no way to see
                  your traffic or know when you use the app.
                </p>
              </div>
            </motion.div>

            {/* Section: Permissions */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                App Permissions Explained
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong className="text-foreground">VPN Permission:</strong>{" "}
                    Required to create a VPN tunnel on your device. Android
                    shows a system prompt when you first connect.
                  </li>
                  <li>
                    <strong className="text-foreground">Internet Access:</strong>{" "}
                    Required to connect to VPN servers.
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications:</strong>{" "}
                    Used to show VPN connection status in your notification bar.
                    You can disable this in Android settings.
                  </li>
                  <li>
                    <strong className="text-foreground">Query Installed Apps:</strong>{" "}
                    Used only for the per-app proxy feature, so you can choose
                    which apps bypass the VPN. We don&apos;t send this list anywhere.
                  </li>
                  <li>
                    <strong className="text-foreground">Camera (Optional):</strong>{" "}
                    Only used if you scan a QR code to import a configuration.
                    Not required for normal operation.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Third-Party Services */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Third-Party Services
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  Hy2NG does not integrate any third-party analytics, advertising,
                  or tracking services. There are:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>No Google Analytics or Firebase Analytics</li>
                  <li>No crash reporting services (like Crashlytics)</li>
                  <li>No advertising SDKs</li>
                  <li>No social media tracking</li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Feedback */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Feedback & Support
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  If you contact us via the in-app feedback feature or email,
                  we&apos;ll only see what you choose to send us. We use this
                  information solely to respond to your inquiry and improve the app.
                </p>
              </div>
            </motion.div>

            {/* Section: Children */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Children&apos;s Privacy
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  Hy2NG is not directed at children under 13. We don&apos;t
                  knowingly collect any information from children because we
                  don&apos;t collect information from anyone.
                </p>
              </div>
            </motion.div>

            {/* Section: Changes */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Changes to This Policy
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  If we make changes to this privacy policy, we&apos;ll update
                  the &quot;Last updated&quot; date at the top. For significant
                  changes, we may also add a notice in the app.
                </p>
              </div>
            </motion.div>

            {/* Section: Contact */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Contact Us
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  If you have questions about this privacy policy or the app,
                  reach out to us:
                </p>
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

