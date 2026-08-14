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
    <main className="min-h-screen bg-black text-white selection:bg-yellow-700/30">
      <header className="border-b border-yellow-700/20 px-6 py-4 flex items-center justify-between backdrop-blur-md sticky top-0 z-50 bg-black/80">
        <div className="flex items-center gap-3">
          <span className="font-bold tracking-wider text-lg tp-gold-text">TAKE PROFIT</span>
          <span className="hidden sm:inline text-xs uppercase tracking-widest text-neutral-500">PLeNat Technologies</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
          <a href="#programs" className="hover:text-yellow-500 transition-colors">Programs</a>
          <a href="#performance" className="hover:text-yellow-500 transition-colors">Performance</a>
          <a href="#faq" className="hover:text-yellow-500 transition-colors">FAQ</a>
        </nav>
        <Link
          href={registerHref}
          className="bg-yellow-600 text-black hover:bg-yellow-500 font-semibold px-6 py-2 rounded-lg transition-colors"
        >
          Register Now →
        </Link>
      </header>

      <section className="px-6 py-24 md:py-32 text-center max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
          Take Profit. <br />
          <span className="tp-gold-text">Precision. Protection. Performance.</span>
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10">
          A private trading platform bridging retail traders and professional capital
          management, with automated restitution protection built in.
        </p>
        <div className="flex flex-col items-center gap-3">
          <Link
            href={registerHref}
            className="bg-yellow-600 text-black hover:bg-yellow-500 font-bold px-8 py-4 text-base rounded-xl shadow-2xl shadow-yellow-900/20 transition-colors"
          >
            Register Now →
          </Link>
          <span className="text-xs text-neutral-500 tracking-wider uppercase font-medium">
            No referral code required
          </span>
        </div>
      </section>

      <section id="programs" className="px-6 pb-32 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="granite-card granite-card-gold rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <div className="h-14 w-14 rounded-xl bg-white/5 border border-yellow-700/30 flex items-center justify-center mb-6 tp-gold-text">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-wide">Restitution Protection</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Automatic 50% drawdown lockouts and a funded restitution reserve, structured
              to protect trader capital when a manager breaches risk.
            </p>
          </div>
        </div>

        <div className="granite-card granite-card-gold rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <div className="h-14 w-14 rounded-xl bg-white/5 border border-yellow-700/30 flex items-center justify-center mb-6 tp-gold-text">
              <TrendingUp className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-wide">Capital Building</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              A 100 day path to full funding. Daily scheduled payments at 1.1% of the
              requested size, funding opens day 11 through day 100.
            </p>
          </div>
        </div>

        <div className="granite-card granite-card-gold rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <div className="h-14 w-14 rounded-xl bg-white/5 border border-yellow-700/30 flex items-center justify-center mb-6 tp-gold-text">
              <Target className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-bold mb-3 tracking-wide">Managed Trading</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              24 hour rotating regional manager pools, aliased identities, and an even
              50/50 profit split with your assigned manager.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-yellow-700/20 py-12 px-6 text-center text-sm text-neutral-500">
        <p>© {new Date().getFullYear()} PLeNat Technologies. Partner broker custody model.</p>
      </footer>
    </main>
  );
}
