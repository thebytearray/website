'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCardProps } from "@/types/project";
import { cn } from "@/lib/utils";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isExpanded,
  onToggleExpand,
}) => {
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${project.title} Inquiry`);
    window.location.href = `mailto:work@thebytearray.org?subject=${subject}`;
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <div className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              !isExpanded && "max-h-12"
            )}>
              <p className="text-sm text-muted-foreground">
                {project.longDescription}
              </p>
            </div>
            <button
              onClick={onToggleExpand}
              className="text-sm text-primary hover:text-primary/80 transition-all duration-200 mt-2 flex items-center gap-1"
            >
              {isExpanded ? 'Show Less' : 'See More'}
              <svg 
                className={cn(
                  "h-3 w-3 transition-transform duration-200",
                  isExpanded && "rotate-180"
                )}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-2 flex gap-2 flex-wrap">
            <button 
              onClick={handleContactClick}
              className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
            >
              Contact for Details
            </button>
            {project.appStoreUrl && (
              <a 
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm"
              >
                View on App Store
              </a>
            )}
            {project.playStoreUrl && (
              <a 
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm"
              >
                View on Google Play
              </a>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 