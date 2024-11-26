import styles from "./PostFeed.module.scss";
import React from "react";
import { Page } from "../../pages/_types/PageShapes";
import { MainGridView } from "../Layout/Grid/GridViews";
import { HoverBox } from "../Buttons/Buttons";

interface Props {
  posts: { [key: string]: Page };
  sortby: "date" | "a-z";
}

export function SortPosts({ posts, sortby }: Props): Page[] {
  const postArray = Object.values(posts);

  const Sorted = () => {
    switch (sortby) {
      case "date":
        return [...postArray].sort((a, b) => {
          // Ensure postInfo with `update` exists before sorting
          const dateA = a.postInfo?.update ?? [0, 0, 0]; // Default to [0, 0, 0] if no date provided
          const dateB = b.postInfo?.update ?? [0, 0, 0];

          // Compare year, then month, then day
          if (dateA[0] !== dateB[0]) return dateB[0] - dateA[0]; // Descending order by year
          if (dateA[1] !== dateB[1]) return dateB[1] - dateA[1]; // Descending order by month
          return dateB[2] - dateA[2]; // Descending order by day
        });
      default:
        return postArray;
    }
  };

  return Sorted();
}

export const PostFeed: React.FC<Props> = ({ posts, sortby }) => {
  return (
    <MainGridView>
      {SortPosts({
        posts: posts,
        sortby: sortby,
      }).map((item: Page, i: number) => (
        <a key={`${item}${i}`} className={styles["post-card"]} href={item.info.path}>
          {item.info.title}

          <HoverBox mode={"onLight"} />
        </a>
      ))}
    </MainGridView>
  );
};

// interface
