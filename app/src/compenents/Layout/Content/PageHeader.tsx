import styles from "./PageHeader.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { FontSize } from "../../../appStyles/font";
import { MDBlock } from "../../Functions/Markdown";
import { MainGridView, SecInMainGridView, MainView } from "../Grid/GridViews";
import { PageType } from "../../../pages/_types/PageType";
import { PageLink } from "../_Functions/Links";

interface PageContentProps {
  page: Page;
  type: PageType;
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

    label: (
      <>
        {page.postInfo && (
          <div className={`${styles["page-label"]} ${FontSize.large}`}>
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
          <div className={`${styles["page-authors-bar"]} ${FontSize.small}`}>
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

  const ContentByCase = () => {
    switch (type) {
      case "post":
        return (
          <>
            {Content.label}
            {Content.title}
            {Content.authors}
          </>
        );

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
