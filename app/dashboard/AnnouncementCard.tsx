"use client";

import { useEffect, useState } from "react";

type Announcement = {
  id: string;
  title: string;
  body: string;
  created_at: string;
};

export default function AnnouncementCard() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    async function loadAnnouncements() {
      const response = await fetch("/api/announcements");
      const data = await response.json();

      setAnnouncements(data);
    }

    loadAnnouncements();
  }, []);

  return (
    <section className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">

      <h2 className="text-3xl font-semibold">
        Announcements
      </h2>

      <div className="mt-8 space-y-6">

        {announcements.length === 0 && (
          <p className="text-neutral-500">
            No announcements yet.
          </p>
        )}

        {announcements.map((announcement) => (

          <div
            key={announcement.id}
            className="rounded-2xl bg-neutral-100 p-6"
          >

            <h3 className="text-xl font-semibold">
              {announcement.title}
            </h3>

            <p className="mt-3 text-neutral-700 leading-7">
              {announcement.body}
            </p>

            <p className="mt-5 text-sm text-neutral-500">
              {new Date(
                announcement.created_at
              ).toLocaleString()}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
