import { HoverBox } from "../../Buttons/Buttons";
import styles from "./CodeBlock.module.scss"
import React, { useRef } from "react";

interface Props {
  children: React.ReactNode;
}

export const CodeBlock: React.FC<Props> = ({ children }) => {
  const divRef = useRef<HTMLDivElement>(null); // A reference to target the div

  const handleCopy = () => {
    if (divRef.current) {
      const textToCopy = divRef.current.innerText; // Get inner text of the div
      navigator.clipboard.writeText(textToCopy) // Use Clipboard API to copy text
        .then(() => {
          console.log("Text copied to clipboard: " + textToCopy); // Show success message (optional)
        })
        .catch((err) => {
          console.error("Could not copy text: ", err); // Handle any errors
        });
    }
  };

  return (
    <pre className={styles["code-block"]}>
      <div className={styles["copy-btn"]} onClick={handleCopy}>Copy Code
        <HoverBox mode={"onLight"} />
      </div>
      <div ref={divRef} className={styles["code-block-content"]}>
        {children}
      </div>
    </pre>
  );
};
