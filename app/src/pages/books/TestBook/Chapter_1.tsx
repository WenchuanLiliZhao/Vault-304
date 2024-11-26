import { BasicInfo, Page, PageContent, PostInfo } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";

const info: BasicInfo = {
  title: "Chapter 1",
  path: "chapter-1",
  pageType: "post",
  summary: ""
}

const postInfo: PostInfo = {
  update: [1292,1,2],
  coverUrl: "https://i.pinimg.com/1200x/34/9a/43/349a4334e50eb8efcc74131e9b99cfca.jpg",
  authors: [],
  label: Topics.Math,
  tags: []
}

const content: PageContent = [
  `hahahhah`
]

export const Chapter_1: Page = {
  info: info,
  postInfo: postInfo,
  content: content,
}