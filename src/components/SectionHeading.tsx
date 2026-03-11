"use client";

interface SectionHeadingProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <span className="uppercase tracking-widest text-sm text-accent font-semibold mb-3 block">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
      {description && (
        <p
          className={`text-text-muted text-lg max-w-2xl ${center ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
