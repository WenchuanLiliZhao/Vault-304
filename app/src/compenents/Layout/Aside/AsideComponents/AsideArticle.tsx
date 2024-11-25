import React from "react";
import { PageContent, PageElement } from "../../../../pages/_types/PageShapes";
import styles from "./AsideArticle.module.scss";
import { FontSize } from "../../../../appStyles/font";
import { MDBlock } from "../../../Functions/Markdown";

interface AsideArticleProps {
  title: string;
  content: PageContent;
}

export const AsideInfoBox: React.FC<AsideArticleProps> = ({ title, content }) => {
  return (
    <>
      <div className={`${styles["aside-info-box"]} ${FontSize.smallest}`}>
        <div className={styles["title"]}>
          {title}
        </div>
        <div className={styles["body"]}>
          {content.map((item: PageElement, i: number) => (
            <React.Fragment key={`${item}${i}`}>
              {typeof item === "string" ? (
                <>
                  <MDBlock>
                    {item}
                  </MDBlock>
                </>
              ) : item}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
