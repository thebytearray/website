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
  const lastUpdated = "April 17, 2026";

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
              OpenLoader: install debug APKs faster across multiple devices
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
                    not collect any data. Your choices, APKs, and settings stay on
                    your device or between your devices as part of workflows you
                    start (for example wireless ADB). We do not receive your
                    content or usage.
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
                    free developer utility for Android
                  </strong>{" "}
                  aimed at teams and individuals who need to{" "}
                  <strong className="text-foreground">
                    install debug and test APKs quickly on more than one device
                  </strong>
                  . It supports an install queue (several packages in sequence),
                  wireless ADB (Android 11+), and optional Shizuku for a privileged
                  install path when you grant access, so you spend less time
                  repeating manual install steps during bring-up, QA, and on-device
                  iteration.
                </p>
                <p>
                  You are responsible for complying with licenses, policies, and laws
                  that apply to the software you deploy. OpenLoader is tooling for
                  hardware you use in development; it does not distribute
                  third-party apps on your behalf.
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
                  information on The Byte Array&apos;s servers. We have no
                  analytics, no tracking, and no way to see how you use the app.
                </p>
                <p>
                  <strong className="text-foreground">
                    We do not receive your usage or your APKs.
                  </strong>{" "}
                  Core install and preference flows work without any account or
                  cloud service from us. Network capability may be used only for
                  device-side features you use (see below), not to upload your
                  content to us.
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
                    APKs you choose (staged temporarily in app storage for install
                    or push to another device where applicable)
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
                  All data is stored locally and is removed when you uninstall the
                  app. Staged files are only used for install and related steps and
                  are not retained after a successful deployment where applicable.
                </p>
              </div>
            </motion.div>

            {/* Section: Network use */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Network use
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  OpenLoader does not send your personal data, APKs, or analytics to
                  The Byte Array. When you use wireless ADB or related pairing
                  features, the app may use the network stack to communicate with
                  phones or tablets you connect to, typically on your LAN or tunneled
                  to devices you authorize, not to reach our systems.
                </p>
                <p>
                  <strong className="text-foreground">
                    Your files and installs stay under your control.
                  </strong>{" "}
                  We cannot access, view, or retrieve your APKs or install history from
                  your device.
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
                <p>
                  Declared Android permissions (names as in the system) and how we use
                  them:
                </p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong className="text-foreground">
                      <code className="text-xs font-mono">INTERNET</code>:
                    </strong>{" "}
                    Lets OpenLoader open TCP connections for wireless ADB to devices
                    you pair and authorize. This is device-to-device tooling you
                    start, not traffic to our servers.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      <code className="text-xs font-mono">
                        ACCESS_WIFI_STATE
                      </code>
                      :
                    </strong>{" "}
                    Used so wireless debugging and discovery flows can read Wi‑Fi
                    connection state where the OS requires it.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      <code className="text-xs font-mono">
                        CHANGE_WIFI_MULTICAST_STATE
                      </code>
                      :
                    </strong>{" "}
                    Allows multicast-based discovery helpers used during wireless
                    debugging / pairing on local networks.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      <code className="text-xs font-mono">POST_NOTIFICATIONS</code>:
                    </strong>{" "}
                    Optional on supported Android versions so the app can show
                    notifications (for example during pairing or install-related
                    foreground work) when you allow it.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      <code className="text-xs font-mono">FOREGROUND_SERVICE</code>{" "}
                      and{" "}
                      <code className="text-xs font-mono">
                        FOREGROUND_SERVICE_DATA_SYNC
                      </code>
                      :
                    </strong>{" "}
                    Required so a small foreground service can run while handling
                    pairing-related input and related foreground data-sync work in the
                    background, as declared in the app manifest.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      APK files (system picker, not broad storage):
                    </strong>{" "}
                    You choose APKs with the system document picker; OpenLoader does
                    not request blanket read/write external storage for that. Files
                    may be copied into app-private cache briefly to install or push
                    to another device.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Install session / unknown sources (system UI):
                    </strong>{" "}
                    Installing packages you supply uses the normal Android install
                    pipeline; the system may show install-source or &ldquo;unknown
                    sources&rdquo; prompts depending on version and settings.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Optional Shizuku (user-granted):
                    </strong>{" "}
                    If you enable the Shizuku install path, granting access is
                    handled through Shizuku&apos;s own permission flow; OpenLoader
                    does not add a separate privileged Android permission in the
                    manifest for that beyond what the OS and Shizuku require.
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  We only use these capabilities to deliver the features you see. None
                  of them are used to collect data for The Byte Array or to send
                  your content to us.
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
                  OpenLoader is{" "}
                  <strong className="text-foreground">open source</strong> under the{" "}
                  <strong className="text-foreground">
                    GNU General Public License v3.0
                  </strong>{" "}
                  (GPL-3.0). You can read, review, and build the source yourself.
                </p>
                <p>
                  Repository:{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://github.com/thebytearray/OpenLoader"
                  >
                    github.com/thebytearray/OpenLoader
                  </Link>
                  . The full license text is included in the repository as{" "}
                  <code className="text-xs font-mono text-foreground/70">LICENSE</code>
                  .
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
