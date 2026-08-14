// app/page.tsx
import Link from "next/link";
import { ShieldCheck, TrendingUp, Target } from "lucide-react";

type Props = {
  searchParams: Promise<{ ref?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const { ref } = await searchParams;
  const registerHref = ref
    ? `/register?ref=${encodeURIComponent(ref)}`
    : "/register";

  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="px-6 py-5 flex items-center justify-between border-b border-line">
        <div className="flex items-center gap-3">
          <svg width="30" height="30" viewBox="0 0 28 28" fill="none" className="text-navy">
            <path d="M4 20L14 6L24 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-lg font-extrabold tracking-tight">TAKE PROFIT</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-ash">
          <a href="#programs" className="hover:text-navy transition-colors">Programs</a>
          <a href="#performance" className="hover:text-navy transition-colors">Performance</a>
          <a href="#faq" className="hover:text-navy transition-colors">FAQ</a>
        </nav>
        <Link
          href={registerHref}
          className="bg-navy text-paper hover:bg-navy-dark font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Register
        </Link>
      </header>

      <section className="relative overflow-hidden">
        <div className="px-6 pt-16 pb-20 md:pt-24 md:pb-28 max-w-6xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-sans text-5xl md:text-7xl font-black tracking-tight leading-[1.02] mb-6 max-w-4xl">
            Trade with real capital.
            <br />
            <span className="text-navy">Split the profit, not the risk.</span>
          </h1>
          <p className="text-ash text-lg md:text-xl max-w-2xl mb-10">
            Take Profit pairs you with a professional manager under a transparent 50/50
            split, backed by an automated restitution reserve if a manager breaches risk.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link
              href={registerHref}
              className="bg-navy text-paper hover:bg-navy-dark font-bold px-10 py-5 text-lg rounded-full shadow-xl shadow-navy/20 transition-colors"
            >
              Register now
            </Link>
            <span className="text-xs text-ash font-medium tracking-wide">No referral code required</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 pb-20">
          <div className="relative bg-mist border border-line rounded-3xl p-8 md:p-12 overflow-hidden">
            <svg viewBox="0 0 800 280" className="w-full h-auto" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a3a5c" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#1a3a5c" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0 200 L60 190 L120 210 L180 160 L240 175 L300 120 L360 140 L420 90 L480 110 L540 60 L600 85 L660 40 L720 65 L800 20 L800 280 L0 280 Z"
                fill="url(#areaFill)"
              />
              <path
                d="M0 200 L60 190 L120 210 L180 160 L240 175 L300 120 L360 140 L420 90 L480 110 L540 60 L600 85 L660 40 L720 65 L800 20"
                fill="none"
                stroke="#1a3a5c"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {[
                [0, 200], [120, 210], [240, 175], [360, 140],
                [480, 110], [600, 85], [720, 65], [800, 20],
              ].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="5" fill="#1a3a5c" />
              ))}
            </svg>
            <div className="absolute top-8 left-8 md:top-12 md:left-12 bg-paper border border-line rounded-xl px-4 py-3 shadow-lg">
              <p className="text-[10px] uppercase tracking-widest text-ash mb-1">Split</p>
              <p className="font-mono text-xl font-semibold">50 / 50</p>
            </div>
            <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 bg-paper border border-line rounded-xl px-4 py-3 shadow-lg">
              <p className="text-[10px] uppercase tracking-widest text-ash mb-1">Restitution reserve</p>
              <p className="font-mono text-xl font-semibold text-navy">Active</p>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="px-6 py-24 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-paper border border-line rounded-2xl p-8">
          <div className="h-12 w-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5 text-navy">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Restitution reserve</h3>
          <p className="text-ash leading-relaxed">
            A manager is locked out automatically at 50% drawdown. Restoration is funded
            from a reserve and queued first come, first served.
          </p>
        </div>

        <div className="bg-paper border border-line rounded-2xl p-8">
          <div className="h-12 w-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5 text-navy">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Capital building</h3>
          <p className="text-ash leading-relaxed">
            A 100 day path to full funding. Daily scheduled payments at 1.1% of the
            requested size, funding opens day 11 through day 100.
          </p>
        </div>

        <div className="bg-paper border border-line rounded-2xl p-8">
          <div className="h-12 w-12 rounded-xl bg-navy/10 flex items-center justify-center mb-5 text-navy">
            <Target className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Managed trading</h3>
          <p className="text-ash leading-relaxed">
            24 hour rotating regional manager pools, aliased identities, and an even
            profit split on every statement.
          </p>
        </div>
      </section>

      <footer className="border-t border-line py-10 px-6 text-center text-xs text-ash">
        © {new Date().getFullYear()} PLeNat Technologies. Partner broker custody model.
      </footer>
    </main>
  );
}
