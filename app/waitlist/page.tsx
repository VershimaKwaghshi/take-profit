import Navbar from "@/components/Navbar";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  return (
    <main className="bg-white min-h-screen">

      <Navbar />

      <section className="pt-40 pb-20 px-6">

        <div className="mx-auto max-w-5xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            EARLY ACCESS
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-tight text-black">

            Join the
            <br />
            Take Profit
            <br />
            Waitlist

          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-neutral-600">

            Apply for early access.

            <br />

            Learn how Take Profit works.

            <br />

            Invite verified traders.

            <br />

            Help shape the future of the platform.

          </p>

        </div>

      </section>

      <Waitlist />

      <Footer />

    </main>
  );
}