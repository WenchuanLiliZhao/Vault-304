import { BasicPageInfo } from "./PageTypes"

type TopicInfo = BasicPageInfo

const Math: TopicInfo = {
  title: "Mathematics",
  key: "mathematics",
  summary: ""
}


const UIUX: TopicInfo = {
  title: "UI/UX Design",
  key: "uiux-design",
  summary: ""
}

const Illustration: TopicInfo = {
  title: "Illustration",
  key: "illustration",
  summary: ""
}

const Coding: TopicInfo = {
  title: "Coding",
  key: "coding",
  summary: ""
}


export const Topics = {
  Math,
  UIUX,
  Illustration,
  Coding,
} as const

export type Topic = (typeof Topics)[keyof typeof Topics]


// Note: The following is an example of an union of types
// export type Label = 
//   | typeof Labels_BrainWave[keyof typeof Labels_BrainWave]
//   | typeof Labels_Person[keyof typeof Labels_Person]
//   | typeof Labels_Design[keyof typeof Labels_Design];