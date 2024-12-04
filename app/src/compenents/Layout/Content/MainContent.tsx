import styles from "./MainContent.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { MainGridView, MainView } from "../Grid/GridViews";
import { ArticleMapper } from "../../Markdown/ContentBody/ArticleMapper";
import { FontSizes } from "../../../appStyles/font";
import { MDBlock } from "../../Markdown/MDBlock";
import { PageLink } from "../_Functions/Links";
import { HoverBox } from "../../Buttons/Buttons";
import { PostFeed } from "../../FeedsAndElements/Feeds/CardFeeds";

interface MainContentProps {
  page: Page;
}

export const MainContent: React.FC<MainContentProps> = ({ page }) => {

  const Content = () => {
    if (page.postInfo?.postType) {
      const type = page.postInfo.postType;

      switch (type) {
        case "article":
          return <ArticleMapper page={page} />;
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

                  <PostFeed
                    className={styles["book-subpages"]}
                    posts={page.postInfo.toc}
                  />
                </>
              )}
            </>
          );
        default:
          return <p>Content: Page type error</p>;
      }
    } else {
      return (<ArticleMapper page={page} />)
    }
  };

  return (
    <MainView>
      <Content />
    </MainView>
  );
};
