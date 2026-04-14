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
  const lastUpdated = "April 14, 2026";

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
              Hy2NG on Android, iPhone, iPad, and Mac
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
            <motion.div variants={fadeInUp}>
              <Card
                className="bg-foreground/[0.02] border border-foreground/[0.06]"
                shadow="none"
              >
                <CardBody className="px-4 py-3">
                  <p className="text-sm text-foreground/55 leading-snug">
                    <strong className="text-foreground">Summary.</strong> We do not
                    collect any data. Everything stays on your device. Because the
                    app is distributed through the App Store and Google Play,
                    Apple or Google may collect purchase-related information under
                    their own policies.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What Hy2NG is
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  Hy2NG is a client for the{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://v2.hysteria.network"
                  >
                    Hysteria2
                  </Link>{" "}
                  protocol. You can connect to servers you trust and use the
                  guided flow to set up a server of your own if you want.
                </p>
                <p>
                  We do not host VPN endpoints for you. You supply the server or
                  the config from someone you trust. The app is only there to
                  help you connect and manage those setups on your side.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What we do not collect
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  The Byte Array does not use the app to collect personal
                  information on our servers. There are no ad networks, no
                  in-app trackers, and no account system inside Hy2NG that sends
                  your identity or usage back to us.
                </p>
                <p>
                  Your Hysteria profiles, app preferences, and similar data are
                  stored on your phone, tablet, or computer. The app does not
                  sync them to a cloud we control.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                What stays on your device
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>Examples of what the app keeps locally include:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Server configs and labels you add</li>
                  <li>
                    Choices like theme, DNS, MTU, and which profile is selected
                  </li>
                  <li>
                    On Android, settings for which apps use the VPN. That app
                    list never leaves your device for our purposes.
                  </li>
                  <li>
                    On iPhone, iPad, and Mac, a small amount of shared storage so
                    the main app and the VPN tunnel piece can use the same
                    profile. It is still only on your device, not sent to us.
                  </li>
                </ul>
                <p className="text-sm text-foreground/45 mt-3">
                  Deleting the app removes its data from that install. On Apple
                  systems you may also need to remove the VPN profile in
                  Settings if you want every trace of the tunnel gone.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Paying for the app and the stores
              </h2>
              <div className="pl-4 space-y-4 text-foreground/55 leading-relaxed">
                <p>
                  On the App Store, Hy2NG is a paid download. When you pay,
                  Apple handles the charge and the receipt. Apple may keep
                  information related to your Apple ID, your purchase, and how
                  you use the store. That is between you and Apple. You can read
                  how they describe it in{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://www.apple.com/legal/privacy/"
                  >
                    Apple&apos;s privacy overview
                  </Link>
                  . We do not receive your full payment card details from Apple,
                  and we do not get your VPN configs or traffic from them either.
                </p>
                <p>
                  If you install through TestFlight for testing, you might not
                  pay at all. Apple can still see typical store and device
                  signals when you use TestFlight. Again, their rules apply.
                </p>
                <p>
                  On Google Play, Google runs billing and licensing. They may
                  collect data about installs and purchases the way they always
                  do for Play apps. See{" "}
                  <Link
                    isExternal
                    className="text-foreground/55 hover:text-foreground underline underline-offset-2"
                    href="https://policies.google.com/privacy"
                  >
                    Google&apos;s privacy policy
                  </Link>{" "}
                  for detail. We do not replace or override those practices.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Network use
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  When you connect a VPN profile, traffic goes to the server you
                  configured. We do not sit in the middle and we cannot see what
                  you do online.
                </p>
                <p>
                  If you use the server setup flow, the app connects straight to
                  your machine over SSH with the login details you type in. That
                  session is between you and your server.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Permissions in plain words
              </h2>
              <div className="pl-4 space-y-4 text-foreground/55 leading-relaxed">
                <div>
                  <p className="font-medium text-foreground mb-2">Android</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-foreground">VPN.</strong> Lets the
                      app create the tunnel after you approve it.
                    </li>
                    <li>
                      <strong className="text-foreground">Internet.</strong>{" "}
                      Needed to reach your servers.
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Running in the background.
                      </strong>{" "}
                      So the VPN can stay connected while you use other apps.
                    </li>
                    <li>
                      <strong className="text-foreground">Notifications.</strong>{" "}
                      So you can see when you are connected.
                    </li>
                    <li>
                      <strong className="text-foreground">Seeing installed apps.</strong>{" "}
                      Only for choosing per-app VPN routing. It stays on the
                      device.
                    </li>
                    <li>
                      <strong className="text-foreground">Camera.</strong> Only
                      if you scan a QR code to import a config.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">
                    iPhone, iPad, and Mac
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong className="text-foreground">VPN.</strong> The
                      system asks you to allow a VPN profile so the tunnel can
                      run. Your settings stay on the device.
                    </li>
                    <li>
                      <strong className="text-foreground">Network.</strong> For
                      connecting to your servers and for optional SSH setup.
                    </li>
                    <li>
                      <strong className="text-foreground">Camera.</strong> Only
                      if you scan a QR code.
                    </li>
                    <li>
                      <strong className="text-foreground">Saving photos.</strong>{" "}
                      Only if you save a QR image. We ask for add-only access,
                      not your whole library.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Feedback email
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>
                  If you open feedback and tap send, your device opens your
                  email app with a draft. We only see what you actually send.
                  Nothing is uploaded in the background without that step.
                </p>
              </div>
            </motion.div>

            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-xl font-semibold text-foreground border-l-2 border-foreground/15 pl-3">
                Questions
              </h2>
              <div className="pl-4 space-y-3 text-foreground/55 leading-relaxed">
                <p>If something here is unclear, write to us:</p>
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
