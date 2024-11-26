import { BasicInfo, Page, PageContent, PostInfo } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";

const info: BasicInfo = {
  title: "Chapter 2",
  path: "chapter-2",
  pageType: "post",
  summary: ""
}

const postInfo: PostInfo = {
  update: [1092,1,2],
  coverUrl: "https://i.pinimg.com/1200x/82/db/f4/82dbf49aba687278f37ce0b51800e2c7.jpg",
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