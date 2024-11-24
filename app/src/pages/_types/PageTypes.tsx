export type Page =
  | Channel //
  | Person
  | Article
  | Book


// ================================
// Basic info settings
// ================================

import { Topic } from "./Topics";

// General info
// --------------------------------
export type BasicPageInfo = {
  title: string;
  key: string;
  summary: string;
};

export type PageElement = JSX.Element | string

export type PageContent = PageElement[];

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

interface WithTopic {
  topic: Topic
}

interface WithTags {
  tags: string[]
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
    WithTopic,
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
  content: PageContent
}