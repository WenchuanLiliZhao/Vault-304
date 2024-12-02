import styles from "./MainContent.module.scss";
import React from "react";
import { Page, PageElement } from "../../../pages/_types/PageShapes";
import { MainGridView, MainView } from "../Grid/GridViews";
import { PageType } from "../../../pages/_types/PageType";
import { PostBody } from "../../Markdown/PostBody/PostBody";
import { FontSizes } from "../../../appStyles/font";
import { MDBlock } from "../../Markdown/MDBlock";
import { PageLink } from "../_Functions/Links";
import { HoverBox } from "../../Buttons/Buttons";
import { PostFeed } from "../../FeedsAndElements/Feeds/CardFeeds";

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
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </>
        );
      case "post":
        return <PostBody page={page} />;
      case "book cover":
        return (
          <>
            {page.postInfo && page.postInfo.toc && (
              <>
                <MainGridView className={styles["book-cover-info-container"]}>
                  <figure className={styles["book-cover"]}>
                    <img src={page.postInfo.coverUrl} alt="" />
                    {page.postInfo.coverCaption && (
                      <figcaption
                        className={`${styles["caption"]} ${FontSizes.smaller}`}
                      >
                        {page.postInfo.coverCaption}
                      </figcaption>
                    )}
                  </figure>

                  <div className={styles["book-summary"]}>
                    <MDBlock>{page.info.summary}</MDBlock>
                  </div>

                  <PageLink
                    className={styles["start-reading-btn"]}
                    link={page.postInfo?.toc[0]}
                  >
                    Start Reading
                    <HoverBox mode={"onLight"} />
                  </PageLink>
                </MainGridView>

                <PostFeed className={styles["book-subpages"]} posts={page.postInfo.toc} />
              </>
            )}
          </>
        );
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
