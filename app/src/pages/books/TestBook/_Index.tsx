import { CreateBook } from "../../../compenents/Functions/BookHandling";
import { Topics } from "../../_types/Topics";
import { Chapter_1 } from "./Chapter_1";
import { Chapter_2 } from "./Chapter_2";
import { Chapter_3 } from "./Chapter_3";

export const TestBook = CreateBook({
  // note: 注意，cover 最好单独定义，防止循环定义
  cover: {
    info: {
      title: "Zermelo–Fraenkel Set Theory",
      path: "test-book",
      summary: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi purus erat, sollicitudin vel pretium consectetur, gravida posuere sem. Pellentesque ut iaculis leo. Vivamus sit amet lacus nunc. Donec vel tellus nec urna consectetur sagittis.

  Sed in neque nibh. Phasellus a odio fringilla, aliquet lectus et, sagittis velit. Praesent sit amet dapibus dui. Fusce imperdiet porttitor enim, et imperdiet leo volutpat a. Mauris id metus ut odio laoreet pulvinar. Ut mattis viverra orci at varius. Sed nibh ipsum, scelerisque id nulla a, ultrices fringilla lacus. Morbi posuere volutpat mauris, et sollicitudin felis vulputate lacinia. Mauris sit amet turpis sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
  `,
    },
    postInfo: {
      update: [0, 0, 0],
      coverUrl:
        "https://i.pinimg.com/1200x/bb/d9/5d/bbd95d1899aa650ec8ce35f231993733.jpg",
      coverCaption:
        "Ut mattis viverra orci at varius. Sed nibh ipsum, scelerisque id nulla",
      authors: [],
      label: Topics.Math,
      tags: [],
    },
    content: [],
  },
  subpages: {
    Chapter_1,
    Chapter_2,
    Chapter_3,
  },
  sortTocBy: "default",
});
