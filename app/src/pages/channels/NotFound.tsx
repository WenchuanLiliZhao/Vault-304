import { Page } from "../_types/PageShapes";

const NotFound: Page = {
  info: {
    title: "404 Not Found",
    key: "*",
    pageType: "channel",
    summary: ""
  },
  content: [(
    <>
      404 not found
    </>
  )]
}

export default NotFound