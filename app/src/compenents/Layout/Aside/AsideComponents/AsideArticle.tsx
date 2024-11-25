import React from "react";
import { PageContent, PageElement } from "../../../../pages/_types/PageTypes";
import styles from "./AsideArticle.module.scss";
import Markdown from "react-markdown";
import { FontSize } from "../../../../appStyles/font";

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
                  <Markdown>
                    {item}
                  </Markdown>
                </>
              ) : item}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
