import { pageType } from "./PageTypes";
import { Topic } from "./Topics";

export interface Page {
  basicInfo: BasicInfo;
  postInfo?: PostInfo;
  bookInfo?: string;
  content: PageContent;
}

type Role =
  | "author" //
  | "translation"
  | "illustration"
  | "design"
  | "program";

export type PageElement = JSX.Element | string;

export type PageContent = (JSX.Element | string)[];

export interface BasicInfo {
  title: string;
  key: string;
  pageType: pageType
  summary?: string;
}

export interface PostInfo {
  update: [number, number, number][];
  coverUrl: string;
  coverCaption?: string;
  authors: { data: Page | string; roles: Role[] }[];
  label: Topic;
  tags: string[];
}

export interface CollectionInfo {
  toc: { [key: string]: Page }
}