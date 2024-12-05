import {
  PostFeed,
  SortPosts,
} from "../../../compenents/FeedsAndElements/Feeds/CardFeeds";
import { Page } from "../../_types/PageShapes";
import { BookPages } from "../../books/_Collections";

const Home: Page = {
  info: {
    title: "Overview",
    path: "", // this is home
    summary: "A complete archive of every post, story, and reflection gathered in one place – structured in reverse chronological order, guiding you through the latest updates down to the earliest moments of the journey",
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
