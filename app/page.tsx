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

      <section className="bg-black py-28">

        <div className="mx-auto max-w-4xl px-6 text-center text-white">

          <h2 className="text-5xl font-semibold">

            Be among the first to experience Take Profit.

          </h2>

          <p className="mt-8 text-xl leading-9 text-neutral-300">

            Join our early access community today.
            Secure your account before launch,
            invite friends, unlock your dashboard,
            and follow the journey as Take Profit comes to life.

          </p>

          <a
            href="/waitlist"
            className="mt-12 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-neutral-100"
          >

            Join Waitlist

          </a>

        </div>

      </section>

      <Footer />

    </main>
  );
}