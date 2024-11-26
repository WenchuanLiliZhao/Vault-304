import {
  BasicInfo,
  Page,
  PageContent,
  PostInfo,
} from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";

const info: BasicInfo = {
  title: "Chapter 3",
  path: "chapter-3",
  pageType: "post",
  summary: "",
};

const postInfo: PostInfo = {
  update: [2024, 1, 2],
  coverUrl:
    "https://i.pinimg.com/1200x/9b/e5/a2/9be5a25f526f6c39ffeb4c0b4327a0fb.jpg",
  authors: [],
  label: Topics.Math,
  tags: [],
};

const content: PageContent = [
  `
Vai Hugonet ses bistensa
  `,
];

export const Chapter_3: Page = {
  info: info,
  postInfo: postInfo,
  content: content,
};