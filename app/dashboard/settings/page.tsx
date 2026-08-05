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
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-chalk">Settings</h1>
        <p className="mt-2 text-fog">Manage your account preferences.</p>
      </div>

      <div className="rounded-lg border border-panel-line bg-panel p-8">
        <h2 className="text-xl font-semibold text-chalk">Account actions</h2>
        <p className="mt-2 text-sm text-fog">
          Sign out of your active Take Profit session on this device.
        </p>
        <div className="mt-6">
          <button
            onClick={handleSignOut}
            disabled={loggingOut}
            className="rounded-full bg-ember px-6 py-3 font-semibold text-chalk transition hover:bg-oxblood-dark disabled:opacity-50"
          >
            {loggingOut ? "Signing out..." : "Sign out"}
          </button>
        </div>
      </div>
    </div>
  );
}