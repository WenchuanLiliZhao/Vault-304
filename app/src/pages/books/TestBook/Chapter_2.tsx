import { Page } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";
import { People } from "../../People/_PeopleEnum";

export const Chapter_2: Page = {
  info: {
    title: "Chapter 2",
    path: "chapter-2",
    summary: "",
  },

  postInfo: {
    update: [1092, 1, 2],
    coverUrl:
      "https://i.pinimg.com/1200x/82/db/f4/82dbf49aba687278f37ce0b51800e2c7.jpg",
      authors: [
        {
          data: People.Wenchuan,
          roles: [
            "author", "design"
          ]
        },
        {
          data: People.LUShu,
          roles: [
            "program", "illustration"
          ]
        },
      ],
    label: Topics.Math,
    tags: [],
  },

  content: [
    `
hahahhah
`,
  ],
};
