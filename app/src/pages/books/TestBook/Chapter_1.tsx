import { Page, Roles } from "../../_types/PageShapes";
import { Topics } from "../../_types/Topics";
import { People } from "../../People/_PeopleEnum";

export const Chapter_1: Page = {
  info: {
    title: "The Consistency of Axiom of Choice in the System of Set Theory",
    path: "chapter-1",
    summary:
      "Nam vehicula dignissim enim sed bibendum. Ut gravida lorem justo, non aliquam libero condimentum quis. Phasellus auctor nisl at magna euismod, eu pharetra est porttitor. Vivamus convallis orci vitae sollicitudin pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam tempor rhoncus mauris eu gravida. Nam faucibus lacus eget eleifend eleifend. Nam sed posuere dolor, vel dictum orci. Integer laoreet, massa ac consectetur volutpat, sem risus elementum leo, ut tincidunt nibh lectus in nunc. Vivamus non elit maximus ipsum euismod dignissim. Sed nibh ipsum, sodales sed metus id, sodales bibendum massa. Proin finibus nec nulla quis eleifend.",
  },

  postInfo: {
    update: [1292, 9, 28],
    coverUrl:
      "https://i.pinimg.com/1200x/34/9a/43/349a4334e50eb8efcc74131e9b99cfca.jpg",
    authors: [
      {
        data: People.LUShu,
        roles: [Roles.author, Roles.design],
      },
    ],
    label: Topics.Math,
    tags: [],
  },

  content: [
    `
Nam vehicula dignissim enim sed bibendum \`this is code\`. Ut gravida lorem justo, non aliquam libero condimentum quis. Phasellus auctor nisl at magna euismod, eu pharetra est porttitor. Vivamus convallis orci vitae sollicitudin pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam tempor rhoncus mauris eu gravida. Nam faucibus lacus eget eleifend eleifend. Nam sed posuere dolor, vel dictum orci. Integer laoreet, massa ac consectetur volutpat, sem risus elementum leo, ut tincidunt nibh lectus in nunc. Vivamus non elit maximus ipsum euismod dignissim. Sed nibh ipsum, sodales sed metus id, sodales bibendum massa. Proin finibus nec nulla quis eleifend.
`,
    `
\`\`\`typescript
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
    \`
hahahhah
\`,
  ],
};
\`\`\`
`,
  ],
};
