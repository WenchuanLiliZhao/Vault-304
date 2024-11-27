import { Topic } from "./Topics";

export interface Page {
  info: BasicInfo;
  postInfo?: PostInfo;
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
  path: string;
  summary: string;
}

export interface PostInfo {
  update: [number, number, number];
  coverUrl: string;
  coverCaption?: string;
  authors: { data: Page | string; roles: Role[] }[];
  label: Topic;
  tags: string[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toc?: any
  parent?: Page
}

export type Subpages = { [key: string]: Page }