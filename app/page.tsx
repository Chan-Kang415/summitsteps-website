import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-1 text-sm font-medium text-slate-600">
              SummitSteps
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 md:text-6xl">
              Turn everyday elevation gain into summit progress.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
              SummitSteps is a mobile app that helps users track elevation gain,
              choose real-world mountains, and make steady progress toward their
              next summit.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#how-it-works"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Learn how it works
              </a>
              <Link
                href="/privacy"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            How it works
          </h2>
          <p className="mt-4 text-slate-600">
            SummitSteps makes it easy to stay motivated by turning daily movement
            into visible mountain progress.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">01</div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              Track elevation gain
            </h3>
            <p className="mt-3 text-slate-600">
              Record your stair climbing and elevation progress through your
              activity data and daily movement.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">02</div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              Choose a mountain
            </h3>
            <p className="mt-3 text-slate-600">
              Pick a real-world mountain and use your accumulated elevation gain
              to move toward that summit over time.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-500">03</div>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">
              Reach milestones
            </h3>
            <p className="mt-3 text-slate-600">
              Stay motivated with progress tracking, summit milestones, and a
              clear sense of how far you have climbed.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Key features
            </h2>
            <p className="mt-4 text-slate-600">
              SummitSteps is designed to make elevation-based fitness simple,
              motivating, and easy to follow.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Elevation-based progress tracking
              </h3>
              <p className="mt-2 text-slate-600">
                See how your daily activity contributes to your long-term climb.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Real mountain goals
              </h3>
              <p className="mt-2 text-slate-600">
                Progress toward real-world summits instead of abstract step
                counts.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Account-based access
              </h3>
              <p className="mt-2 text-slate-600">
                Users can create accounts to securely access their progress and
                core app features.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Essential notifications
              </h3>
              <p className="mt-2 text-slate-600">
                Important account and authentication messages support secure app
                access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-slate-950">
            Email usage
          </h2>
          <p className="mt-4 max-w-3xl text-slate-700">
            SummitSteps uses email only for account verification, one-time
            passcodes for login, password reset, and essential account-related
            notifications. We do not send unsolicited or marketing emails.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">What we send</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>Account verification emails</li>
                <li>One-time passcodes for login</li>
                <li>Password reset emails</li>
                <li>Essential service-related notifications</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-semibold text-slate-900">What we do not send</h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                <li>Unsolicited marketing emails</li>
                <li>Bulk promotional campaigns</li>
                <li>Email to users who have not registered</li>
                <li>Third-party advertising mail</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">SummitSteps</h2>
            <p className="mt-2 text-sm text-slate-600">
              A mobile app for tracking elevation gain and climbing toward real-world summits.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-slate-600">
            <p>
              Contact:{" "}
              <a
                href="mailto:support@summitstepsapp.com"
                className="font-medium text-slate-900 underline"
              >
                support@summitstepsapp.com
              </a>
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}