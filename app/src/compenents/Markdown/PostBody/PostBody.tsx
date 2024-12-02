import styles from "./PostBody.module.scss"

import React from "react";
import { Page, PageElement } from "../../../pages/_types/PageShapes";
import { MDBlock } from "../../Markdown/MDBlock";

interface PostBodyProps {
  page: Page;
}

export const PostBody: React.FC<PostBodyProps> = ({ page }) => {
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
