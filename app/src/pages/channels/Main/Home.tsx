import { PostFeed, SortPosts } from "../../../compenents/Feeds/PostFeed";
import { Page } from "../../_types/PageShapes";
import { BookPages } from "../../books/_Collections";

const Home: Page = {
  info: {
    title: "Overview",
    path: "", // this is home
    summary: `
Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis.
    `,
  },
  content: [
    <>
      <PostFeed
        posts={SortPosts({
          posts: BookPages,
          sortby: "date",
        })}
      />
    </>,
  ],
};

export default Home;
