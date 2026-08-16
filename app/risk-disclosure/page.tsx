import Link from "next/link";
import TPLogo from "@/components/TPLogo";

export default function RiskDisclosurePage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line px-6 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <TPLogo size={32} />
          <span className="text-sm font-bold uppercase tracking-wider">Take Profit</span>
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink">Risk Disclosure</h1>
        <p className="mt-3 text-sm text-ash font-medium">Last updated {new Date().getFullYear()}</p>

        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-bold text-ink">1. Trading Involves Risk</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Trading financial markets carries real risk of loss. Marketed returns, including target
            returns shown on Social Bond opportunities, are not guaranteed. Past performance of any
            manager or bond does not predict future results.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">2. Restitution Is Not a Guarantee</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            The restitution system is designed to restore a qualifying account after a 50 percent
            drawdown, but restoration depends on the ongoing health of the restitution reserve and
            your accounts continued eligibility. Restitution does not protect against every possible
            trading loss and is not a substitute for your own risk judgment.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">3. Capital Custody</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Take Profit is not a broker. Your trading capital remains in your own account at a
            partner broker at all times. Take Profit does not accept deposits and does not hold
            client funds directly.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">4. Managed Accounts</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            When a manager trades your account, you are delegating execution, not ownership.
            You retain full ownership of your account and its balance at all times. Manager
            decisions still carry real market risk that can result in losses on your account
            before any restitution event is triggered.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">5. Capital Building and Social Bonds</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Capital Building schedules and Social Bond commitments both carry the risk of forfeiture
            if scheduled obligations are missed. Read the specific terms shown at the time you enter
            either commitment before proceeding.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">6. Your Responsibility</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            You are responsible for understanding the risks of any feature you use on Take Profit
            before you use it. If you are unsure whether a feature is right for you, seek independent
            financial advice before proceeding.
          </p>
        </section>
      </div>
    </main>
  );
}
