import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

import { PageLayout } from "@/layouts/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { EmailIcon } from "@/components/icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hy2ngPrivacyPage() {
  const lastUpdated = "November 30, 2025";

  return (
    <PageLayout footerVariant="minimal">
      {/* Header */}
      <section className="relative pt-24 pb-12 border-b border-foreground/[0.06]">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="absolute inset-0 bg-dots opacity-20" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <motion.div
            animate="visible"
            className="max-w-3xl mx-auto"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Hy2NG", href: "/#featured-app" },
                  { label: "Privacy Policy" },
                ]}
              />
            </motion.div>
            <motion.p
              className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.2em] mb-3 font-medium"
              variants={fadeInUp}
            >
              Legal
            </motion.p>
            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground tracking-tight leading-[1.1] mb-3"
              variants={fadeInUp}
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              className="text-base text-foreground/55 mb-1"
              variants={fadeInUp}
            >
              Hy2NG : Client &amp; Server Setup
            </motion.p>
            <motion.p
              className="text-xs text-foreground/40 font-mono"
              variants={fadeInUp}
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
            animate="visible"
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            variants={staggerContainer}
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp}>
              <Card
                className="bg-foreground/[0.02] border border-foreground/[0.06]"
                shadow="none"
              >
                <CardBody className="p-5">
                  <p className="text-foreground/55 leading-relaxed">
                    <strong className="text-foreground">In short:</strong> We do
                    not collect any data. Everything stays on your device.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Section: About This App */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                About This App
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  Hy2NG is a{" "}
                  <strong className="text-foreground">
                    third-party client app
                  </strong>{" "}
                  for the{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://v2.hysteria.network"
                  >
                    Hysteria2 protocol
                  </Link>
                  . It allows you to connect to Hysteria2 VPN servers and also
                  helps you set up your own server.
                </p>
                <p>
                  <strong className="text-foreground">
                    We do not provide any VPN servers or configurations.
                  </strong>{" "}
                  You need to use your own server or obtain configurations from
                  a trusted source. The app is simply a tool to connect to and
                  manage Hysteria2 servers.
                </p>
              </div>
            </motion.div>

            {/* Section: No Data Collection */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                We Don&apos;t Collect Any Data
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  Hy2NG does not collect, transmit, or store any personal
                  information on our servers. We have no analytics, no tracking,
                  and no way to see how you use the app.
                </p>
                <p>
                  All your data (VPN configurations, settings, and preferences)
                  is stored locally on your device and never leaves it.
                </p>
              </div>
            </motion.div>

            {/* Section: What's Stored on Your Device */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What&apos;s Stored on Your Device
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>The app saves the following locally:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>VPN server configurations you add</li>
                  <li>App settings (theme, DNS, MTU)</li>
                  <li>Per-app proxy preferences</li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  This data is deleted when you uninstall the app.
                </p>
              </div>
            </motion.div>

            {/* Section: Network Connections */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Network Connections
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  The app only connects to VPN servers that{" "}
                  <strong className="text-foreground">you</strong> configure. We
                  don&apos;t operate any servers and have no visibility into
                  your traffic.
                </p>
                <p>
                  If you use the server setup wizard, the app connects to your
                  own server via SSH using credentials you provide.
                </p>
              </div>
            </motion.div>

            {/* Section: Google Play */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Google Play Services
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
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
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://policies.google.com/privacy"
                  >
                    Google&apos;s Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </motion.div>

            {/* Section: Permissions */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                App Permissions
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>Here are the permissions the app requires and why:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong className="text-foreground">VPN Service:</strong>{" "}
                    Required to create a secure VPN tunnel on your device.
                    Android will show a system prompt asking for your permission
                    before connecting.
                  </li>
                  <li>
                    <strong className="text-foreground">Internet:</strong>{" "}
                    Required to connect to the VPN servers you configure in the
                    app.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Foreground Service:
                    </strong>{" "}
                    Allows the VPN to run reliably in the background while you
                    use other apps.
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications:</strong>{" "}
                    Used to display the VPN connection status in your
                    notification bar so you always know when you&apos;re
                    connected.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Query All Packages:
                    </strong>{" "}
                    Used for the per-app proxy feature. This lets you choose
                    which apps should use the VPN and which should bypass it.
                    The app list stays on your device and is not sent anywhere.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Camera (Optional):
                    </strong>{" "}
                    Only requested if you choose to scan a QR code to import a
                    configuration. Not required for normal use.
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Section: Contact */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Contact
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>Questions? Reach out:</p>
                <div className="flex items-center gap-2 mt-2">
                  <EmailIcon className="text-foreground/55" size={16} />
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href={`mailto:${siteConfig.email}`}
                  >
                    {siteConfig.email}
                  </Link>
                </div>
                <div className="mt-6 pt-4 border-t border-foreground/[0.06]">
                  <p className="text-sm text-foreground/45">
                    <strong className="text-foreground">
                      The Byte Array LTD
                    </strong>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Back to Home */}
            <motion.div className="pt-8" variants={fadeInUp}>
              <Divider className="mb-8 bg-foreground/[0.06]" />
              <div className="text-center">
                <Link
                  className="text-sm text-foreground/55 hover:text-foreground transition-colors"
                  href="/"
                >
                  ← Back to The Byte Array
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
