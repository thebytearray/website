import { PageLayout } from "@/layouts/PageLayout";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export default function OpenLoaderPrivacyPage() {
  return (
    <PageLayout footerVariant="minimal">
      <section className="relative pt-16 pb-12 border-b border-foreground/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "OpenLoader Privacy" },
              ]}
            />
            <h1 className="text-3xl sm:text-4xl font-display text-foreground tracking-tight leading-[1.1] mb-4">
              OpenLoader Privacy Policy
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
              This privacy policy explains how OpenLoader ("the App") handles your data.
              We believe in minimal data collection and maximum transparency.
            </p>

            <h2>Data Collection</h2>
            <p>
              OpenLoader does not collect any personal data. The App operates entirely
              on-device and does not transmit information to external servers.
            </p>

            <h2>APK Files</h2>
            <p>
              APK files you select for installation are processed locally. The App
              never uploads or transmits APK files to any server.
            </p>

            <h2>Permissions</h2>
            <p>
              The App requests the following permissions solely for local functionality:
            </p>
            <ul>
              <li>
                <strong>Internet</strong> - Used solely for wireless ADB connections to
                your devices over the local network. No data is sent to external servers.
              </li>
              <li>
                <strong>Notification</strong> - Used to show install progress and completion status.
              </li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>
              OpenLoader does not integrate any third-party analytics, advertising,
              or tracking services. It has no cloud accounts or telemetry.
            </p>

            <h2>Data Storage</h2>
            <p>
              All preferences and history are stored exclusively on your device using
              Android's local storage APIs. Uninstalling the App removes all stored data.
            </p>

            <h2>Open Source</h2>
            <p>
              OpenLoader is open source under GPL-3.0. You can verify our privacy
              claims by inspecting the source code.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be
              posted on this page.
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
