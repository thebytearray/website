interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "mb-12",
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.25em] mb-3 font-medium">
        {label}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display text-foreground tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-foreground/55 mt-4 mx-auto text-base sm:text-lg leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
