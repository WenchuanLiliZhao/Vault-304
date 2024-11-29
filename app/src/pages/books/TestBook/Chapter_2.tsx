import { Page } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";
import { People } from "../../People/_PeopleEnum";

export const Chapter_2: Page = {
  info: {
    title: "The Principle of Mathematics of Natural Philosophy",
    path: "chapter-2",
    summary: "Sed fermentum sit amet sapien at tincidunt. Curabitur sagittis tellus nec molestie congue.",
  },

  postInfo: {
    update: [1092, 1, 2],
    coverUrl:
      "https://i.pinimg.com/1200x/15/f4/0f/15f40fd5e77a0d7138ba1d910a560fdd.jpg",
    authors: [
      {
        data: People.Wenchuan,
        roles: ["author", "design"],
      },
      {
        data: People.LUShu,
        roles: ["program", "illustration"],
      },
    ],
    label: Topics.Math,
    tags: ["Programming", "Coding", "Design", "In the Name of Father"],
  },

  content: [
    `
hahahhah
`,
  ],
};
