import { Page } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";
import { People } from "../../People/_PeopleEnum";

export const Chapter_1: Page = {
  info: {
    title: "Chapter 1",
    path: "chapter-1",
    summary: "",
  },

  postInfo: {
    update: [1292, 1, 2],
    coverUrl:
      "https://i.pinimg.com/1200x/34/9a/43/349a4334e50eb8efcc74131e9b99cfca.jpg",
    authors: [
      {
        data: People.LUShu,
        roles: [
          "program", "translation"
        ]
      },
      {
        data: People.Qianwen,
        roles: [
          "translation"
        ]
      }
    ],
    label: Topics.Math,
    tags: [],
  },
  
  content: ["hhahahahha"],
};
