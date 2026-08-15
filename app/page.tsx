// app/page.tsx
import Link from "next/link";
import { Lock, Users, ShieldCheck, Repeat, Wallet, HandCoins, ArrowLeftRight } from "lucide-react";
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

          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-ink">
            <a href="#restitution" className="hover:text-navy">Restitution</a>
            <a href="#capital-building" className="hover:text-navy">Capital Building</a>
            <a href="#social-bond" className="hover:text-navy">Social Bond</a>
            <a href="#referral-marketplace" className="hover:text-navy">Referral Marketplace</a>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/login" className="border border-line text-xs font-bold px-4 py-2 rounded-md hover:bg-mist transition-colors">
              Login
            </Link>
            <Link href={registerHref} className="bg-navy hover:bg-navy-dark text-white text-xs font-bold px-4 py-2 rounded-md transition-colors">
              Sign up
            </Link>
          </div>
        </header>

        {/* HERO */}
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy bg-white border border-line rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-oxblood" />
            The difference is what happens after the loss
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 max-w-3xl text-ink">
            A loss should not end your trading.
          </h2>

          <p className="text-ink text-sm md:text-base max-w-2xl mb-8 leading-relaxed font-medium">
            Take Profit connects you with a vetted trading manager, protects your account with a
            defined restitution path if things go wrong, and gives you more than one way to build
            and access capital while you trade. Every part of it is explained below, so you know
            exactly what you are joining before you join.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href={registerHref} className="bg-navy hover:bg-navy-dark text-white text-sm font-bold px-5 py-3 rounded-md transition-colors">
              Join Take Profit
            </Link>
            <Link href="#restitution" className="border border-line bg-white text-sm font-bold px-5 py-3 rounded-md hover:bg-mist transition-colors text-ink">
              See how it works
            </Link>
          </div>
        </section>

        {/* WHAT TP IS, PLAIN EXPLANATION */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-navy mb-2">What Take Profit Is</p>
          <h3 className="text-2xl font-extrabold mb-8 max-w-2xl text-ink">A platform that matches you with a manager, and protects you if the trade goes wrong.</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-line rounded-xl p-6">
              <Lock className="w-5 h-5 text-navy mb-3" />
              <p className="text-sm font-bold mb-1 text-ink">Your capital stays yours</p>
              <p className="text-xs text-ink/80 leading-relaxed font-medium">Take Profit is not a broker. Your capital remains in your own account the entire time.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <Repeat className="w-5 h-5 text-signal-green mb-3" />
              <p className="text-sm font-bold mb-1 text-ink">You choose your manager</p>
              <p className="text-xs text-ink/80 leading-relaxed font-medium">Every day, you are shown three vetted managers from three different regions. You pick one, and they stay assigned until you switch.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <Users className="w-5 h-5 text-oxblood mb-3" />
              <p className="text-sm font-bold mb-1 text-ink">No hidden identities</p>
              <p className="text-xs text-ink/80 leading-relaxed font-medium">Managers never know who they are trading for. You never see more than a rotating alias. The process stays fair.</p>
            </div>
          </div>
        </section>

        {/* FOUR SCREENS */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <h3 className="text-2xl font-extrabold mb-2 text-ink">See the system in motion.</h3>
          <p className="text-sm text-ink/80 mb-8 font-medium">Four parts of Take Profit, working together.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* RESTITUTION */}
            <div id="restitution">
              <p className="text-sm font-extrabold text-oxblood mb-1">Restitution</p>
              <h4 className="text-lg font-extrabold mb-2 text-ink">The queue makes the promise visible.</h4>
              <p className="text-sm text-ink/80 mb-4 leading-relaxed font-medium">
                If a qualifying loss happens on your account, the manager is removed and the
                event is recorded right away. Your account enters a restoration path instead of
                simply closing.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/70">Take Profit Restitution</span>
                  <span className="text-[10px] font-bold text-oxblood uppercase">Queue</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold mb-4 text-ink">
                    Your restoration path
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-2">ELIGIBLE</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div><p className="text-[10px] text-ink/60 uppercase font-bold">Queue Position</p><p className="text-lg font-extrabold text-ink">#12,458</p></div>
                    <div><p className="text-[10px] text-ink/60 uppercase font-bold">Account Status</p><p className="text-lg font-extrabold text-signal-green">Active</p></div>
                  </div>
                  <div className="border-t border-line pt-3 text-xs text-ink/70 font-medium">Your place is held while you stay active.</div>
                </div>
              </div>
            </div>

            {/* CAPITAL BUILDING */}
            <div id="capital-building">
              <p className="text-sm font-extrabold text-navy mb-1">Capital Building</p>
              <h4 className="text-lg font-extrabold mb-2 text-ink">Build toward a funded account, one day at a time.</h4>
              <p className="text-sm text-ink/80 mb-4 leading-relaxed font-medium">
                Request the account size you want and make a small payment toward it every day.
                Take Profit funds the full amount into a live account any time between day eleven
                and day one hundred, funding by day one hundred is guaranteed. You can withdraw
                trading profit right away, the funded amount stays locked until your schedule
                completes.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/70">Take Profit Capital Building</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Tracker</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold mb-4 text-ink">
                    Your funding path
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-2">ON TRACK</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div><p className="text-[10px] text-ink/60 uppercase font-bold">Target Account</p><p className="text-lg font-extrabold text-ink">$10,000</p></div>
                    <div><p className="text-[10px] text-ink/60 uppercase font-bold">Day</p><p className="text-lg font-extrabold text-ink">34 of 100</p></div>
                  </div>
                  <div className="border-t border-line pt-3 text-xs text-ink/70 font-medium">Profit is withdrawable now, the funded amount unlocks on completion.</div>
                </div>
              </div>
            </div>

            {/* SOCIAL BOND */}
            <div id="social-bond">
              <p className="text-sm font-extrabold text-signal-green mb-1">Social Bond</p>
              <h4 className="text-lg font-extrabold mb-2 text-ink">Waiting does not mean being stuck.</h4>
              <p className="text-sm text-ink/80 mb-4 leading-relaxed font-medium">
                Social Bond liquidity lets you access value already built inside Take Profit without
                withdrawing and losing momentum. You request an amount against your existing
                account value, and other members fund it.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/70">Take Profit Social Bond</span>
                  <span className="text-[10px] font-bold text-signal-green uppercase">Requests</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold mb-4 text-ink">
                    Access liquidity without losing momentum
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-2">ACTIVE</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div><p className="text-[10px] text-ink/60 uppercase font-bold">Available Value</p><p className="text-lg font-extrabold text-ink">$8,450</p></div>
                    <div><p className="text-[10px] text-ink/60 uppercase font-bold">Bond Term</p><p className="text-lg font-extrabold text-ink">30 days</p></div>
                  </div>
                  <div className="border-t border-line pt-3 text-xs text-ink/70 font-medium">Funded by other members on the platform.</div>
                </div>
              </div>
            </div>

            {/* REFERRAL MARKETPLACE */}
            <div id="referral-marketplace">
              <p className="text-sm font-extrabold text-navy mb-1">Referral Marketplace</p>
              <h4 className="text-lg font-extrabold mb-2 text-ink">Every account starts with a referral.</h4>
              <p className="text-sm text-ink/80 mb-4 leading-relaxed font-medium">
                Everyone joins Take Profit through someone already active. If your referrer goes
                quiet for a while, you become eligible to find a new one here, on your own terms,
                so you are never stuck waiting on someone else.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ink/70">Take Profit Referral Marketplace</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Browse</span>
                </div>
                <table className="w-full text-xs">
                  <thead className="bg-mist text-[10px] font-bold uppercase tracking-wider text-ink/60">
                    <tr>
                      <th className="text-left p-3">Referral</th>
                      <th className="text-left p-3">Inactive Since</th>
                      <th className="text-left p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="p-3 font-bold text-ink">TP-84219</td><td className="p-3 font-medium text-ink/80">47 days</td><td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px]">ELIGIBLE</span></td></tr>
                    <tr><td className="p-3 font-bold text-ink">TP-83764</td><td className="p-3 font-medium text-ink/80">51 days</td><td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px]">ELIGIBLE</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TP IS NOT / TRUST */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-navy mb-2">Know What Take Profit Is</p>
          <h3 className="text-2xl font-extrabold mb-8 max-w-2xl text-ink">Continuity with clear rules.</h3>

          <p className="text-sm text-ink/80 mb-8 max-w-2xl leading-relaxed font-medium">
            Take Profit is not a broker and does not hold trading deposits. Every traders capital
            remains in their own account. Restitution is subject to eligibility, queue status, active
            use, and the stated risk rules of the system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="bg-white border border-line rounded-xl p-6">
              <Wallet className="w-5 h-5 text-navy mb-3" />
              <p className="text-sm font-bold mb-1 text-ink">Capital custody</p>
              <p className="text-xs text-ink/80 leading-relaxed font-medium">Your capital stays in your own account, not with Take Profit.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <ShieldCheck className="w-5 h-5 text-oxblood mb-3" />
              <p className="text-sm font-bold mb-1 text-ink">Risk</p>
              <p className="text-xs text-ink/80 leading-relaxed font-medium">Restitution is not a guarantee against every trading loss.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <HandCoins className="w-5 h-5 text-signal-green mb-3" />
              <p className="text-sm font-bold mb-1 text-ink">Profit split</p>
              <p className="text-xs text-ink/80 leading-relaxed font-medium">Trading profit is shared evenly between you and your manager, before standard platform fees.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <ArrowLeftRight className="w-5 h-5 text-navy mb-3" />
              <p className="text-sm font-bold mb-1 text-ink">Your right to switch</p>
              <p className="text-xs text-ink/80 leading-relaxed font-medium">You can request a new manager at any time, not only after a loss.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <div className="bg-navy rounded-xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-extrabold text-white mb-2">See what happens next.</h3>
            <p className="text-sm text-white/80 mb-6 max-w-xl mx-auto font-medium">
              Join Take Profit and get matched with your first manager today.
            </p>
            <Link href={registerHref} className="inline-block bg-white text-navy font-extrabold text-sm px-6 py-3 rounded-md hover:bg-mist transition-colors">
              Get started with Take Profit
            </Link>
          </div>
        </section>

        <footer className="border-t border-line py-8 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-ink/70 font-medium">
              Take Profit, a product of PLeNat Technologies.
              {" "}© {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-5 text-xs font-bold text-ink/80">
              <Link href="/privacy" className="hover:text-navy">Privacy</Link>
              <Link href="/risk-disclosure" className="hover:text-navy">Risk Disclosure</Link>
              <Link href="/terms" className="hover:text-navy">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
