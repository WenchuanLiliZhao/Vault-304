import styles from "./MDBlock.module.scss";
import "./MDBlock.scss";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css"; // Hardcoded theme

interface Props {
  children: string;
  className?: string;
}

export const MDBlock: React.FC<Props> = ({ children, className }) => {
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      console.log("Code copied to clipboard!");
    });
  };

  return (
    <ReactMarkdown
      className={className}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex, rehypeHighlight]}
      components={{
        pre: ({ children }) => {
          // Note: Extracting the code block from the pre area
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const code = (children as any)?.toString() || "";

          return (
            <div className={styles["codeblock-container"]}>
              <div className={styles["codeblock-header"]} style={{display: "none"}}>
                <div
                  onClick={() => copyToClipboard(code)}
                  className={styles["copy-button"]}
                >
                  Copy
                </div>
              </div>
              <div className={styles["codeblock"]}>
                <pre className={styles["pre"]}>{children}</pre>
              </div>
            </div>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
