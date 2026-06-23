type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-16 text-center">
      {eyebrow && (
        <p className="mb-3 uppercase tracking-[0.35em] text-[#C9A56A] text-sm">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-semibold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}