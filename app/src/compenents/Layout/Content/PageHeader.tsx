import styles from "./PageHeader.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { FontSize } from "../../../appStyles/font";
import { MDBlock } from "../../Functions/Markdown";
import { MainGridView, SecInMainGridView, MainView } from "../Grid/GridViews";

interface PageContentProps {
  page: Page;
}

export const PageHeader: React.FC<PageContentProps> = ({ page }) => {
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
    const { pageType } = page.info;

    switch (pageType) {
      case "post":
        return <></>;

      case "collection":
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
