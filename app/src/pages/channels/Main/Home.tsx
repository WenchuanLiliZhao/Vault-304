import { Page } from "../../_types/PageShapes"

const Home: Page = {
  basicInfo: {
    title: "Overview",
    key: "", // this is home
    pageType: "channel",
    summary: `
Vivamus nunc felis, interdum sed accumsan at, finibus et dui. Aenean sed massa dictum, condimentum felis sit amet, suscipit felis.
    `
  },
  content: [(
    <>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam hic culpa placeat, obcaecati eius quasi expedita voluptatum in. Velit aliquid, saepe provident dolorem laudantium expedita quis sequi quas vitae mollitia!</p>
    </>
  )]
}

export default Home