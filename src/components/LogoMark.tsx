interface LogoMarkProps {
  className?: string;
}

/** Code-style empty array mark for The Byte Array */
export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span
      className={`font-mono font-semibold tracking-tight text-foreground ${className ?? ""}`}
    >
      byte<span className="text-foreground/45">[]</span>
    </span>
  );
}
