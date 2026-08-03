"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleSignOut() {
    setLoggingOut(true);
    try {
      await fetch("/api/logout", { method: "POST" });
    } catch {
      // Continue navigation even if API fails
    } finally {
      router.push("/login");
      router.refresh();
    }
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold text-black">Settings</h1>
        <p className="mt-2 text-neutral-600">Manage your account preferences.</p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-black">Account Actions</h2>
        <p className="mt-2 text-sm text-neutral-500">
          Sign out of your active Take Profit session on this device.
        </p>
        <div className="mt-6">
          <button
            onClick={handleSignOut}
            disabled={loggingOut}
            className="rounded-2xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {loggingOut ? "Signing Out..." : "Sign Out"}
          </button>
        </div>
      </div>
    </div>
  );
}
