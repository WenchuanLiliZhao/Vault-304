import { Topic } from "./Topics";

export interface Page {
  info: BasicInfo;
  postInfo?: PostInfo;
  content: (JSX.Element | string)[];
}

export const Roles = {
  author: "author",
  translation: "translation",
  illustration: "illustration",
  design: "design",
  program: "program",
}

export type Role = (typeof Roles)[keyof typeof Roles];

export type Author = {
  data: Page
  roles: Role[]
}

export interface BasicInfo {
  title: string;
  path: string;
  summary: string;
}

export interface PostInfo {
  update: [number, number, number];
  coverUrl: string;
  coverCaption?: string;
  authors: Author[];
  label: Topic;
  tags: string[];

  // note: invisible
  toc?: Page[];
  parent?: Page;
  postType?: "article" | "book cover";
}

export type Subpages = { [key: string]: Page };
