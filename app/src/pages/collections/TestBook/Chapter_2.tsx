import { BasicInfo, Page, PageContent, PostInfo } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";

const info: BasicInfo = {
  title: "Chapter 2",
  key: "chapter-2",
  pageType: "post",
  summary: ""
}

const postInfo: PostInfo = {
  update: [[1092,1,2]],
  coverUrl: "",
  authors: [],
  label: Topics.Math,
  tags: []
}

const content: PageContent = [
  `hahahhah`
]

export const Chapter_2: Page = {
  info: info,
  postInfo: postInfo,
  content: content,
}