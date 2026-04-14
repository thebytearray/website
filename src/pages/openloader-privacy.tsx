import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

import { PageLayout } from "@/layouts/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { EmailIcon } from "@/components/icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function OpenLoaderPrivacyPage() {
  const lastUpdated = "April 15, 2026";

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
                  { label: "OpenLoader", href: "/#openloader" },
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
              OpenLoader : APK Installer
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
                    not collect any data. OpenLoader works entirely offline and
                    everything stays on your device.
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
                  OpenLoader is a{" "}
                  <strong className="text-foreground">
                    free developer tool
                  </strong>{" "}
                  designed to help Android developers easily install and test their
                  APK files on multiple devices. It simplifies the process of
                  sideloading APKs for development and testing purposes.
                </p>
                <p>
                  The app is built for developers who need to quickly deploy their
                  applications across different Android devices without going through
                  the Play Store during the development phase.
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
                  OpenLoader does not collect, transmit, or store any personal
                  information on external servers. We have no analytics, no
                  tracking, and no way to see how you use the app.
                </p>
                <p>
                  <strong className="text-foreground">
                    The app works completely offline.
                  </strong>{" "}
                  It does not require an internet connection to function and
                  never sends any data over the network.
                </p>
              </div>
            </motion.div>

            {/* Section: What's Stored on Your Device */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What&apos;s Stored on Your Device
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>The app stores the following locally on your device:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    APK files you choose to install (handled temporarily during
                    the installation process)
                  </li>
                  <li>
                    App preferences and settings (theme, default install options)
                  </li>
                  <li>
                    Device connection history (for quick reconnection to frequently
                    used devices)
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  All data is stored locally and is removed when you uninstall
                  the app. APK files are only used for installation and are not
                  retained after successful installation.
                </p>
              </div>
            </motion.div>

            {/* Section: No Network Activity */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                No Network Activity
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  OpenLoader does not make any network requests. The app does not
                  connect to the internet for any purpose. All APK installations
                  and device connections happen entirely on your local network
                  or through direct device connections.
                </p>
                <p>
                  <strong className="text-foreground">
                    Your APK files never leave your device network.
                  </strong>{" "}
                  We cannot access, view, or retrieve any of your development
                  files or applications.
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
                  OpenLoader is distributed exclusively through Google Play.
                  Google may collect certain data as part of their standard Play
                  Store services, including app installation metrics and crash
                  reporting if you have opted in.
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
                    <strong className="text-foreground">
                      Storage Access (Read/Write):
                    </strong>{" "}
                    Required to access APK files from your device storage for
                    installation on target devices.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Install Unknown Apps:
                    </strong>{" "}
                    Required to install APK files on connected devices. This is
                    a system permission that Android requires for sideloading
                    applications.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Network/Local Network:
                    </strong>{" "}
                    Required to discover and connect to other Android devices on
                    your local network for wireless APK installation.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      USB Debugging (Optional):
                    </strong>{" "}
                    Required when connecting to devices via ADB over USB for
                    direct installation.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Bluetooth (Optional):
                    </strong>{" "}
                    Used for device discovery and connection when installing APKs
                    via Bluetooth pairing.
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  We only request permissions that are strictly necessary for
                  the app to function as a developer tool. No permission is used
                  to collect or transmit your data.
                </p>
              </div>
            </motion.div>

            {/* Section: Open Source */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Open Source
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  OpenLoader is a free app developed for the developer community.
                  The app is designed to be transparent and trustworthy. All APK
                  handling is done locally on your devices.
                </p>
              </div>
            </motion.div>

            {/* Section: Contact */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Contact
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>Questions about this privacy policy? Reach out:</p>
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
