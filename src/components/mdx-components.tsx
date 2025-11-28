import React from "react";
import { type MDXComponents as MDXComponentsType } from "mdx/types";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "./code-block";
import Image from "next/image";

// Custom Alert component
function Alert({
  children,
  type = "info",
}: {
  children: React.ReactNode;
  type?: "info" | "warning" | "error" | "success";
}) {
  const typeStyles = {
    info: "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
    warning:
      "border-yellow-200 bg-yellow-50 text-yellow-800 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
    error:
      "border-red-200 bg-red-50 text-red-800 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
    success:
      "border-green-200 bg-green-50 text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-200",
  };

  return (
    <div className={`border rounded-lg p-4 my-4 ${typeStyles[type]}`}>
      {children}
    </div>
  );
}

// Custom Callout component
function Callout({
  children,
  emoji = "💡",
}: {
  children: React.ReactNode;
  emoji?: string;
}) {
  return (
    <Card className="my-6 border-l-4 border-l-blue-500">
      <CardContent className="pt-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl">{emoji}</span>
          <div className="flex-1">{children}</div>
        </div>
      </CardContent>
    </Card>
  );
}

// Enhanced Image component for MDX
function MDXImage({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={props.width || 800}
      height={props.height || 600}
      className="w-full h-auto my-8 rounded-lg shadow-sm"
      {...props}
    />
  );
}

export const MDXComponents: MDXComponentsType = {
  // Custom components
  Alert,
  Callout,
  CodeBlock,
  Image: MDXImage,

  // Override default HTML elements
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mb-6 mt-8 scroll-m-20">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold mb-4 mt-8 scroll-m-20">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-bold mb-3 mt-6 scroll-m-20">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-bold mb-2 mt-4 scroll-m-20">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-base font-bold mb-2 mt-4 scroll-m-20">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-sm font-bold mb-2 mt-4 scroll-m-20">{children}</h6>
  ),
  p: ({ children }) => <p className="mb-4 leading-7 text-base">{children}</p>,
  ul: ({ children }) => (
    <ul className="mb-6 ml-6 list-disc space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-6 ml-6 list-decimal space-y-2">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-7">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/20 pl-6 italic my-6 text-muted-foreground bg-muted/30 py-4 rounded-r-lg">
      {children}
    </blockquote>
  ),
  code: ({ children, className }) => {
    // If this code element is inside a pre (code block), don't render inline styling
    const isInlineCode = !className || !className.includes("language-");

    if (isInlineCode) {
      return (
        <code className="bg-muted px-2 py-1 rounded-md text-sm font-mono text-primary">
          {children}
        </code>
      );
    }

    // For code blocks, return the children as-is (will be handled by pre)
    return <>{children}</>;
  },
  pre: ({ children }: { children: React.ReactNode; className?: string }) => {
    // Extract the code element and its props
    const codeElement = React.Children.toArray(
      children,
    )[0] as React.ReactElement;

    if (
      codeElement &&
      codeElement.props &&
      typeof codeElement.props === "object"
    ) {
      const codeProps = codeElement.props as {
        className?: string;
        children?: React.ReactNode;
      };
      const { className = "", children: codeContent } = codeProps;
      const languageMatch = className.match(/language-(\w+)/);
      const language = languageMatch ? languageMatch[1] : "text";

      // Extract the actual code content
      const code =
        typeof codeContent === "string"
          ? codeContent
          : Array.isArray(codeContent)
            ? codeContent.join("")
            : String(codeContent || "");

      return <CodeBlock language={language}>{code.trim()}</CodeBlock>;
    }

    // Fallback for non-code pre blocks
    return (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
        {children}
      </pre>
    );
  },
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-primary hover:underline font-medium transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  img: ({ src, alt, ...props }) => (
    <MDXImage src={src!} alt={alt!} {...props} />
  ),
  hr: () => <hr className="my-8 border-border" />,
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse border border-border">
        {children}
      </table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-border px-4 py-2 bg-muted/50 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-border px-4 py-2">{children}</td>
  ),
};
