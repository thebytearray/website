import { PageLayout } from "@/layouts/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function Hy2ngPrivacyPage() {
  return (
    <PageLayout footerVariant="minimal">
      <section className="relative pt-16 pb-12 border-b border-foreground/[0.06]">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Hy2NG Privacy" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-display text-foreground tracking-tight leading-[1.1] mb-4">
              Hy2NG Privacy Policy
            </h1>
            <p className="text-foreground/55 text-sm">Last updated: December 2024</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto prose prose-sm dark:prose-invert">
            <h2>Introduction</h2>
            <p>
              This privacy policy explains how Hy2NG ("the App") handles your data.
              We believe in transparency and minimal data collection.
            </p>

            <h2>Data Collection</h2>
            <p>
              Hy2NG does not collect any personal data. The App operates entirely
              on-device and does not transmit any information to external servers.
            </p>

            <h2>VPN Usage</h2>
            <p>
              The App uses the Android VPN API to route traffic according to your
              configuration. All VPN traffic is processed locally on your device.
              No traffic data is logged, stored, or transmitted to third parties.
            </p>

            <h2>Server Configuration</h2>
            <p>
              Server configurations you enter are stored locally on your device.
              They are never sent to any server other than the one you configure.
              The built-in server setup wizard connects directly to your specified VPS.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              The App does not integrate any third-party analytics, advertising,
              or tracking services. It does not contain any cloud accounts or
              telemetry.
            </p>

            <h2>Data Storage</h2>
            <p>
              All app data, including configurations and preferences, is stored
              exclusively on your device using Android's local storage APIs.
              Uninstalling the App removes all stored data.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be
              posted on this page. We encourage you to review this policy periodically.
            </p>

            <h2>Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at{" "}
              <a href="mailto:contact@thebytearray.org">contact@thebytearray.org</a>.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
