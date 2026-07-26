import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
              Trade Smarter
            </p>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-black md:text-7xl">

              Trade with
              <br />

              real capital.

            </h1>

            <p className="mt-10 max-w-xl text-xl leading-9 text-neutral-600">

              Keep more of the upside.

              Carry less of the risk.

              Learn continuously and stay in the market longer.

            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">

              <Link
                href="/waitlist"
                className="rounded-full bg-black px-10 py-5 text-center text-lg font-semibold text-white transition hover:opacity-90"
              >
                Join Waitlist
              </Link>

              <Link
                href="#platform"
                className="rounded-full border border-neutral-300 px-10 py-5 text-center text-lg font-semibold transition hover:bg-neutral-100"
              >
                Learn More
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-100 via-red-50 to-white blur-3xl" />

              <Image
                src="/og-image.png"
                alt="Take Profit"
                width={650}
                height={650}
                priority
                className="w-full max-w-[520px]"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}