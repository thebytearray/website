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

export default function ConvertitPrivacyPage() {
  const lastUpdated = "December 21, 2025";

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
              Convertit : Media Toolkit
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
                    do not collect any data. ConvertIt works entirely offline
                    and everything stays on your device.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            {/* Section: About This App */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                About This App
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  Convertit is an <strong className="text-foreground">ad-free media toolkit</strong> app
                  built with Kotlin and Jetpack Compose. It is powered by{" "}
                  <Link
                    isExternal
                    href="https://ffmpeg.org"
                    className="text-primary hover:underline"
                  >
                    FFmpeg
                  </Link>
                  ,{" "}
                  <Link
                    isExternal
                    href="https://taglib.org"
                    className="text-primary hover:underline"
                  >
                    TagLib
                  </Link>
                  , and{" "}
                  <Link
                    isExternal
                    href="https://exiv2.org"
                    className="text-primary hover:underline"
                  >
                    Exiv2
                  </Link>
                  .
                </p>
                <p>
                  The app allows you to convert audio and video files between
                  various formats (FLAC, MP3, WAV, AAC, OGG, M4A, and more) and
                  edit metadata/tags. All processing happens locally on your
                  device.
                </p>
              </div>
            </motion.div>

            {/* Section: No Data Collection */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                We Don&apos;t Collect Any Data
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  ConvertIt does not collect, transmit, or store any personal
                  information on external servers. We have no analytics, no
                  tracking, and no way to see how you use the app.
                </p>
                <p>
                  <strong className="text-foreground">The app works completely offline.</strong>{" "}
                  It does not require an internet connection to function and
                  never sends any data over the network.
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
                <p>The app stores the following locally on your device:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Converted audio and video files (saved to your chosen location)</li>
                  <li>App preferences and settings (theme, output format preferences)</li>
                  <li>Temporary files during conversion (automatically cleaned up)</li>
                </ul>
                <p className="text-sm text-default-500 mt-3">
                  All data is stored locally and is removed when you uninstall
                  the app (except for converted files you&apos;ve saved to your device storage).
                </p>
              </div>
            </motion.div>

            {/* Section: No Network Activity */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                No Network Activity
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>
                  ConvertIt does not make any network requests. The app does not
                  connect to the internet for any purpose. All file conversions
                  and metadata editing happen entirely on your device using
                  local processing.
                </p>
                <p>
                  <strong className="text-foreground">Your files never leave your device.</strong>{" "}
                  We cannot access, view, or retrieve any of your media files.
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
                  Convertit is distributed exclusively through Google Play. Google
                  may collect certain data as part of their standard Play Store
                  services, including purchase verification and app licensing.
                </p>
                <p>
                  The app uses Google Play Billing for in-app purchases. This
                  involves Google&apos;s SDKs which may collect data necessary for
                  processing transactions and verifying purchases.
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
                <p>Here are the permissions the app requires and why:</p>
                <ul className="list-disc pl-5 space-y-3">
                  <li>
                    <strong className="text-foreground">Storage Access (Read/Write):</strong>{" "}
                    Required to read your media files for conversion and save the
                    converted output files. On Android 13+, this is limited to
                    audio files only (READ_MEDIA_AUDIO).
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications:</strong>{" "}
                    Used to display conversion progress and notify you when
                    conversions are complete, especially when the app is running
                    in the background.
                  </li>
                  <li>
                    <strong className="text-foreground">Foreground Service:</strong>{" "}
                    Allows conversions to continue running reliably when you
                    switch to other apps. This ensures your conversions complete
                    even if the app is in the background.
                  </li>
                </ul>
                <p className="text-sm text-default-500 mt-3">
                  We only request permissions that are strictly necessary for
                  the app to function. No permission is used to collect or
                  transmit your data.
                </p>
              </div>
            </motion.div>

            {/* Section: Contact */}
            <motion.div variants={fadeInUp} className="space-y-4">
              <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full" />
                Contact
              </h2>
              <div className="pl-4 space-y-3 text-default-600 leading-relaxed">
                <p>Questions about this privacy policy? Reach out:</p>
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
                <div className="mt-6 pt-4 border-t border-default-100">
                  <p className="text-sm text-default-500">
                    <strong className="text-foreground">The Byte Array LTD</strong>
                  </p>
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
              All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
