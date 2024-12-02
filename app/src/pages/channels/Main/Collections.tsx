import { BookFeed } from "../../../compenents/FeedsAndElements/Feeds/CardFeeds";
import { Page } from "../../_types/PageShapes";
import { Books } from "../../books/_Collections";

const Collections: Page = {
  info: {
    title: "Collections",
    path: "collections",
    summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec molestie libero. Vivamus tincidunt sollicitudin tortor quis volutpat. Sed maximus felis quis quam faucibus, quis consequat dui dignissim. Phasellus fermentum viverra dolor et bibendum."
  },
  content: [(
    <>
      <BookFeed bookCovers={Object.values(Books).map(book => book.cover)} />
    </>
  )]
}

export default Collections