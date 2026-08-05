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
    <section className="overflow-hidden rounded-lg border border-panel-line bg-panel">
      <div className="p-10 md:p-14">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-ember">
          Latest updates
        </p>

        <h2 className="mt-6 text-4xl font-semibold leading-tight text-chalk">
          Stay informed
        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-fog">
          Development updates, Academy lessons and launch announcements will
          appear here as they become available.
        </p>

        <div className="mt-10 space-y-5">
          {loading && (
            <div className="rounded-md border border-panel-line bg-deck/50 p-8">
              <p className="text-fog">Loading updates...</p>
            </div>
          )}

          {!loading && announcements.length === 0 && (
            <div className="rounded-md border border-panel-line bg-deck/50 p-8">
              <p className="text-2xl font-semibold text-chalk">
                No new updates today
              </p>

              <p className="mt-4 leading-8 text-fog">
                We are actively building Take Profit. Check back regularly
                for product updates, Academy lessons and important
                announcements.
              </p>
            </div>
          )}

          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className="rounded-md border border-panel-line bg-deck/50 p-8"
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-ember">
                Academy update
              </p>

              <h3 className="mt-4 text-2xl font-semibold text-chalk">
                {announcement.title}
              </h3>

              <p className="mt-4 leading-8 text-fog">{announcement.body}</p>

              <p className="mt-6 font-mono text-xs text-fog">
                {new Date(announcement.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}