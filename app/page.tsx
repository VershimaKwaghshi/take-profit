import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="bg-white">

      <Navbar />

      <Hero />

      <Philosophy />

      <Features />

      <section className="bg-black py-36">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.35em] text-red-500">

            EARLY ACCESS

          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">

            Build your future
            <br />
            before launch.

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-neutral-300">

            Secure your account today.

            Learn how Take Profit works.

            Invite one verified member.

            Unlock your complete dashboard.

            Be ready from day one.

          </p>

          <a
            href="/waitlist"
            className="mt-16 inline-flex items-center justify-center rounded-full bg-white px-10 py-5 text-lg font-semibold text-black transition hover:bg-neutral-100"
          >
            Join Waitlist
          </a>

        </div>

      </section>

      <Footer />

    </main>
  );
}