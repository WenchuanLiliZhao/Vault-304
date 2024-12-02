import styles from "./ContentMapper.module.scss"

import React from "react";
import { Page, PageElement } from "../../../pages/_types/PageShapes";
import { MDBlock } from "../MDBlock";

interface PostBodyProps {
  page: Page;
}

export const ContentMapper: React.FC<PostBodyProps> = ({ page }) => {
  return (
    <article className={`${styles["post-content"]}`}>
      {page.content.map((item: PageElement, i: number) => (
        <React.Fragment key={i}>
          {typeof item === "string" && <MDBlock>{item}</MDBlock>}
          {typeof item === "object" && item}
        </React.Fragment>
      ))}
    </article>
  );
};
