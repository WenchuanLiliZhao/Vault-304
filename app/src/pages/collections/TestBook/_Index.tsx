import { CreateBook } from "../../../compenents/Functions/BookHandling";
import { Chapter_1 } from "./Chapter_1";
import { Chapter_2 } from "./Chapter_2";
import { Chapter_3 } from "./Chapter_3";

export const TestBook = CreateBook({
  // note: 注意，cover 最好单独定义，防止循环定义
  cover: {
    info: {
      title: "Test Book",
      key: "test-book",
      pageType: "book cover",
      summary: "ssss",
    },
    content: [],
  },
  subpages: {
    Chapter_1,
    Chapter_2,
    Chapter_3,
  },
});
