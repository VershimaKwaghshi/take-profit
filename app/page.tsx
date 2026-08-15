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

          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-ash">
            <a href="#how-it-works" className="hover:text-ink">How It Works</a>
            <a href="#screens" className="hover:text-ink">Product Screens</a>
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
        <section className="px-6 py-16 max-w-7xl mx-auto">
          <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-navy bg-white border border-line rounded-full px-3 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-navy" />
            The difference is what happens after the loss
          </span>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 max-w-3xl">
            A loss should not end your trading.
          </h2>

          <p className="text-ash text-sm md:text-base max-w-2xl mb-8 leading-relaxed">
            Take Profit connects you with a vetted trading manager, protects your account with a
            defined restitution path if things go wrong, and gives you more than one way to build
            and access capital while you trade. Every part of it is explained below, so you know
            exactly what you are joining before you join.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href={registerHref} className="bg-navy hover:bg-navy-dark text-white text-sm font-semibold px-5 py-3 rounded-md transition-colors">
              Join Take Profit
            </Link>
            <Link href="#how-it-works" className="border border-line bg-white text-sm font-semibold px-5 py-3 rounded-md hover:bg-mist transition-colors">
              See how it works
            </Link>
          </div>
        </section>

        {/* WHAT TP IS, PLAIN EXPLANATION */}
        <section id="how-it-works" className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">What Take Profit Is</p>
          <h3 className="text-2xl font-bold mb-8 max-w-2xl">A platform that matches you with a manager, and protects you if the trade goes wrong.</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border border-line rounded-xl p-6">
              <Lock className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Your capital stays yours</p>
              <p className="text-xs text-ash leading-relaxed">Take Profit is not a broker. Your capital remains in your own account the entire time.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <Repeat className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">You choose your manager</p>
              <p className="text-xs text-ash leading-relaxed">Every day, you are shown three vetted managers from three different regions. You pick one, and they stay assigned until you switch.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <Users className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">No hidden identities</p>
              <p className="text-xs text-ash leading-relaxed">Managers never know who they are trading for. You never see more than a rotating alias. The process stays fair.</p>
            </div>
          </div>
        </section>

        {/* FOUR SCREENS, NO NUMBERING */}
        <section id="screens" className="px-6 pb-16 max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">See the system in motion.</h3>
          <p className="text-sm text-ash mb-8">Four parts of Take Profit, working together.</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* RESTITUTION */}
            <div>
              <p className="text-sm font-bold text-navy mb-1">Restitution</p>
              <h4 className="text-lg font-bold mb-2">The queue makes the promise visible.</h4>
              <p className="text-sm text-ash mb-4 leading-relaxed">
                If a qualifying loss happens on your account, the manager is removed and the
                event is recorded right away. Your account enters a restoration path instead of
                simply closing.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ash">Take Profit Restitution</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Queue</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold mb-4">
                    Your restoration path
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-2">ELIGIBLE</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div><p className="text-[10px] text-ash uppercase">Queue Position</p><p className="text-lg font-bold">#12,458</p></div>
                    <div><p className="text-[10px] text-ash uppercase">Account Status</p><p className="text-lg font-bold text-emerald-700">Active</p></div>
                  </div>
                  <div className="border-t border-line pt-3 text-xs text-ash">Your place is held while you stay active.</div>
                </div>
              </div>
            </div>

            {/* CAPITAL BUILDING */}
            <div>
              <p className="text-sm font-bold text-navy mb-1">Capital Building</p>
              <h4 className="text-lg font-bold mb-2">Build toward a funded account, one day at a time.</h4>
              <p className="text-sm text-ash mb-4 leading-relaxed">
                Request the account size you want and make a small payment toward it every day.
                Take Profit funds the full amount into a live account any time between day eleven
                and day one hundred, funding by day one hundred is guaranteed. You can withdraw
                trading profit right away, the funded amount stays locked until your schedule
                completes.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ash">Take Profit Capital Building</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Tracker</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold mb-4">
                    Your funding path
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-2">ON TRACK</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div><p className="text-[10px] text-ash uppercase">Target Account</p><p className="text-lg font-bold">$10,000</p></div>
                    <div><p className="text-[10px] text-ash uppercase">Day</p><p className="text-lg font-bold">34 of 100</p></div>
                  </div>
                  <div className="border-t border-line pt-3 text-xs text-ash">Profit is withdrawable now, the funded amount unlocks on completion.</div>
                </div>
              </div>
            </div>

            {/* SOCIAL BONDS */}
            <div>
              <p className="text-sm font-bold text-navy mb-1">Social Bonds</p>
              <h4 className="text-lg font-bold mb-2">Waiting does not mean being stuck.</h4>
              <p className="text-sm text-ash mb-4 leading-relaxed">
                Social Bond liquidity lets you access value already built inside Take Profit without
                withdrawing and losing momentum. You request an amount against your existing
                account value, and other members fund it.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ash">Take Profit Social Bonds</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Requests</span>
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold mb-4">
                    Access liquidity without losing momentum
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 ml-2">ACTIVE</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div><p className="text-[10px] text-ash uppercase">Available Value</p><p className="text-lg font-bold">$8,450</p></div>
                    <div><p className="text-[10px] text-ash uppercase">Bond Term</p><p className="text-lg font-bold">30 days</p></div>
                  </div>
                  <div className="border-t border-line pt-3 text-xs text-ash">Funded by other members on the platform.</div>
                </div>
              </div>
            </div>

            {/* REFERRAL MARKETPLACE */}
            <div>
              <p className="text-sm font-bold text-navy mb-1">Referral Marketplace</p>
              <h4 className="text-lg font-bold mb-2">Every account starts with a referral.</h4>
              <p className="text-sm text-ash mb-4 leading-relaxed">
                Everyone joins Take Profit through someone already active. If your referrer goes
                quiet for a while, you become eligible to find a new one here, on your own terms,
                so you are never stuck waiting on someone else.
              </p>
              <div className="bg-white border border-line rounded-xl overflow-hidden shadow-sm">
                <div className="bg-mist border-b border-line px-4 py-2 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-ash">Take Profit Referral Marketplace</span>
                  <span className="text-[10px] font-bold text-navy uppercase">Browse</span>
                </div>
                <table className="w-full text-xs">
                  <thead className="bg-mist text-[10px] font-bold uppercase tracking-wider text-ash">
                    <tr>
                      <th className="text-left p-3">Referral</th>
                      <th className="text-left p-3">Inactive Since</th>
                      <th className="text-left p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="p-3 font-semibold">TP-84219</td><td className="p-3">47 days</td><td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px]">ELIGIBLE</span></td></tr>
                    <tr><td className="p-3 font-semibold">TP-83764</td><td className="p-3">51 days</td><td className="p-3"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px]">ELIGIBLE</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT TP IS NOT / TRUST */}
        <section className="px-6 pb-16 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold uppercase tracking-widest text-ash mb-2">Know What Take Profit Is</p>
          <h3 className="text-2xl font-bold mb-8 max-w-2xl">Continuity with clear rules.</h3>

          <p className="text-sm text-ash mb-8 max-w-2xl leading-relaxed">
            Take Profit is not a broker and does not hold trading deposits. Every traders capital
            remains in their own account. Restitution is subject to eligibility, queue status, active
            use, and the stated risk rules of the system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="bg-white border border-line rounded-xl p-6">
              <Wallet className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Capital custody</p>
              <p className="text-xs text-ash leading-relaxed">Your capital stays in your own account, not with Take Profit.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <ShieldCheck className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Risk</p>
              <p className="text-xs text-ash leading-relaxed">Restitution is not a guarantee against every trading loss.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <HandCoins className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Profit split</p>
              <p className="text-xs text-ash leading-relaxed">Trading profit is shared evenly between you and your manager, before standard platform fees.</p>
            </div>
            <div className="bg-white border border-line rounded-xl p-6">
              <ArrowLeftRight className="w-4 h-4 text-navy mb-3" />
              <p className="text-sm font-bold mb-1">Your right to switch</p>
              <p className="text-xs text-ash leading-relaxed">You can request a new manager at any time, not only after a loss.</p>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="get-started" className="px-6 pb-16 max-w-7xl mx-auto">
          <div className="bg-navy rounded-xl p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">See what happens next.</h3>
            <p className="text-sm text-white/70 mb-6 max-w-xl mx-auto">
              Join Take Profit and get matched with your first manager today.
            </p>
            <Link href={registerHref} className="inline-block bg-white text-navy font-bold text-sm px-6 py-3 rounded-md hover:bg-mist transition-colors">
              Get started with Take Profit
            </Link>
          </div>
        </section>

        <footer className="border-t border-line py-6 px-6 text-center text-[11px] text-ash bg-white/80">
          <span className="font-semibold text-ink">Take Profit Restitution System.</span>
          {" "}Risk disclosure applies.
          {" "}© {new Date().getFullYear()}
        </footer>
      </main>
    </>
  );
}
