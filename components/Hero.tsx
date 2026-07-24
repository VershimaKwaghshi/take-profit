export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">

      {/* Red shape */}
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-red-600 blur-3xl opacity-10" />

      {/* Blue shape */}
      <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-600 blur-3xl opacity-10" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">

        <img
          src="/logo.svg"
          alt="Take Profit"
          className="mb-12 w-40 md:w-56"
        />

        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-black md:text-7xl">
          Trade with
          <span className="text-blue-600"> real capital</span>.
          <br />
          Keep more of the
          <span className="text-red-600"> upside</span>.
        </h1>

        <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
          A modern proprietary trading platform designed to
          help disciplined traders stay in the market longer.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

          <a
            href="/waitlist"
            className="rounded-full bg-black px-10 py-5 font-semibold text-white transition hover:scale-105"
          >
            Join Waitlist
          </a>

          <a
            href="#features"
            className="rounded-full border border-neutral-300 px-10 py-5 font-semibold text-black transition hover:bg-neutral-100"
          >
            Learn More
          </a>

        </div>

      </div>

    </section>
  );
}