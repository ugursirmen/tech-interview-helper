"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MermaidDiagram from "./MermaidDiagram";
import type { Components } from "react-markdown";
import React from "react";

const components: Components = {
  pre({ children }) {
    // If the only child is a mermaid code block, skip the <pre> wrapper
    const child = React.Children.only(children) as React.ReactElement<{ className?: string; children?: React.ReactNode }> | null;
    if (child && child.props?.className?.includes("language-mermaid")) {
      const code = String(child.props.children ?? "").replace(/\n$/, "");
      return <MermaidDiagram chart={code} />;
    }
    return <pre>{children}</pre>;
  },
  code({ className, children, ...props }) {
    // Inline or non-mermaid code blocks
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  );
}
