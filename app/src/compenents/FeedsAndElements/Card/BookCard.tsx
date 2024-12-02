import styles from "./BookCard.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { PageLink } from "../../Layout/_Functions/Links";
import { HoverBox } from "../../Buttons/Buttons";
import { FontSizes } from "../../../appStyles/font";

interface BookCardProps {
  bookCover: Page;
}

export const BookCard: React.FC<BookCardProps> = ({ bookCover }) => {
  return (
    <PageLink className={styles["book-card"]} link={bookCover}>
      {bookCover.postInfo && (
        <>
          <div className={styles["book-cover"]}>
            <img
              className={styles["book-cover-img"]}
              src={bookCover.postInfo.coverUrl}
              alt={`cover of ${bookCover.info.title}`}
            />
          </div>

          <div className={styles["book-cover-info"]}>
            <div>
              <div className={`${styles["book-label"]} ${FontSizes.smaller}`}>
                {bookCover.postInfo.label.info.title}
              </div>
              <div className={`${styles["book-title"]} ${FontSizes.large}`}>{bookCover.info.title}</div>
            </div>

            <div className={`${styles["book-authors"]} ${FontSizes.smaller}`}>
              By{" "}
              {bookCover.postInfo.authors.map((author, k: number) => (
                <React.Fragment key={k}>
                  {k > 0 &&
                    k + 1 !== bookCover.postInfo?.authors.length &&
                    ", "}
                  {k > 0 &&
                    k + 1 === bookCover.postInfo?.authors.length &&
                    " and "}
                  <span className={styles["author-name"]}>
                    {author.data.info.title}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>

          <HoverBox mode={"onDark"} />
        </>
      )}
    </PageLink>
  );
};
