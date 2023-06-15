import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownViewer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      className="prose dark:prose-invert prose-stone lg:prose-xl mx-auto pt-16"
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownViewer;
