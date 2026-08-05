import Image from "next/image";

type LearningIllustrationProps = {
  image: string;
  title: string;
  caption: string;
};

export default function LearningIllustration({
  image,
  title,
  caption,
}: LearningIllustrationProps) {
  return (
    <section className="my-12">

      <div className="overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-50">

        <div className="relative aspect-[16/9] w-full">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-8"
            priority
          />

        </div>

      </div>

      <div className="mt-6 text-center">

        <h3 className="text-xl font-semibold text-black">
          {title}
        </h3>

        <p className="mx-auto mt-3 max-w-2xl text-neutral-600 leading-8">
          {caption}
        </p>

      </div>

    </section>
  );
}
