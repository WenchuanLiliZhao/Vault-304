import { Page } from "./PageTypes";

type TopicInfo = Page;

const Math: TopicInfo = {
  basicInfo: {
    title: "Mathematics",
    key: "mathematics",
    summary: "",
  },
  content: [],
};

const UIUX: TopicInfo = {
  basicInfo: {
    title: "UI/UX Design",
    key: "uiux-design",
    summary: "",
  },

  content: [],
};

const Illustration: TopicInfo = {
  basicInfo: {
    title: "Illustration",
    key: "illustration",
    summary: "",
  },

  content: [],
};

const Coding: TopicInfo = {
  basicInfo: {
    title: "Coding",
    key: "coding",
    summary: "",
  },

  content: [],
};

export const Topics = {
  Math,
  UIUX,
  Illustration,
  Coding,
} as const;

export type Topic = (typeof Topics)[keyof typeof Topics];

// Note: The following is an example of an union of types
// export type Label =
//   | typeof Labels_BrainWave[keyof typeof Labels_BrainWave]
//   | typeof Labels_Person[keyof typeof Labels_Person]
//   | typeof Labels_Design[keyof typeof Labels_Design];
