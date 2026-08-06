interface Props {
  slug: string;
}

export default function LessonContent({
  slug,
}: Props) {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">

      {/* SVG Illustration */}

      <img
        src={`/learning/${slug}.svg`}
        alt={slug}
        className="mb-10 w-full rounded-xl border"
      />

      {/* Markdown renders here */}

      <div>

        Markdown Lesson Content

      </div>

    </article>
  );
}
