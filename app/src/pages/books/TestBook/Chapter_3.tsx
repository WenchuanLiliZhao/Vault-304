import { Page } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";
import { People } from "../../People/_PeopleEnum";

export const Chapter_3: Page = {
  info: {
    title: "Chapter 3",
    path: "chapter-3",
    summary: "Donec posuere lorem vitae eros sollicitudin tincidunt. Ut rhoncus sapien et hendrerit sollicitudin. Nulla tempus sed massa in consequat. Ut non est sollicitudin, placerat libero at, venenatis mi. Maecenas pulvinar maximus sapien, ullamcorper ullamcorper risus.",
  },

  postInfo: {
    update: [1493, 1, 2],
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
          "program", "design"
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
    tags: ["Calculus"],
  },

  content: [
    `
hahahhah
`,
  ],
};
