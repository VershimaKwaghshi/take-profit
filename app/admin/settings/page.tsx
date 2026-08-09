"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [launchMode, setLaunchMode] = useState(false);
  const [registrations, setRegistrations] = useState(true);
  const [maintenance, setMaintenance] = useState(false);

  return (
    <main className="p-10">

      <h1 className="text-5xl font-semibold">
        Platform Settings
      </h1>

      <p className="mt-3 text-neutral-500">
        Control Take Profit without changing code.
      </p>

      <div className="mt-10 space-y-8">

        <div className="rounded-[30px] bg-white p-8 shadow">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-semibold">
                Launch Platform
              </h2>

              <p className="mt-2 text-neutral-500">
                Open Take Profit to everyone.
              </p>

            </div>

            <input
              type="checkbox"
              checked={launchMode}
              onChange={(e) =>
                setLaunchMode(e.target.checked)
              }
              className="h-6 w-6"
            />

          </div>

        </div>

        <div className="rounded-[30px] bg-white p-8 shadow">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-semibold">
                Accept Registrations
              </h2>

              <p className="mt-2 text-neutral-500">
                Allow new users to join.
              </p>

            </div>

            <input
              type="checkbox"
              checked={registrations}
              onChange={(e) =>
                setRegistrations(e.target.checked)
              }
              className="h-6 w-6"
            />

          </div>

        </div>

        <div className="rounded-[30px] bg-white p-8 shadow">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-semibold">
                Maintenance Mode
              </h2>

              <p className="mt-2 text-neutral-500">
                Lock the platform for maintenance.
              </p>

            </div>

            <input
              type="checkbox"
              checked={maintenance}
              onChange={(e) =>
                setMaintenance(e.target.checked)
              }
              className="h-6 w-6"
            />

          </div>

        </div>

        <button className="rounded-full bg-black px-8 py-4 text-white">
          Save Settings
        </button>

      </div>

    </main>
  );
}
