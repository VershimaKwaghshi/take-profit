"use client";

import { useState } from "react";

export default function BroadcastPage() {

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState("all");
  const [sending, setSending] = useState(false);

  async function sendBroadcast() {

    if (!subject || !message) {
      alert("Fill every field.");
      return;
    }

    setSending(true);

    const response = await fetch(
      "/api/admin/broadcast",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          audience,
          subject,
          message,
        }),
      }
    );

    const result = await response.json();

    setSending(false);

    if (!response.ok) {
      alert(result.error);
      return;
    }

    alert(`Broadcast sent to ${result.sent} users.`);

    setSubject("");
    setMessage("");

  }

  return (

    <main className="p-10">

      <h1 className="text-5xl font-semibold">
        Broadcast Center
      </h1>

      <p className="mt-3 text-neutral-500">
        Send announcements to everyone.
      </p>

      <div className="mt-10 rounded-[30px] bg-white p-10 shadow">

        <label className="font-medium">
          Audience
        </label>

        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="mt-3 w-full rounded-2xl border p-4"
        >

          <option value="all">
            Everyone
          </option>

          <option value="verified">
            Verified Users
          </option>

          <option value="unverified">
            Unverified Users
          </option>

        </select>

        <label className="mt-8 block font-medium">
          Subject
        </label>

        <input
          className="mt-3 w-full rounded-2xl border p-4"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label className="mt-8 block font-medium">
          Message
        </label>

        <textarea
          className="mt-3 h-80 w-full rounded-2xl border p-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          onClick={sendBroadcast}
          disabled={sending}
          className="mt-8 rounded-full bg-black px-8 py-4 text-white disabled:opacity-50"
        >
          {sending
            ? "Sending..."
            : "Send Broadcast"}
        </button>

      </div>

    </main>

  );

}