import Navbar from "@/components/Navbar";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  return (
    <>
      <Navbar />

      <main className="pt-28">

        <section className="px-6 py-20 bg-neutral-100">

          <div className="mx-auto max-w-4xl text-center">

            <h1 className="text-6xl font-semibold tracking-tight">
              Join the Take Profit Waitlist
            </h1>

            <p className="mt-8 text-xl text-neutral-600 leading-9">
              Secure your place before launch.
              Register today, unlock your dashboard,
              invite others, and follow the journey
              as Take Profit comes to life.
            </p>

          </div>

        </section>

        <Waitlist />

      </main>

      <Footer />

    </>
  );
}
