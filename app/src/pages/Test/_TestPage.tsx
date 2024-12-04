import { Page } from "../_types/PageShapes";
import { ImageDimensionChecker } from "./ImageDimensionChecker";
import MyEditor from "./MyEditor";

export const TestPage: Page = {
  info: {
    title: "Test",
    path: "test",
    summary: ""
  },
  content: [
    <ImageDimensionChecker />,
    <MyEditor />,
  ]
}