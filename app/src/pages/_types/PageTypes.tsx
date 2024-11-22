// ================================
// Basic info settings
// ================================

import { Tag } from "./Tag";

// General info
// --------------------------------
type BasicPageInfo = {
  title: string;
  key: string;
  summary: string;
};

export type PageContent = (JSX.Element | string)[];

// Additional Info
// --------------------------------
type WithCover = {
  cover: {
    url: string;
    caption: string;
  };
};

type Role =
  | "author" //
  | "translation"
  | "illustration"
  | "design"
  | "program";

interface WithAuthors {
  authors: {
    data: Person | string; // Person is defined below
    roles: Role[];
  }[];
}

interface WithUpdateDate {
  update: [number, number, number][];
  // Note: this is an array of 3-aries
}

interface WithTags {
  tags: Tag[]
}

// ================================
// Page Shapes
// ================================

// Channel
// --------------------------------
export type ChannelInfo = BasicPageInfo;

export interface Channel {
  info: ChannelInfo;
  content: PageContent;
}

// --------------------------------
// Person
// --------------------------------
export interface PersonInfo extends BasicPageInfo, WithCover {}

export interface Person {
  info: PersonInfo;
  content: PageContent;
}

// --------------------------------
// Post
// --------------------------------
export interface ArticleInfo
  extends BasicPageInfo,
    WithCover,
    WithAuthors,
    WithUpdateDate,
    WithTags {}

export interface Article {
  info: ArticleInfo;
  content: PageContent;
}

// ================================
// Collection Shape
// ================================
type BookOption = {
  loadToc: boolean
}

export interface BookInfo
  extends BasicPageInfo,
    WithCover,
    WithAuthors {}

export interface Book {
  info: BookInfo
  option: BookOption
  toc: {
    [key: string]: Article
  }
}