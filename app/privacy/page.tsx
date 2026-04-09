import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <Link
          href="/"
          className="text-sm font-medium text-muted underline underline-offset-4 transition hover:text-card-foreground"
        >
          ← Back to home
        </Link>

        <div className="mt-6 rounded-[28px] border border-border bg-card p-8 md:p-10">
          <h1 className="text-4xl font-bold tracking-tight text-card-foreground md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-base text-muted">Last updated: April 2026</p>

          <div className="mt-10 space-y-8 text-base leading-8 text-muted">
            <section>
              <p>
                SummitSteps values your privacy. This Privacy Policy explains
                what information we collect, how we use it, and how we protect
                it when you use our website and mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                Information we collect
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name and email address provided during account registration</li>
                <li>Authentication data such as one-time passcodes</li>
                <li>Basic usage data needed to operate and improve the service</li>
                <li>Activity and progress data related to elevation tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                How we use your information
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Create and manage user accounts</li>
                <li>Provide secure login and authentication</li>
                <li>Send one-time passcodes, password reset emails, and essential notifications</li>
                <li>Operate, maintain, and improve SummitSteps</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                Email usage
              </h2>
              <p className="mt-3">
                We only send emails that are necessary for using the service,
                including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Account verification emails</li>
                <li>One-time login passcodes</li>
                <li>Password reset emails</li>
                <li>Essential account and service notifications</li>
              </ul>
              <p className="mt-3">
                We do not send unsolicited marketing or promotional emails.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                Third-party services
              </h2>
              <p className="mt-3">
                We may use trusted third-party providers, such as cloud hosting,
                authentication, and email delivery services, to support core app
                functionality. These providers may process information only as
                needed to provide their services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                Data retention
              </h2>
              <p className="mt-3">
                We retain information only for as long as necessary to operate
                the service, comply with legal obligations, resolve disputes,
                and enforce our agreements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                Security
              </h2>
              <p className="mt-3">
                We take reasonable steps to protect your information and support
                secure access to user accounts. However, no method of
                transmission or storage is completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                Your choices
              </h2>
              <p className="mt-3">
                You may contact us to request updates or deletion of your
                account information, subject to applicable legal and operational
                requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-card-foreground">
                Contact
              </h2>
              <p className="mt-3">
                If you have questions about this Privacy Policy, contact us at{" "}
                <a
                  href="mailto:support@summitstepsapp.com"
                  className="font-medium text-card-foreground underline underline-offset-4"
                >
                  support@summitstepsapp.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}