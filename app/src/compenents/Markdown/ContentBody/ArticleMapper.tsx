import styles from "./ArticleMapper.module.scss"

import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { MDBlock } from "../MDBlock";

export const ArticleMapper: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <article className={`${styles["post-content"]}`}>
      {page.content.map((item, i: number) => (
        <React.Fragment key={i}>
          {typeof item === "string" && <MDBlock>{item}</MDBlock>}
          {typeof item === "object" && item}
        </React.Fragment>
      ))}
    </article>
  );
};
