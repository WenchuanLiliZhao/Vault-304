import styles from "./PageHeader.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { FontSize } from "../../../appStyles/font";
import { MDBlock } from "../../Functions/Markdown";
import { MainGridView, SecInMainGridView, MainView } from "../Grid/GridViews";
import { PageType } from "../../../pages/_types/PageType";

interface PageContentProps {
  page: Page;
  type: PageType
}

export const PageHeader: React.FC<PageContentProps> = ({ page, type }) => {
  const Content = {
    title: (
      <>
        <h1 className={`${styles["page-title"]} ${FontSize.largest}`}>
          {page.info.title}
        </h1>
      </>
    ),

    summary: (
      <>
        {page.info.summary && (
          <div className={`${styles["page-summary"]} ${FontSize.medium}`}>
            <MDBlock>{page.info.summary}</MDBlock>
          </div>
        )}
      </>
    ),
  };

  const ContentByCase = () => {
    switch (type) {
      case "post":
        return <></>;

      case "book cover":
        return <></>;

      default:
        return (
          <>
            {Content.title}
            {Content.summary}
          </>
        );
    }
  };

  return (
    <header className={styles["page-header"]}>
      <MainView>
        <MainGridView>
          <SecInMainGridView className={styles["head-content"]} initSpan={8}>
            <ContentByCase />
          </SecInMainGridView>
        </MainGridView>
      </MainView>
    </header>
  );
};
