import Link from "next/link";
import TPLogo from "@/components/TPLogo";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line px-6 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <TPLogo size={32} />
          <span className="text-sm font-bold uppercase tracking-wider">Take Profit</span>
        </Link>
      </header>

      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink">Terms of Service</h1>
        <p className="mt-3 text-sm text-ash font-medium">Last updated {new Date().getFullYear()}</p>

        <section className="mt-10 space-y-3">
          <h2 className="text-lg font-bold text-ink">1. What Take Profit Is</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Take Profit is a software platform owned by PLeNat Technologies, operated through PPG Solutions.
            Take Profit connects traders with vetted trading managers. Take Profit is not a broker and does
            not hold trading deposits. Every traders capital remains in their own account at a partner broker
            for the entire time they use the platform.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">2. Registration and Referral Access</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Anyone can create an account without a referral code. A referral code is required to unlock
            full platform features after registration, including manager assignment, capital building,
            and social bond access. Identity verification is required for every account regardless of
            referral status.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">3. Subscription and Access</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            A flat monthly access fee applies to both traders and managers. Missing this payment
            suspends dashboard access immediately. Live chat access additionally requires an active
            trading account or an active managing role at the same time as an active subscription.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">4. Manager Matching</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Every 24 hours, the platform surfaces three vetted managers from three different regions.
            A trader selects one manager from that pool. The assigned manager stays in place until a
            drawdown event or a deliberate switch. A trader may request a new manager at any time,
            this is a standing right and is not limited to drawdown events. Managers never see who
            they are trading for, and traders never see more than a rotating alias for their manager.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">5. Profit Split and Fees</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Trading profit generated on a managed account splits evenly between the trader and the
            manager. A platform profit fee and a referral fee are each deducted from the withdrawn
            share of both the trader and the manager. Exact fee percentages are disclosed inside the
            product at the point of withdrawal and may be updated from time to time, with notice
            given through the dashboard.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">6. Manager Qualification</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            To manage other accounts, a manager must have an account of equivalent size actively
            managed by another manager on the platform. There is no separate written evaluation.
            Repeated drawdown failures under live conditions carry real consequences, including
            suspension of active status and a lien against future earnings until the associated
            loss is repaid.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">7. Restitution</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            If a managed account reaches a 50 percent drawdown, the manager is removed automatically
            and the account enters a restitution queue on a first come first served basis. To keep
            an eligible place in the queue, the trader must keep their subscription active and log
            into the dashboard at least once every 25 days. Missing either requirement causes that
            account to be skipped during a restoration cycle, though the queue position itself is
            not lost. Restitution is not a guaranteed outcome and depends on the platforms ongoing
            restitution reserve.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">8. Capital Building</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            A trader without upfront capital may request a target account size and make a small
            payment toward it every day for up to 100 days. Take Profit funds the full amount into
            a live account any time between day 11 and day 100, funding by day 100 is guaranteed.
            The funded principal cannot be withdrawn while the schedule is active. Trading profit
            can be withdrawn in real time as long as the daily schedule stays current. Missing a
            scheduled payment before completion forfeits contributions made up to that point.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">9. Social Bonds</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Social Bonds allow a trader to invest in accredited opportunities offered through the
            platform in exchange for a stated target return. Target returns are not guaranteed.
            Funds committed to a bond are subject to the terms stated for that specific bond at
            the time of funding.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">10. Referral Marketplace</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Every referrer earns a share of the profit their referred traders generate. If a referrer
            stays inactive for 45 days, the referred trader becomes eligible to move to a new
            referrer through the Referral Marketplace, a venue where active members compete to take
            over that relationship. Past earnings always stay with the original referrer, only
            future earnings move.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">11. Account Suspension and Closure</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            An account may be suspended if the platform identifies fraud, identity misuse, or an
            attempt to manipulate platform rules. A trader may request account closure at any time,
            closure will be declined while an account carries an active capital building schedule,
            an active social bond obligation, or an unresolved restitution lien.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">12. Changes to These Terms</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Take Profit may update these terms as the platform develops. Material changes will be
            shown through the dashboard. Continued use of the platform after a change is posted
            means acceptance of the updated terms.
          </p>
        </section>

        <section className="mt-8 space-y-3">
          <h2 className="text-lg font-bold text-ink">13. Contact</h2>
          <p className="text-sm text-ink/80 leading-relaxed font-medium">
            Questions about these terms can be sent through the support contact listed inside your
            dashboard once you have an account.
          </p>
        </section>
      </div>
    </main>
  );
}
