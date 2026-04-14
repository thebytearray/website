import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

function Heading({
  level,
  children,
}: {
  level: 1 | 2 | 3 | 4;
  children?: any;
}) {
  const baseClasses = "font-bold tracking-tight";
  const classes =
    level === 1
      ? "text-4xl"
      : level === 2
        ? "text-3xl"
        : level === 3
          ? "text-2xl"
          : "text-xl";
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={`${baseClasses} ${classes} dark:text-zinc-100 text-zinc-900`}
    >
      {children}
    </Tag>
  );
}

function Paragraph({ children, ...props }: any) {
  return (
    <p
      className="leading-relaxed dark:text-zinc-300 text-zinc-700 [&:not(:last-child)]:mb-4"
      {...props}
    >
      {children}
    </p>
  );
}

function Anchor({ children, href, ...props }: any) {
  return (
    <a className="text-primary hover:underline" href={href} {...props}>
      {children}
    </a>
  );
}

function Code({ children, ...props }: any) {
  return (
    <code
      className="bg-zinc-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono dark:text-zinc-200 text-zinc-800"
      {...props}
    >
      {children}
    </code>
  );
}

function Pre({ children, ...props }: any) {
  return (
    <pre
      className="bg-zinc-200 dark:bg-zinc-800 p-4 rounded-lg overflow-x-auto my-4 font-mono text-sm dark:text-zinc-200 text-zinc-800"
      {...props}
    >
      {children}
    </pre>
  );
}

function Blockquote({ children, ...props }: any) {
  return (
    <blockquote
      className="border-l-4 border-primary pl-4 italic my-4 dark:text-zinc-400 text-zinc-600"
      {...props}
    >
      {children}
    </blockquote>
  );
}

function UnorderedList({ children, ...props }: any) {
  return (
    <ul
      className="list-disc pl-6 my-4 space-y-2 dark:text-zinc-300 text-zinc-700"
      {...props}
    >
      {children}
    </ul>
  );
}

function OrderedList({ children, ...props }: any) {
  return (
    <ol
      className="list-decimal pl-6 my-4 space-y-2 dark:text-zinc-300 text-zinc-700"
      {...props}
    >
      {children}
    </ol>
  );
}

function Image({ src, alt, ...props }: any) {
  return (
    <img
      alt={alt}
      className="rounded-lg my-4 max-w-full"
      src={src}
      {...props}
    />
  );
}

function Table({ children, ...props }: any) {
  return (
    <div className="overflow-x-auto my-6 not-prose">
      <table
        className="w-full text-sm border-collapse border border-zinc-300 dark:border-zinc-600 rounded-lg overflow-hidden"
        {...props}
      >
        {children}
      </table>
    </div>
  );
}

function Th({ children, ...props }: any) {
  return (
    <th
      className="border-b border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-800 px-4 py-3 text-left font-semibold text-zinc-900 dark:text-zinc-100"
      {...props}
    >
      {children}
    </th>
  );
}

function Td({ children, ...props }: any) {
  return (
    <td
      className="border-b border-zinc-200 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300"
      {...props}
    >
      {children}
    </td>
  );
}

export const mdxComponents = {
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  h4: (props: any) => <Heading level={4} {...props} />,
  p: Paragraph,
  a: Anchor,
  code: Code,
  pre: Pre,
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  img: Image,
  hr: Divider,
  table: Table,
  thead: (props: any) => <thead {...props} />,
  tbody: (props: any) => <tbody {...props} />,
  tr: (props: any) => <tr {...props} />,
  th: Th,
  td: Td,
};

export function MDXContent({ content: Content }: { content: any }) {
  return (
    <Card className="dark:bg-zinc-900/50 bg-zinc-50/50">
      <CardBody className="prose dark:prose-invert max-w-none p-6">
        <Content components={mdxComponents} />
      </CardBody>
    </Card>
  );
}
