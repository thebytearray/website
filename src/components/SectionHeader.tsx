interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  gradient?: boolean;
}

export function SectionHeader({
  label,
  title,
  description,
  className = "mb-12",
  gradient,
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="inline-flex items-center gap-3 mb-4">
        <span className="h-px w-6 bg-foreground/20" />
        <span className="text-[11px] font-mono text-foreground/40 uppercase tracking-[0.25em] font-medium">
          {label}
        </span>
        <span className="h-px w-6 bg-foreground/20" />
      </div>
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-display text-foreground tracking-tight leading-[1.1] ${
          gradient ? "gradient-text" : ""
        }`}
      >
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
