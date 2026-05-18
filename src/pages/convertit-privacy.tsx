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
  const lastUpdated = "April 27, 2026";

  return (
    <PageLayout footerVariant="minimal">
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
                  { label: "Convertit" },
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
              Convertit audio conversion for Android
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

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            animate="visible"
            className="max-w-3xl mx-auto space-y-8"
            initial="hidden"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Card
                className="bg-foreground/[0.02] border border-foreground/[0.06]"
                shadow="none"
              >
                <CardBody className="px-4 py-3">
                  <p className="text-sm text-foreground/55 leading-snug">
                    <strong className="text-foreground">Summary.</strong> We do
                    not collect any data. Everything stays on your device. The
                    app is ad-free. If you install from Google Play, Google may
                    collect routine store-related information under their own
                    policies.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What Convertit is
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  Convertit is an ad-free app for converting audio on your
                  device—select tracks, pick an output format, and save the
                  result where you want. It does not collect personally
                  identifiable information, and it does not upload your media
                  for cloud processing.{" "}
                  <Link
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="/convertit-pro-privacy"
                  >
                    Convertit Pro
                  </Link>{" "}
                  is the expanded toolkit with more features, including working
                  with video, rich metadata, and other tools; the same privacy
                  expectations apply, with details on that product on its own
                  page.
                </p>
                <p>
                  Audio conversion is performed on your device (for example
                  using{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://ffmpeg.org"
                  >
                    FFmpeg
                  </Link>
                  ). We do not access your files for anything beyond what you
                  start in the app.
                </p>
                <p>
                  The tooling Convertit and Convertit Pro use is open source and
                  published as{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://github.com/thebytearray/convertit-libs"
                  >
                    convertit-libs on GitHub
                  </Link>
                  , where you can inspect the code, build setup, and third-party
                  notices.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What we do not collect
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  We do not run analytics inside the app, we do not sell your
                  information, and we do not upload your media or settings to
                  our own servers. There is no account system in Convertit that
                  sends your identity back to us.
                </p>
                <p>
                  The app is designed so conversion work can run without sending
                  your files to us or to third-party services for processing.
                </p>
                <p>
                  Convertit does not use any third-party services for analytics,
                  advertising, or data collection.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What stays on your device
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>Examples include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Converted files where you save them, and any copies you keep
                    in your folders or gallery
                  </li>
                  <li>
                    Preferences you set inside the app, such as format choices
                  </li>
                  <li>
                    Short-lived temporary data while a job runs, which the app
                    cleans up when it can
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  Uninstalling removes the app&apos;s data. Files you already
                  exported to your storage stay where you put them until you
                  delete them yourself.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Google Play and purchases
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  Convertit is a free, ad-free app. If you install it from
                  Google Play, Google may collect routine store, install, and
                  update data as covered by{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://policies.google.com/privacy"
                  >
                    Google&apos;s privacy policy
                  </Link>
                  . We do not add analytics or advertising SDKs in the app for
                  tracking your usage.
                </p>
                <p>
                  If you purchase or subscribe to{" "}
                  <Link
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="/convertit-pro-privacy"
                  >
                    Convertit Pro
                  </Link>{" "}
                  or other paid offerings through Google Play, billing and
                  related records are handled by Google as with any Play
                  purchase; see the Convertit Pro privacy page for the full
                  description. We do not receive your full card number from
                  Google.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Permissions in plain words
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-foreground">
                      Storage / files.
                    </strong>{" "}
                    To let you pick audio files to convert and save converted
                    output on your device. We do not use this access to read
                    your files for any other purpose.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Foreground service.
                    </strong>{" "}
                    So conversion can continue while the app is in the
                    background or the screen is off, when Android requires a
                    foreground service for that work.
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications.</strong>{" "}
                    Optional progress or completion messages when a job is
                    running.
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  We only ask for what the features need. None of this is used
                  to send your files to us.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Religious disclaimer
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  According to Islamic principles, music is considered haram. If
                  you choose to use Convertit for converting music or any other
                  haram content, you take full personal responsibility for such
                  use. The developers of Convertit bear no responsibility for
                  how the app is used.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Questions
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>If something is unclear, write to us:</p>
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
