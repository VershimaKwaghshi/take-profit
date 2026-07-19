"use client";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between">

      <div>

        <h1 className="text-4xl font-semibold tracking-tight">
          Welcome back
        </h1>

        <p className="mt-2 text-neutral-500 text-lg">
          Manage your referrals from one place.
        </p>

      </div>

      <div className="flex items-center gap-4">

        <button className="rounded-full border border-neutral-300 bg-white px-6 py-3 transition hover:bg-neutral-100">

          Notifications

        </button>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-lg font-semibold text-white">

          V

        </div>

      </div>

    </header>
  );
}
