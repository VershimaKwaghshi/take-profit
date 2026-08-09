"use client";

import { useUser } from "../UserProvider";

export default function ProfilePage() {
  const { user, loading } = useUser();

  if (loading) {
    return <p className="text-fog">Loading...</p>;
  }

  const fields = [
    { label: "First name", value: user?.first_name },
    { label: "Last name", value: user?.last_name },
    { label: "Email", value: user?.email },
    { label: "Referrals", value: user?.referral_count ?? 0, mono: true },
  ];

  return (
    <div className="rounded-lg border border-panel-line bg-panel p-8 md:p-10">
      <h1 className="text-3xl font-semibold text-chalk">Profile</h1>

      <div className="mt-8 divide-y divide-panel-line">
        {fields.map((field) => (
          <div key={field.label} className="py-5">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-fog">
              {field.label}
            </p>
            <p
              className={`mt-2 text-xl font-medium text-chalk ${
                field.mono ? "font-mono tabular-nums" : ""
              }`}
            >
              {field.value ?? "-"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}