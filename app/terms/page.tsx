import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <Link href="/" className="text-sm font-medium text-slate-600 underline">
          ← Back to home
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950">
          Terms of Service
        </h1>
        <p className="mt-4 text-slate-600">Last updated: April 2026</p>

        <div className="prose prose-slate mt-10 max-w-none">
          <p>
            These Terms of Service govern your use of the SummitSteps website
            and mobile application. By accessing or using SummitSteps, you agree
            to these Terms.
          </p>

          <h2>Use of the service</h2>
          <p>
            SummitSteps provides tools for tracking elevation gain, viewing
            progress toward real-world mountain summits, and accessing related
            account features. You agree to use the service only for lawful and
            appropriate purposes.
          </p>

          <h2>Accounts</h2>
          <p>
            You may need to create an account to access certain features. You
            are responsible for maintaining the confidentiality of your account
            information and for activity that occurs under your account.
          </p>

          <h2>Authentication emails</h2>
          <p>
            SummitSteps may send transactional emails such as one-time passcodes
            for login, account verification, password reset, and essential
            account-related notifications. SummitSteps does not send unsolicited
            marketing emails through these account systems.
          </p>

          <h2>User responsibilities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for fraudulent, abusive, or unlawful activity</li>
            <li>Attempt to disrupt or interfere with the service</li>
            <li>Misuse authentication flows or account security features</li>
            <li>Access accounts or data that do not belong to you</li>
          </ul>

          <h2>Availability</h2>
          <p>
            We may update, modify, suspend, or discontinue parts of the service
            from time to time. We do not guarantee uninterrupted availability.
          </p>

          <h2>Disclaimer</h2>
          <p>
            SummitSteps is provided on an “as is” and “as available” basis. To
            the fullest extent permitted by law, we disclaim warranties of any
            kind, express or implied.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, SummitSteps will not be
            liable for indirect, incidental, special, consequential, or punitive
            damages arising from your use of the service.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of the
            service after changes become effective constitutes acceptance of the
            updated Terms.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these Terms, contact us at{" "}
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