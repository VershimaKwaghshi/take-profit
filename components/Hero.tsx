export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-white">
      <img src="/logo.svg" alt="Take Profit" className="w-20 h-20 mb-8" />

      <h1 className="text-5xl font-semibold text-black">
        Encounter trading differently.
      </h1>

      <p className="mt-6 text-xl text-neutral-600">
        Discover a new path.
        <br />
        You can now earn.
      </p>

      <button className="mt-10 rounded-full bg-black text-white px-8 py-4">
        Join the Waitlist
      </button>
    </section>
  );
}