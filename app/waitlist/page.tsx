import Navbar from "@/components/Navbar";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  return (
    <main className="bg-white">

      <Navbar />

      <section className="bg-neutral-100 px-6 py-32">

        <div className="mx-auto max-w-4xl text-center">

          <h1 className="text-6xl font-semibold tracking-tight text-black">

            Join the Take Profit Waitlist

          </h1>

          <p className="mt-8 text-xl leading-9 text-neutral-600">

            Create your account today and become one of the first members of
            Take Profit.

            <br /><br />

            Register, verify your email, unlock your dashboard,
            invite others, and follow our journey before launch.

          </p>

        </div>

      </section>

      <Waitlist />

      <Footer />

    </main>
  );
}