import styles from "./CardFeed.module.scss"
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { MainGridView } from "../../Layout/Grid/GridViews";
import { PostCard } from "../Card/PostCard";
import { BookCard } from "../Card/BookCard";

export type SortPostMode = "default" | "date" | "a-z"

interface SortPostsProps {
  posts: { [key: string]: Page };
  sortby: SortPostMode;
}

export function SortPosts({ posts, sortby }: SortPostsProps): Page[] {
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

interface PostFeedProps {
  posts: Page[];
  className?: string
}

export const PostFeed: React.FC<PostFeedProps> = ({ posts, className }) => {
  return (
    <MainGridView className={`${styles["post-feed"]} ${className}`}>
      {posts.map((post: Page, i: number) => (
        <div  key={i} className={styles["post-container"]}>
          <PostCard post={post} />
        </div>
      ))}
    </MainGridView>
  );
};

interface BookFeedProps {
  bookCovers: Page[];
  className?: string
}

export const BookFeed: React.FC<BookFeedProps> = ({bookCovers, className}) => {
  return (
    <MainGridView className={`${styles["post-feed"]} ${className}`}>
      {bookCovers.map((bookCover, i: number) => (
        <div key={i} className={styles["post-container"]}>
          <BookCard bookCover={bookCover} />
        </div>
      ))}
    </MainGridView>
  )
}
