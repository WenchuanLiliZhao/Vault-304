import styles from "./PostCard.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { HoverBox } from "../../Buttons/Buttons";
import { DateFormatter } from "../../Functions/Date";
import { MDBlock } from "../../Functions/Markdown";
import { PageLink } from "../../Layout/_Functions/Link";
import { FontSize } from "../../../appStyles/font";

interface PostCardProps {
  post: Page;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <>
      <PageLink className={styles["post-card"]} link={post}>
        {post.postInfo && (
          <>
            {/* post header */}
            <div className={styles["card-header"]}>
              <div className={styles["post-update"]}>
                <div className={`${styles["day-month"]} ${FontSize.large}`}>
                  {DateFormatter(post.postInfo.update)[2]}{" "}
                  {DateFormatter(post.postInfo.update)[1]}
                </div>
                <div className={`${styles["year"]} ${FontSize.small}`}>
                  {DateFormatter(post.postInfo.update)[0]}
                </div>
              </div>
              <div className={`${styles["post-label"]} ${FontSize.small}`}>
                {post.postInfo.label.info.title}
              </div>
            </div>

            {/* post cover */}
            <div className={styles["post-cover"]}>
              <img
                className={styles["img"]}
                src={post.postInfo.coverUrl}
                alt={`cover of ${post.info.title}`}
              />
              {post.postInfo.parent && (
                <>
                  <div className={styles["parent-label"]}>
                    {post.postInfo.parent.info.title}
                  </div>
                </>
              )}
            </div>

            {/* post info */}
            <div className={styles["post-info"]}>
              <div className={styles["post-intro"]}>
                <div className={`${styles["post-title"]} ${FontSize.medium}`}>{post.info.title}</div>
                <div className={`${styles["post-summary"]} ${FontSize.small}`}>
                  <MDBlock>{post.info.summary}</MDBlock>
                </div>
              </div>

              <div className={`${styles["post-authors"]} ${FontSize.smallest}`}>
                By{" "}
                {post.postInfo.authors.map((author, k: number) => (
                  <React.Fragment key={k}>
                    {k > 0 && k + 1 !== post.postInfo?.authors.length && ", "}
                    {k + 1 === post.postInfo?.authors.length && " and "}
                    <span className={styles["author-name"]}>
                      {author.data.info.title}
                    </span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </>
        )}

        <HoverBox mode={"onLight"} />
      </PageLink>
    </>
  );
};
