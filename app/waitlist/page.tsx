import Navbar from "@/components/Navbar";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

export default function WaitlistPage() {
  return (
    <main className="min-h-screen bg-white">

      <Navbar />

      <section className="pt-40 pb-20 px-6">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            EARLY ACCESS
          </span>

          <h1 className="mt-8 text-5xl font-semibold leading-tight text-black md:text-7xl">

            Join the
            <br />
            Take Profit
            <br />
            Waitlist

          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-9 text-neutral-600">

            Secure your account before launch.

            <br />

            Receive complete platform education.

            <br />

            Invite one verified member.

            <br />

            Unlock your full Take Profit dashboard.

          </p>

        </div>

      </section>

      <Waitlist />

      <Footer />

    </main>
  );
}