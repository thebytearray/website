interface LogoMarkProps {
  className?: string;
}

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <span className={`font-mono font-semibold tracking-tight text-foreground ${className ?? ""}`}>
      byte<span className="text-foreground/45">[]</span>
    </span>
  );
}
