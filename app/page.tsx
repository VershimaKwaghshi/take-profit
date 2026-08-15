// app/page.tsx
import Link from "next/link";
import { Lock, Users, BarChart3, Command, Wallet, Percent, Landmark, ShieldCheck } from "lucide-react";
import TPLogo from "@/components/TPLogo";

type Props = {
  searchParams: Promise<{ ref?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const { ref } = await searchParams;
  const registerHref = ref
    ? `/register?ref=${encodeURIComponent(ref)}`
    : "/register";

  return (
    <>
      <div className="tp-watermark" />
      <main className="tp-content min-h-screen bg-transparent text-ink">
        <header className="bg-white/90 backdrop-blur-sm border-b border-line px-6 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <TPLogo size={36} />
            <div>
              <h1 className="text-sm font-bold tracking-wider uppercase leading-tight">Take Profit</h1>
              <p className="text-[10px] tracking-widest text-ash uppercase leading-tight">Restitution System</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-ash">
            <a href="#restitution" className="hover:text-ink">Restitution</a>
            <a href="#screens" className="hover:text-ink">Product Screens</a>
            <a href="#reserve" className="hover:text-ink">Reserve</a>
            <a href="#get-started" className="hover:text-ink">Get Started</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="border border-line text-xs font-semibold px-4 py-2 rounded-md hover:bg-mist transition-colors">
              Sign in
            </Link>
            <Link href={registerHref} className="bg-navy hover:bg-navy-dark text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors">
              Join TP
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section id="restitution" className="px-6 py-16 max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy bg-white border border-line rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-navy" />
            The difference is what happens after the loss
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 max-w-3xl">
            A loss should not end your trading.
          </h2>

          <p className="text-ash text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            TP is built around restitution: when a qualifying account loss happens, the event
            is recorded, the failed manager is removed, and the account enters a defined
            restoration path instead of simply disappearing from the system.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Link href="#reserve" className="bg-navy hover:bg-navy-dark text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors">
              Understand restitution
            </Link>
            <Link href="#screens" className="border border-line bg-white text-sm font-semibold px-5 py-3 rounded-md hover:bg-mist transition-colors">
              Explore the system →
            </Link>
          </div>

          <p className="text-xs text-ash">
            TP is not a broker. Your capital remains in your own account at a partner broker.
          </p>
        </section>

        {/* RESTITUTION PATH, 3 STEPS */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">The Restitution Path</p>
          <h3 className="text-2xl font-bold mb-2 max-w-xl">What happens after a qualifying loss?</h3>
          <p className="text-sm text-ash mb-8 max-w-xl">
            Most trading products stop at the drawdown. TP shows you what comes next.
          </p>

          <div className="bg-white border border-line rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
              <div className="pb-6 md:pb-0 md:pr-6">
                <p className="text-xs font-bold text-navy mb-1">01 · Lock and record</p>
                <p className="text-sm text-ash leading-relaxed">At 50% drawdown, the manager is locked out and the event is timestamped automatically.</p>
              </div>
              <div className="pt-6 md:pt-0 md:px-6">
                <p className="text-xs font-bold text-navy mb-1">02 · Queue for restoration</p>
                <p className="text-sm text-ash leading-relaxed">The account is placed into a strict first-come restitution queue.</p>
              </div>
              <div className="pt-6 md:pt-0 md:pl-6">
                <p className="text-xs font-bold text-navy mb-1">03 · Keep your place</p>
                <p className="text-sm text-ash leading-relaxed">Stay eligible while waiting; Social Bond liquidity remains available.</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-line">
              <p className="text-xs text-ash">
                <span className="font-bold text-ink">TP&apos;s core promise is continuity.</span>{" "}
                A qualifying loss becomes a process, not a dead end.
              </p>
            </div>
          </div>
        </section>

        {/* THE PROBLEM */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">The Problem</p>
          <h3 className="text-2xl font-bold mb-4 max-w-2xl">
            Trading losses are common. Losing your entire place in the market should not be.
          </h3>
          <p className="text-sm text-ash max-w-2xl leading-relaxed">
            Prop firms usually stop at elimination rules. Brokers usually stop at execution.
            TP is designed around the gap between the loss and what a trader needs afterward,
            a visible process, a reserve, and a route back.
          </p>
        </section>

        {/* 5 STEP EXPLAINED */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Restitution, explained clearly.</h3>
          <p className="text-sm text-ash mb-8">One defined path from qualifying loss to restored continuity.</p>

          <div className="bg-white border border-line rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-line">
            {[
              { n: "01", title: "Qualifying loss", body: "The account crosses the 50% drawdown threshold." },
              { n: "02", title: "Automatic lockout", body: "The manager is locked out without waiting for manual review." },
              { n: "03", title: "Queue placement", body: "The event is timestamped and placed first come, first served." },
              { n: "04", title: "Reserve restoration", body: "Ongoing platform income funds the account restoration path." },
              { n: "05", title: "Continuity", body: "Keep your position active while the process moves forward." },
            ].map((step, i) => (
              <div key={step.n} className={`py-4 md:py-0 ${i > 0 ? "md:pl-6" : ""} ${i < 4 ? "md:pr-6" : ""}`}>
                <p className="text-xs font-bold text-navy mb-1">{step.n}</p>
                <p className="text-sm font-bold mb-1">{step.title}</p>
                <p className="text-xs text-ash leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCT SCREENS PREVIEW */}
        <section id="screens" className="px-6 pb-16 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">See the system in motion.</h3>
          <p className="text-sm text-ash mb-8">Different screens. One continuity promise.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Restitution Queue mini mockup */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">Screen 01 · Restitution</p>
              <h4 className="text-lg font-bold mb-2">The queue makes the promise visible.</h4>
              <p className="text-sm text-ash mb-3 leading-relaxed">
                A trader should not have to guess what happens after a loss. The queue shows
                status, eligibility, reserve health, and the payout path in one place.
              </p>
              <p className="text-xs text-ash mb-5">
                <span className="font-bold text-ink">Visible in the product: </span>
                Queue position · reserve status · participation health · payout timeline · restitution risk
              </p>

              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ash">Take Profit · Restitution System</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Queue</span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-ash mb-1">Restitution Queue</p>
                  <p className="text-sm font-bold mb-4">Your restoration path <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-1">ELIGIBLE</span></p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div><p className="text-[10px] text-ash uppercase">Queue Position</p><p className="text-lg font-bold">#12,458</p></div>
                    <div><p className="text-[10px] text-ash uppercase">Reserve Health</p><p className="text-lg font-bold">85.6%</p></div>
                    <div><p className="text-[10px] text-ash uppercase">Account Status</p><p className="text-lg font-bold text-emerald-700">Active</p></div>
                  </div>
                  <div className="border-t border-line pt-3 text-xs text-ash">
                    Your place is held while you stay active.
                  </div>
                </div>
              </div>
            </div>

            {/* Social Bonds mini mockup */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">Screen 02 · Liquidity</p>
              <h4 className="text-lg font-bold mb-2">Waiting does not mean being stuck.</h4>
              <p className="text-sm text-ash mb-3 leading-relaxed">
                Social Bond liquidity lets traders access value built inside TP without
                withdrawing and losing momentum. It is a second path for the period while
                restitution is being processed.
              </p>
              <p className="text-xs text-ash mb-5">
                <span className="font-bold text-ink">Visible in the product: </span>
                Liquidity request · bond term · activation fee · facilitator and bonder funding · settlement status
              </p>

              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ash">Take Profit · Social Bonds</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Requests</span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-ash mb-1">Social Bonds</p>
                  <p className="text-sm font-bold mb-4">Access liquidity without losing momentum <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-1">ACTIVE</span></p>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div><p className="text-[10px] text-ash uppercase">Available Value</p><p className="text-lg font-bold">$8,450</p></div>
                    <div><p className="text-[10px] text-ash uppercase">Bond Term</p><p className="text-lg font-bold">30 days</p></div>
                    <div><p className="text-[10px] text-ash uppercase">Request Status</p><p className="text-lg font-bold text-emerald-700">Funded</p></div>
                  </div>
                  <table className="w-full text-xs border-t border-line pt-2">
                    <thead>
                      <tr className="text-[10px] text-ash uppercase">
                        <th className="text-left font-bold py-1">Party</th>
                        <th className="text-left font-bold py-1">Share</th>
                        <th className="text-left font-bold py-1">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="py-1">Facilitator</td><td className="py-1">40%</td><td className="py-1">Funded</td></tr>
                      <tr><td className="py-1">Bonders</td><td className="py-1">40%</td><td className="py-1">Settle</td></tr>
                      <tr><td className="py-1">Platform</td><td className="py-1">20%</td><td className="py-1">Active</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SAFETY NET / RESERVE FUNDING */}
        <section id="reserve" className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">The Safety Net</p>
          <h3 className="text-2xl font-bold mb-8 max-w-2xl">
            Restitution is funded as a system, not a slogan.
          </h3>

          <div className="bg-white border border-line rounded-xl p-6 md:p-8">
            <p className="text-sm text-ash mb-8 max-w-2xl leading-relaxed">
              The reserve is topped up continuously from subscriptions, the platform&apos;s cut
              of profit withdrawals, and broker volume rebates. This is the mechanism that
              turns continuity into an operating model.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-mist border border-line flex items-center justify-center text-navy"><Wallet className="w-5 h-5" /></div>
                <p className="text-xs font-bold">Subscriptions</p>
                <p className="text-[11px] text-ash">$4.99 monthly access</p>
              </div>
              <Percent className="w-4 h-4 text-ash rotate-90 md:rotate-0" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-mist border border-line flex items-center justify-center text-navy"><BarChart3 className="w-5 h-5" /></div>
                <p className="text-xs font-bold">Profit fees</p>
                <p className="text-[11px] text-ash">Platform share</p>
              </div>
              <Command className="w-4 h-4 text-ash rotate-90 md:rotate-0" />
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-mist border border-line flex items-center justify-center text-navy"><Landmark className="w-5 h-5" /></div>
                <p className="text-xs font-bold">Broker rebates</p>
                <p className="text-[11px] text-ash">Routed volume</p>
              </div>
              <span className="text-ash text-lg">→</span>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white"><ShieldCheck className="w-5 h-5" /></div>
                <p className="text-xs font-bold">Reserve</p>
                <p className="text-[11px] text-ash">Restoration path</p>
              </div>
            </div>
          </div>
        </section>

        {/* KNOW WHAT TP IS */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">Know What TP Is</p>
          <h3 className="text-2xl font-bold mb-8 max-w-2xl">Continuity with clear rules.</h3>

          <p className="text-sm text-ash mb-8 max-w-2xl leading-relaxed">
            TP is not a broker and does not hold trading deposits. Every trader&apos;s capital
            remains in their own account at a partner broker. Restitution is subject to
            eligibility, queue status, active access, and the system&apos;s stated risk rules.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-line rounded-xl p-6">
              <Lock className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Capital custody</p>
              <p className="text-xs text-ash leading-relaxed">Your capital stays at a partner broker.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <Users className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Eligibility</p>
              <p className="text-xs text-ash leading-relaxed">Keep access active and log in at least every 25 days.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <ShieldCheck className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Risk</p>
              <p className="text-xs text-ash leading-relaxed">Restitution is not a guarantee against all trading losses.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="get-started" className="px-6 pb-16 max-w-7xl mx-auto">
          <div className="bg-navy rounded-xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">See what happens next.</h3>
            <p className="text-sm text-white/70 mb-6 max-w-xl mx-auto">
              Start with the system built around continuity after a qualifying loss.
            </p>
            <Link href={registerHref} className="inline-block bg-white text-navy font-bold text-sm px-6 py-3 rounded-md hover:bg-mist transition-colors">
              Get started with TP →
            </Link>
          </div>
        </section>

        <footer className="border-t border-line py-6 px-6 text-center text-[11px] text-ash bg-white/80">
          <span className="font-semibold text-ink">Take Profit · Restitution System</span>
          <span className="mx-3">·</span>
          Capital remains at partner brokers
          <span className="mx-3">·</span>
          Risk disclosure applies
          <span className="mx-3">·</span>
          © {new Date().getFullYear()}
        </footer>
      </main>
    </>
  );
}
