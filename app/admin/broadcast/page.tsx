"use client";

import { useState } from "react";

export default function BroadcastPage() {

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [audience, setAudience] = useState("all");

  return (

    <main className="p-10">

      <h1 className="text-5xl font-semibold">
        Broadcast Center
      </h1>

      <p className="mt-3 text-neutral-500">
        Send platform updates to your users.
      </p>

      <div className="mt-10 rounded-[32px] bg-white p-10 shadow">

        <label className="text-lg font-medium">
          Audience
        </label>

        <select
          value={audience}
          onChange={(e) => setAudience(e.target.value)}
          className="mt-3 w-full rounded-2xl border border-neutral-300 p-4"
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

        <label className="mt-8 block text-lg font-medium">
          Subject
        </label>

        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-3 w-full rounded-2xl border border-neutral-300 p-4"
          placeholder="Email subject"
        />

        <label className="mt-8 block text-lg font-medium">
          Message
        </label>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-3 h-72 w-full rounded-2xl border border-neutral-300 p-4"
          placeholder="Write your announcement..."
        />

        <button
          className="mt-8 rounded-full bg-black px-8 py-4 text-white"
        >
          Send Broadcast
        </button>

      </div>

    </main>

  );

}
