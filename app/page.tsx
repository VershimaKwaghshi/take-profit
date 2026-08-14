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
      <header className="border-b border-line px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <svg width="40" height="40" viewBox="0 0 60 60" fill="none">
            <line x1="8" y1="46" x2="52" y2="14" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M22 40L30 30L38 40" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="8" cy="46" r="6" fill="#7a2620" />
            <circle cx="52" cy="14" r="6" fill="#1e3a5f" />
          </svg>
          <div>
            <h1 className="text-sm font-bold tracking-wider text-ink uppercase leading-tight">Take Profit</h1>
            <p className="text-[10px] tracking-widest text-ash uppercase leading-tight">Capital &amp; Manager Marketplace</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-ash">
          <a href="#programs" className="hover:text-ink">PROGRAMS</a>
          <a href="#performance" className="hover:text-ink">PERFORMANCE</a>
          <a href="#faq" className="hover:text-ink">FAQ</a>
        </nav>

        <Link
          href={registerHref}
          className="bg-navy hover:bg-navy-dark text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Register
        </Link>
      </header>

      <section className="px-8 py-16 md:py-24 max-w-4xl">
        <p className="text-xs font-bold tracking-widest text-ash uppercase mb-3">
          Precision. Protection. Performance.
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-ink mb-6 leading-[1.1]">
          Trade with real capital.
        </h2>
        <p className="text-ash text-sm md:text-base max-w-xl mb-8 leading-relaxed">
          Take Profit pairs retail traders with professional managers under a transparent
          50/50 split, backed by an automated restitution reserve if a manager breaches risk.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={registerHref}
            className="bg-navy hover:bg-navy-dark text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
          >
            Register Now
          </Link>
          <span className="text-xs text-ash">No referral code required</span>
        </div>
      </section>

      <section id="programs" className="px-8 pb-20 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-paper border border-line rounded-lg shadow-sm p-6">
          <div className="p-1.5 bg-mist rounded-md w-fit mb-4">
            <ShieldCheck className="w-5 h-5 text-navy" />
          </div>
          <h3 className="text-sm font-bold text-ink mb-2">Restitution Reserve</h3>
          <p className="text-xs text-ash leading-relaxed">
            A manager is locked out automatically at 50% drawdown. Restoration is funded
            from a reserve and queued first come, first served.
          </p>
        </div>

        <div className="bg-paper border border-line rounded-lg shadow-sm p-6">
          <div className="p-1.5 bg-mist rounded-md w-fit mb-4">
            <TrendingUp className="w-5 h-5 text-navy" />
          </div>
          <h3 className="text-sm font-bold text-ink mb-2">Capital Building</h3>
          <p className="text-xs text-ash leading-relaxed">
            A 100 day path to full funding. Daily scheduled payments at 1.1% of the
            requested size, funding opens day 11 through day 100.
          </p>
        </div>

        <div className="bg-paper border border-line rounded-lg shadow-sm p-6">
          <div className="p-1.5 bg-mist rounded-md w-fit mb-4">
            <Target className="w-5 h-5 text-navy" />
          </div>
          <h3 className="text-sm font-bold text-ink mb-2">Managed Trading</h3>
          <p className="text-xs text-ash leading-relaxed">
            24 hour rotating regional manager pools, aliased identities, and an even
            profit split on every statement.
          </p>
        </div>
      </section>

      <footer className="border-t border-line py-8 px-8 text-xs text-ash">
        © {new Date().getFullYear()} PLeNat Technologies. Partner broker custody model.
      </footer>
    </main>
  );
}
