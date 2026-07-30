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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnnouncements() {
      try {
        const response = await fetch("/api/announcements");
        const data = await response.json();

        setAnnouncements(data);
      } catch {
        setAnnouncements([]);
      } finally {
        setLoading(false);
      }
    }

    loadAnnouncements();
  }, []);

  return (
    <section className="overflow-hidden rounded-[40px] bg-[#8F2018] shadow-xl">

      <div className="p-10 md:p-14">

        <p className="text-sm font-semibold uppercase tracking-[0.45em] text-red-100">
          Latest Updates
        </p>

        <h2 className="mt-6 text-5xl font-bold leading-tight text-white">
          Stay informed
        </h2>

        <p className="mt-8 max-w-2xl text-xl leading-10 text-red-100">
          Development updates, Academy lessons and launch announcements
          will appear here as they become available.
        </p>

        <div className="mt-12 space-y-6">

          {loading && (

            <div className="rounded-[30px] bg-white p-8">
              <p className="text-neutral-500">
                Loading updates...
              </p>
            </div>

          )}

          {!loading && announcements.length === 0 && (

            <div className="rounded-[30px] bg-white p-8">

              <p className="text-3xl font-bold text-black">
                No new updates today
              </p>

              <p className="mt-6 text-lg leading-9 text-neutral-600">
                We are actively building Take Profit.
                Check back regularly for product updates,
                Academy lessons and important announcements.
              </p>

            </div>

          )}

          {announcements.map((announcement) => (

            <div
              key={announcement.id}
              className="rounded-[30px] bg-white p-8"
            >

              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-700">
                Academy Update
              </p>

              <h3 className="mt-4 text-3xl font-bold text-black">
                {announcement.title}
              </h3>

              <p className="mt-6 text-lg leading-9 text-neutral-700">
                {announcement.body}
              </p>

              <p className="mt-8 text-sm text-neutral-500">
                {new Date(
                  announcement.created_at
                ).toLocaleDateString()}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}