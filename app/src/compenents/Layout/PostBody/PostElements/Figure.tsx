import styles from "./Figure.module.scss"
import React from "react";
import { MDBlock } from "../../../Markdown/MDBlock";

interface FigureProps {
  art: React.ReactNode;
  size?: "large"
  caption?: string;
}

export const Figure: React.FC<FigureProps> = ({ art, caption, size }) => {
  const sizeOption = size ? size : "default"

  return (
    <figure className={`${styles["figure"]} ${styles[sizeOption]}`}>
      <div>{art}</div>
      {caption && (
        <figcaption className={styles["caption"]}>
          <MDBlock>{caption}</MDBlock>
        </figcaption>
      )}
    </figure>
  );
};
