import { Page } from "../_types/PageTypes";

const NotFound: Page = {
  basicInfo: {
    title: "404 Not Found",
    key: "*",
    pageType: "channel",
  },
  content: [(
    <>
      404 not found
    </>
  )]
}

export default NotFound