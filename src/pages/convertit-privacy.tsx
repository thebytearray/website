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
  const lastUpdated = "April 14, 2026";

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
              Convertit media toolkit for Android
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
                    not collect any data. Everything stays on your device.
                    Because the app is distributed through Google Play, Google
                    may collect purchase-related information under their own
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
                  Convertit is an ad-free app for working with audio and video on
                  your phone. You can convert between common formats, edit tags and
                  metadata, and strip embedded data from files when you want a
                  cleaner copy.
                </p>
                <p>
                  Processing uses well-known open tools such as{" "}
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
                  . All of that runs on your device.
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
                  information, and we do not upload your media or settings to our
                  own servers. There is no account system in Convertit that sends
                  your identity back to us.
                </p>
                <p>
                  The app is built to work fully offline for its core features.
                  It does not need the internet to convert files or edit metadata,
                  and it does not send your files anywhere for processing.
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
                    Output files where you choose to save them, plus any copies
                    you keep in your gallery or folders
                  </li>
                  <li>
                    App settings such as theme and format choices you pick inside
                    the app
                  </li>
                  <li>
                    Short-lived temp files while a job runs. The app cleans these
                    up when it can
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
                  Convertit is available through Google Play. When you buy or
                  subscribe inside the app, Google runs billing and may keep
                  records that match how they always handle Play purchases. That
                  happens under{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://policies.google.com/privacy"
                  >
                    Google&apos;s privacy policy
                  </Link>
                  , not ours. We do not receive your full card number from Google.
                </p>
                <p>
                  Google may also collect routine store data when you install or
                  update the app. We do not control that side of the experience.
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
                    <strong className="text-foreground">Files and media.</strong>{" "}
                    So the app can read the clips and tracks you pick and write
                    new files where you want them. On newer Android versions the
                    scope follows what the system allows for audio (and video when
                    applicable).
                  </li>
                  <li>
                    <strong className="text-foreground">Notifications.</strong>{" "}
                    Optional progress and completion messages, including when work
                    runs in the background.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Running in the background.
                    </strong>{" "}
                    So a long conversion can finish even if you switch to another
                    app.
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  We only ask for what the features need. None of this is used to
                  ship your files to us.
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
