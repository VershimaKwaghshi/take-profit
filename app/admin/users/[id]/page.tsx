"use client";

import { useEffect, useState } from "react";

export default function UserProfile({
  params,
}: {
  params: {
    id: string;
  };
}) {

  const [user, setUser] = useState<any>(null);

  useEffect(() => {

    async function loadUser() {

      const response = await fetch(
        `/api/admin/users/${params.id}`
      );

      const data = await response.json();

      setUser(data);

    }

    loadUser();

  }, [params.id]);

  if (!user) {

    return (
      <main className="p-10">
        Loading...
      </main>
    );

  }

  return (

    <main className="p-10">

      <h1 className="text-5xl font-semibold">

        {user.first_name} {user.last_name}

      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-[30px] bg-white p-8 shadow">

          <h3 className="text-lg font-semibold">

            Email

          </h3>

          <p className="mt-4">
            {user.email}
          </p>

        </div>

        <div className="rounded-[30px] bg-white p-8 shadow">

          <h3 className="text-lg font-semibold">

            Country

          </h3>

          <p className="mt-4">
            {user.country}
          </p>

        </div>

        <div className="rounded-[30px] bg-white p-8 shadow">

          <h3 className="text-lg font-semibold">

            Referrals

          </h3>

          <p className="mt-4 text-4xl font-semibold">

            {user.referral_count}

          </p>

        </div>

        <div className="rounded-[30px] bg-white p-8 shadow">

          <h3 className="text-lg font-semibold">

            Status

          </h3>

          <p className="mt-4">

            {user.email_verified
              ? "Verified"
              : "Pending"}

          </p>

        </div>

      </div>

    </main>

  );

}