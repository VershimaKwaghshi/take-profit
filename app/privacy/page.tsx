import Link from "next/link";
import TPLogo from "@/components/TPLogo";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line px-6 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <TPLogo size={32} />
          <span className="text-sm font-bold uppercase tracking-wider">Take Profit</span>
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ash font-medium">Last updated {new Date().getFullYear()}</p>

        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-bold text-ink">1. What We Collect</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            When you register, we collect your name, email, phone number, and country. During identity
            verification, we collect the documents needed to confirm who you are. While you use the
            platform, we record account activity needed to run manager matching, restitution, capital
            building, social bonds, and the referral marketplace, including trading account size,
            drawdown events, and login activity.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">2. How We Use It</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Your data is used to operate your account, match you with a manager, track restitution
            eligibility, process capital building schedules, and calculate referral relationships.
            Login activity specifically determines whether your account stays eligible inside the
            restitution queue.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">3. Sharing With Partner Brokers</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Because your trading capital sits in your own account at a partner broker, not with Take
            Profit, certain account details are shared with that broker so trades and account
            monitoring can function. We do not sell personal data to advertisers or unrelated third
            parties.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">4. Data Retention</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            We keep account and transaction records for as long as your account is active, and for a
            period afterward as required for financial recordkeeping and dispute resolution.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">5. Your Rights</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            You can request a copy of the personal data we hold about you, and you can request
            correction of inaccurate information, through your account settings or by contacting
            support from inside your dashboard.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">6. Changes to This Policy</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            This policy may be updated as the platform develops. Material changes will be shown
            through the dashboard.
          </p>
        </section>
      </div>
    </main>
  );
}
