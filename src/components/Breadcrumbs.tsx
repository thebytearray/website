import { Link } from "@heroui/link";

import { ChevronRightIcon } from "@/components/icons";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1.5 text-xs font-mono">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRightIcon className="text-foreground/30" size={12} />
            )}
            {item.href ? (
              <Link
                className="text-foreground/55 hover:text-foreground transition-colors"
                href={item.href}
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/35">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
