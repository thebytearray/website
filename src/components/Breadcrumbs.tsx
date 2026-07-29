import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center gap-1.5 text-xs text-foreground/45 font-mono">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className="text-foreground/20">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  className="hover:text-foreground/70 transition-colors"
                  to={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground/70" : ""}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
