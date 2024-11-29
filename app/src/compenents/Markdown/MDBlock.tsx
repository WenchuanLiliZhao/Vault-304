import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
// import 'highlight.js/styles/github.css'; // Use a highlight.js theme of your choice
import 'highlight.js/styles/github.css'; // Hardcoded theme
import { CodeBlock } from './MDComponents/CodeBlock';

interface Props {
  children: string;
  className?: string;
}

export const MDBlock: React.FC<Props> = ({ children, className }) => {
  return (
    <ReactMarkdown
      className={className}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex, rehypeHighlight]}
      components={{
        pre: ({children}) => <CodeBlock>{children}</CodeBlock>
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
