export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <img
        src="/logo.svg"
        alt="Take Profit"
        className="w-24 h-24 mb-12"
      />

      <h1 className="text-5xl md:text-7xl font-semibold text-black leading-tight">
        Trade with real capital.
      </h1>

      <p className="mt-8 text-2xl text-neutral-600 leading-relaxed">
        Keep more of the upside.
        <br />
        Carry less of the risk.
      </p>

      <a
        href="#waitlist"
        className="inline-flex items-center justify-center rounded-full bg-black px-10 py-5 text-white font-semibold"
      >
        Join Waitlist
      </a>
    </section>
  );
}
