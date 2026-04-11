import { Link } from "@heroui/link";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { motion } from "framer-motion";

import { PageLayout } from "@/layouts/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { EmailIcon } from "@/components/icons";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ConvertitPrivacyPage() {
  const lastUpdated = "December 21, 2025";

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
                  { label: "Convertit Pro", href: "/#convertit" },
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
              Convertit : Media Toolkit
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
                    not collect any data. ConvertIt works entirely offline and
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
                  Convertit is an{" "}
                  <strong className="text-foreground">
                    ad-free media toolkit
                  </strong>{" "}
                  app built with Kotlin and Jetpack Compose. It is powered by{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://ffmpeg.org"
                  >
                    FFmpeg
                  </Link>
                  ,{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://taglib.org"
                  >
                    TagLib
                  </Link>
                  , and{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://exiv2.org"
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
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                We Don&apos;t Collect Any Data
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  ConvertIt does not collect, transmit, or store any personal
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
                    Converted audio and video files (saved to your chosen
                    location)
                  </li>
                  <li>
                    App preferences and settings (theme, output format
                    preferences)
                  </li>
                  <li>
                    Temporary files during conversion (automatically cleaned up)
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  All data is stored locally and is removed when you uninstall
                  the app (except for converted files you&apos;ve saved to your
                  device storage).
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
                  ConvertIt does not make any network requests. The app does not
                  connect to the internet for any purpose. All file conversions
                  and metadata editing happen entirely on your device using
                  local processing.
                </p>
                <p>
                  <strong className="text-foreground">
                    Your files never leave your device.
                  </strong>{" "}
                  We cannot access, view, or retrieve any of your media files.
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
                  Convertit is distributed exclusively through Google Play.
                  Google may collect certain data as part of their standard Play
                  Store services, including purchase verification and app
                  licensing.
                </p>
                <p>
                  The app uses Google Play Billing for in-app purchases. This
                  involves Google&apos;s SDKs which may collect data necessary
                  for processing transactions and verifying purchases.
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
                    Required to read your media files for conversion and save
                    the converted output files. On Android 13+, this is limited
                    to audio files only (READ_MEDIA_AUDIO).
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications:</strong>{" "}
                    Used to display conversion progress and notify you when
                    conversions are complete, especially when the app is running
                    in the background.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Foreground Service:
                    </strong>{" "}
                    Allows conversions to continue running reliably when you
                    switch to other apps. This ensures your conversions complete
                    even if the app is in the background.
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  We only request permissions that are strictly necessary for
                  the app to function. No permission is used to collect or
                  transmit your data.
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
