import { BasicInfo, Page, PageContent, PostInfo } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";

const info: BasicInfo = {
  title: "Chapter 3",
  key: "chapter-3",
  pageType: "post",
  summary: ""
}

const postInfo: PostInfo = {
  update: [
    [2024,1,2],
    [2023,9,1],
  ],
  coverUrl: "",
  authors: [],
  label: Topics.Math,
  tags: []
}

const content: PageContent = [
  `
Vai Hugonet ses bistensa
  `
]

export const Chapter_3: Page = {
  info: info,
  postInfo: postInfo,
  content: content
}