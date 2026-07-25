"use client";

import { useState } from "react";

export default function AnnouncementsPage() {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  async function publish() {

    setSaving(true);
    setMessage("");

    const response = await fetch("/api/admin/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setMessage(result.error);
    } else {
      setMessage("Announcement published.");
      setTitle("");
      setBody("");
    }

    setSaving(false);
  }

  return (

    <main className="min-h-screen bg-neutral-100">

      <div className="mx-auto max-w-5xl p-10">

        <div className="rounded-[36px] bg-white p-10 shadow">

          <h1 className="text-4xl font-semibold">

            New Announcement

          </h1>

          <input
            className="mt-8 w-full rounded-2xl border border-neutral-300 p-5"
            placeholder="Announcement title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="mt-6 h-64 w-full rounded-2xl border border-neutral-300 p-5"
            placeholder="Write announcement..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <button
            onClick={publish}
            disabled={saving}
            className="mt-8 rounded-full bg-black px-8 py-4 text-white"
          >
            {saving ? "Publishing..." : "Publish"}
          </button>

          <p className="mt-6">

            {message}

          </p>

        </div>

      </div>

    </main>

  );

}
