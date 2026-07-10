export default function Waitlist() {
  return (
    <section id="waitlist" className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-2 items-center">

        <div>
          <p className="uppercase text-sm font-semibold tracking-[0.2em] text-neutral-500">
            Join us
          </p>

          <h2 className="mt-6 text-5xl font-semibold text-black">
            Join the waitlist
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-8">
            Learn.
            <br />
            Practice.
            <br />
            Grow.
          </p>
        </div>

        <form className="rounded-[32px] border border-neutral-200 bg-neutral-50 p-8 space-y-6">

          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none focus:border-black"
          />

          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none focus:border-black"
          />

          <input
            type="tel"
            placeholder="Phone number"
            className="w-full rounded-2xl border border-neutral-300 px-5 py-4 outline-none focus:border-black"
          />

          <button
            type="submit"
            className="w-full rounded-full bg-black text-white py-4 font-medium"
          >
            Join Waitlist
          </button>

        </form>
      </div>
    </section>
  );
}