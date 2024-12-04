import styles from "./PageHeader.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { FontSizes } from "../../../appStyles/font";
import { MDBlock } from "../../Markdown/MDBlock";
import { MainGridView, SecInMainGridView, MainView } from "../Grid/GridViews";
import { PageLink } from "../_Functions/Links";

interface PageContentProps {
  page: Page;
}

export const PageHeader: React.FC<PageContentProps> = ({ page }) => {
  const elements = {
    title: (
      <>
        <h1 className={`${styles["page-title"]} ${FontSizes.pageTitle}`}>
          {page.info.title}
        </h1>
      </>
    ),

    title_sub: (
      <>
        <h1 className={`${styles["page-title"]} ${FontSizes.pageTitle2}`}>
          {page.info.title}
        </h1>
      </>
    ),

    summary: (
      <>
        {page.info.summary && (
          <div className={`${styles["page-summary"]} ${FontSizes.medium}`}>
            <MDBlock>{page.info.summary}</MDBlock>
          </div>
        )}
      </>
    ),

    label: (
      <>
        {page.postInfo && (
          <div className={`${styles["page-label"]} ${FontSizes.large}`}>
            <PageLink
              link={
                page.postInfo.parent !== undefined
                  ? page.postInfo.parent
                  : page.postInfo.label
              }
            >
              {page.postInfo.parent !== undefined
                ? page.postInfo.parent.info.title
                : page.postInfo.label.info.title}
            </PageLink>
          </div>
        )}
      </>
    ),

    authors: (
      <>
        {page.postInfo?.authors && (
          <div className={`${styles["page-authors-bar"]} ${FontSizes.small}`}>
            By{" "}
            {page.postInfo.authors.map((item, i: number) => (
              <React.Fragment key={i}>
                {i > 0 && i + 1 !== page.postInfo?.authors.length && ", "}
                {i > 0 && i + 1 === page.postInfo?.authors.length && " and "}
                <PageLink link={item.data} className={styles["author-name"]}>
                  {item.data.info.title}
                </PageLink>
                {/* {` (`}
                {item.roles.map((role, k: number) => (
                  <React.Fragment key={k}>
                    {k > 0 && k + 1 !== item.roles.length && ", "}

                    {k > 0 && k + 1 === item.roles.length && " and "}
                    {role}
                  </React.Fragment>
                ))}
                {`)`} */}
              </React.Fragment>
            ))}
          </div>
        )}
      </>
    ),
  };

  const Content = () => {
    if (page.postInfo?.postType) {
      const type = page.postInfo.postType;

      switch (type) {
        case "article":
          return (
            <div className={styles["post-header-container"]}>
              {elements.label}
              {elements.title_sub}
              {elements.authors}
            </div>
          );

        case "book cover":
          return (
            <div className={styles["post-header-container"]}>
              {elements.title}
              {elements.authors}
            </div>
          );

        default:
          return <h1>Content: Page type error</h1>;
      }
    } else {
      return (
        <MainGridView>
          <SecInMainGridView className={styles["head-content"]} initSpan={8}>
            {elements.title}
            {elements.summary}
          </SecInMainGridView>
        </MainGridView>
      );
    }
  };

  return (
    <header className={styles["page-header"]}>
      <MainView>
        <Content />
      </MainView>
    </header>
  );
};
