import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <Link href="/" className="text-sm font-medium text-slate-600 underline">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
          Privacy Policy
        </h1>
        <p className="mt-4 text-slate-600">Last updated: April 2026</p>

        <div className="prose prose-slate mt-10 max-w-none">
          <p>
            SummitSteps respects your privacy. This Privacy Policy explains what
            information we collect, how we use it, and how we protect it when
            you use our website and mobile application.
          </p>

          <h2>Information we collect</h2>
          <p>We may collect the following information:</p>
          <ul>
            <li>Name and email address provided during account registration</li>
            <li>Account authentication information, such as one-time passcodes</li>
            <li>Basic usage data needed to operate and improve the service</li>
            <li>Activity and progress information related to elevation tracking</li>
          </ul>

          <h2>How we use your information</h2>
          <p>We use information we collect to:</p>
          <ul>
            <li>Create and manage user accounts</li>
            <li>Provide secure login and authentication</li>
            <li>Send one-time passcodes, password resets, and essential notifications</li>
            <li>Operate, maintain, and improve SummitSteps</li>
          </ul>

          <h2>Email usage</h2>
          <p>
            SummitSteps uses email only for transactional purposes, including
            account verification, one-time passcodes for login, password reset,
            and essential account-related notifications. We do not send
            unsolicited marketing emails.
          </p>

          <h2>Third-party services</h2>
          <p>
            We may use trusted third-party service providers to support core app
            functionality, including cloud hosting, authentication, and email
            delivery. These providers may process information only as needed to
            provide their services.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain information only for as long as necessary to operate the
            service, comply with legal obligations, resolve disputes, and
            enforce our agreements.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable steps to protect your information and support
            secure access to user accounts. However, no method of transmission
            or storage is completely secure.
          </p>

          <h2>Your choices</h2>
          <p>
            You may contact us if you would like to request updates or deletion
            of your account information, subject to applicable legal and
            operational requirements.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Privacy Policy, contact us at{" "}
            <a href="mailto:support@summitstepsapp.com">
              support@summitstepsapp.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}