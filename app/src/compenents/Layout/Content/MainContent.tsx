import styles from "./MainContent.module.scss"
import React from "react";
import { Page, PageElement } from "../../../pages/_types/PageShapes";
import { MainView } from "../Grid/GridViews";
import { MDBlock } from "../../Functions/Markdown";
import { PageType } from "../../../pages/_types/PageType";

interface MainContentProps {
  page: Page;
  type: PageType;
}

export const MainContent: React.FC<MainContentProps> = ({ page, type }) => {
  const Content = () => {
    switch (type) {
      case "channel":
        return (
          <>
            {page.content.map((item: PageElement, i: number) => (
              <React.Fragment key={i}>
                {item}
              </React.Fragment>
            ))}
          </>
        );
      case "post":
        return (
          <article className={styles["post-content"]}>
            {page.content.map((item: PageElement, i: number) => (
              <React.Fragment key={i}>
                {typeof item === "string" && <MDBlock>{item}</MDBlock>}
                {typeof item === "object" && item}
              </React.Fragment>
            ))}
          </article>
        );
      case "book cover":
        return [];
      default:
        return null;
    }
  };

  return (
    <MainView>
      <Content />
    </MainView>
  );
};
