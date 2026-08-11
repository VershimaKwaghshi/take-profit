"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Loader2 } from "lucide-react";

function RatingStars({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-black/50">
        {label}
      </p>

      <div className="mt-3 flex gap-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            aria-label={`${label}: ${star} out of 5`}
            className="p-1"
          >
            <Star
              size={28}
              className={
                star <= value
                  ? "fill-[#071A52] text-[#071A52]"
                  : "text-black/20"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function LessonFeedbackForm({
  lessonId,
}: {
  lessonId: string;
}) {
  const router = useRouter();

  const [clarityRating, setClarityRating] = useState(0);
  const [usefulnessRating, setUsefulnessRating] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit =
    clarityRating > 0 && usefulnessRating > 0 && !submitting;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!canSubmit) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/learning/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lessonId,
          clarityRating,
          usefulnessRating,
          comment,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit feedback.");
      }

      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong."
      );
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t-4 border-[#071A52] bg-white p-7 md:p-10"
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-[#D94A3D]">
        Before you continue
      </p>

      <h2 className="mt-4 text-2xl font-semibold text-[#071A52] md:text-3xl">
        Tell us what you thought
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-8 text-black/60">
        Submitting this feedback marks the lesson complete and starts the
        24-hour countdown until the next lesson unlocks.
      </p>

      <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:gap-14">
        <RatingStars
          label="How clear was this lesson"
          value={clarityRating}
          onChange={setClarityRating}
        />

        <RatingStars
          label="How useful was this lesson"
          value={usefulnessRating}
          onChange={setUsefulnessRating}
        />
      </div>

      <div className="mt-8">
        <label
          htmlFor="comment"
          className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-black/50"
        >
          Comments (optional)
        </label>

        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="Anything unclear, or anything you'd like explained further?"
          className="mt-3 w-full resize-none border border-black/15 bg-[#F7F7F4] p-4 text-base leading-7 text-black outline-none focus:border-[#071A52]"
        />
      </div>

      {error && (
        <p className="mt-5 text-sm font-semibold text-[#D94A3D]">{error}</p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-8 inline-flex items-center gap-2 bg-[#071A52] px-7 py-4 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
      >
        {submitting && <Loader2 size={18} className="animate-spin" />}
        {submitting ? "Submitting..." : "Submit and complete lesson"}
      </button>
    </form>
  );
}
