import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-accent px-3 py-2 text-sm font-bold text-white">
              SS
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-card-foreground">
                SummitSteps
              </p>
              <p className="text-sm text-muted">Track elevation. Climb real peaks.</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#" className="text-card-foreground transition hover:text-accent">
              Home
            </a>
            <a href="#about" className="text-card-foreground transition hover:text-accent">
              About
            </a>
            <a
              href="#how-it-works"
              className="text-card-foreground transition hover:text-accent"
            >
              How It Works
            </a>
            <a href="#features" className="text-card-foreground transition hover:text-accent">
              Features
            </a>
            <a href="#contact" className="text-card-foreground transition hover:text-accent">
              Contact
            </a>
          </nav>

          <Link
            href="/privacy"
            className="rounded-xl border border-border bg-white px-4 py-2 text-sm font-semibold text-card-foreground transition hover:bg-[#f8f8f8]"
          >
            Privacy
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-border bg-card px-4 py-1 text-sm font-medium text-muted">
              SummitSteps
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-card-foreground md:text-6xl">
              Change your elevation gain into summit progress.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted md:text-xl">
              SummitSteps helps users track elevation gain, choose real-world
              mountains, and stay motivated with progress toward the next
              summit.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#how-it-works"
                className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-hover"
              >
                Learn how it works
              </a>

              <a
                href="#features"
                className="rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-card-foreground transition hover:bg-[#f8f8f8]"
              >
                Explore features
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-border bg-card p-6">
            <div className="mb-5">
              <h2 className="text-2xl font-semibold text-card-foreground">
                Mountains
              </h2>
              <p className="mt-1 text-muted">
                Explore peaks and track your summits
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-5xl font-semibold text-accent">12</div>
                <p className="mt-3 text-lg text-muted">Summits</p>
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 text-center">
                <div className="text-5xl font-semibold text-accent">48</div>
                <p className="mt-3 text-lg text-muted">Total peaks</p>
              </div>
            </div>

            <div className="mt-6 flex rounded-2xl bg-background p-1">
              <button className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white">
                All
              </button>
              <button className="px-5 py-3 text-sm font-medium text-muted">
                Climbed
              </button>
              <button className="px-5 py-3 text-sm font-medium text-muted">
                To Climb
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-border bg-background px-5 py-6 text-center text-lg text-muted">
              Your progress becomes a real mountain journey.
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-4 md:px-10 md:py-6">
        <div className="rounded-[28px] border border-border bg-card p-8 md:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground">
            About SummitSteps
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            Designed under support of Climb4KidneyCancer. 
            SummitSteps is designed to make movement feel meaningful. Instead of
            abstract step counts, users can connect their elevation gain to real
            mountains and see steady, motivating progress over time.
          </p>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14"
      >
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground">
            How it works
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            A simple, structured way to turn daily effort into visible climbing
            progress.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-[24px] border border-border bg-card p-6">
            <div className="text-sm font-semibold text-muted">01</div>
            <h3 className="mt-3 text-xl font-semibold text-card-foreground">
              Track elevation gain
            </h3>
            <p className="mt-3 leading-7 text-muted">
              Record elevation from everyday activity and build progress
              gradually.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-6">
            <div className="text-sm font-semibold text-muted">02</div>
            <h3 className="mt-3 text-xl font-semibold text-card-foreground">
              Choose a mountain
            </h3>
            <p className="mt-3 leading-7 text-muted">
              Select a real mountain goal and apply your accumulated elevation
              toward that summit.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-6">
            <div className="text-sm font-semibold text-muted">03</div>
            <h3 className="mt-3 text-xl font-semibold text-card-foreground">
              Reach milestones
            </h3>
            <p className="mt-3 leading-7 text-muted">
              Stay engaged with clear milestones, summit progress, and a visual
              sense of achievement.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-4 md:px-10 md:py-6">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground">
            Key features
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-muted">
            Built to feel simple, motivating, and easy to return to every day.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[24px] border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              Elevation-based tracking
            </h3>
            <p className="mt-2 leading-7 text-muted">
              Measure progress through elevation gain instead of generic step
              counts.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              Real mountain goals
            </h3>
            <p className="mt-2 leading-7 text-muted">
              Work toward actual summits and make long-term progress feel real.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              Account-based access
            </h3>
            <p className="mt-2 leading-7 text-muted">
              Users can securely access their data, progress, and core app
              features.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              Essential notifications
            </h3>
            <p className="mt-2 leading-7 text-muted">
              Verification, password reset, and login support emails keep access
              secure and reliable.
            </p>
          </div>

          <div className="rounded-[24px] border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-card-foreground">
              Socialize
            </h3>
            <p className="mt-2 leading-7 text-muted">
              Users can form groups, and create group climbing events of their own to motivate each other.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        <div className="rounded-[28px] border border-border bg-card p-8 md:p-10">
          <h2 className="text-3xl font-bold tracking-tight text-card-foreground">
            Email usage
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            SummitSteps uses email only for account verification, one-time
            passcodes for login, password reset, and essential account-related
            notifications. No unsolicited marketing emails are sent through our account systems.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-background p-5">
              <h3 className="font-semibold text-card-foreground">What we send</h3>
              <ul className="mt-3 space-y-2 text-muted">
                <li>Account verification emails</li>
                <li>One-time passcodes for login</li>
                <li>Password reset emails</li>
                <li>Essential service notifications</li>
              </ul>
            </div>

            <div className="rounded-2xl bg-background p-5">
              <h3 className="font-semibold text-card-foreground">
                What we do not send
              </h3>
              <ul className="mt-3 space-y-2 text-muted">
                <li>Unsolicited marketing emails</li>
                <li>Bulk promotional campaigns</li>
                <li>Third-party advertising mail</li>
                <li>Email to users who have not registered</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="mt-6 border-t border-border bg-card"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <div>
            <h2 className="text-lg font-semibold text-card-foreground">
              SummitSteps
            </h2>
            <p className="mt-2 text-sm text-muted">
              A mobile app for tracking elevation gain and climbing toward
              real-world summits.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-muted">
            <p>
              Contact:{" "}
              <a
                href="mailto:support@summitstepsapp.com"
                className="font-medium text-card-foreground underline"
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