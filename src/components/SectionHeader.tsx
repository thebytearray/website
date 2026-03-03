interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  /** Max width class for description, e.g. "max-w-xl" or "max-w-md" */
  descriptionMaxWidth?: string;
  /** Override bottom margin, e.g. "mb-12" or "mb-14" */
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  descriptionMaxWidth = "max-w-xl",
  className = "mb-16",
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">
        {label}
      </p>
      <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground">
        {title}
      </h2>
      {description && (
        <p
          className={`text-default-500 mt-4 mx-auto text-base leading-relaxed ${descriptionMaxWidth}`}
        >
          {description}
        </p>
      )}
      <div className="w-16 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mt-6 rounded-full" />
    </div>
  );
}
