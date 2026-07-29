import React from "react";

export function MDXContent({
  content: Content,
}: {
  content: React.ComponentType;
}) {
  return (
    <div className="prose-custom max-w-none">
      <Content />
    </div>
  );
}
