import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import Philosophy from "../components/Philosophy";
import Features from "../components/Features";
import Footer from "../components/Footer";
import JoinWaitlistButton from "../components/JoinWaitlistButton";

export default function Home() {
  return (
    <main className="bg-white">

      <Navbar />

      <Hero />

      <ProductShowcase />

      <Philosophy />

      <Features />

      <section className="bg-black py-36">

        <div className="mx-auto max-w-6xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
            TAKE PROFIT
          </p>

          <h2 className="mt-8 text-5xl font-semibold leading-tight text-white md:text-7xl">
            Your journey
            <br />
            starts today.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-neutral-300">
            Complete your registration before launch.
          </p>

          <JoinWaitlistButton />

        </div>

      </section>

      <Footer />

    </main>
  );
}