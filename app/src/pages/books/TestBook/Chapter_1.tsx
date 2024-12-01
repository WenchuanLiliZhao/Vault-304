import { Figure } from "../../../compenents/Layout/PostBody/PostElements/Figure";
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
    `## Introduction

Let $X$ be a set and let $\\mathcal T$ be a topology on $X$; i.e., $(X, \\mathcal T)$ is a *topological space*. Let $x$ be an element of $X$.


Nam vehicula dignissim $x \\in X$ enim sed bibendum \`this is code\`. Ut gravida lorem justo, non aliquam libero condimentum quis. Phasellus auctor nisl at magna euismod, eu pharetra est porttitor. Vivamus convallis orci vitae sollicitudin pretium. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam tempor

## The Axiom of Choice

rhoncus mauris eu **gravida**. Nam faucibus lacus eget eleifend eleifend. *Nam sed posuere dolor*, vel dictum orci. Integer laoreet, massa ac consectetur volutpat, sem risus elementum leo, ut tincidunt nibh lectus in nunc. Vivamus non elit maximus ipsum euismod dignissim. Sed nibh ipsum, sodales sed metus id, sodales bibendum massa. Proin finibus nec nulla quis eleifend.

$$
\\int^a_b f(x) \\mathrm{d} x = \\sum_{i = 1}^\\infty (f(x) \\cdot \\Delta x).
$$

rhoncus mauris eu **gravida**. Nam faucibus lacus eget eleifend eleifend. *Nam sed posuere dolor*, vel dictum orci. Integer laoreet, massa ac consectetur volutpat, sem risus elementum leo, ut tincidunt nibh lectus in nunc. Vivamus non elit maximus ipsum euismod dignissim. Sed nibh ipsum, sodales sed metus id, sodales bibendum massa. Proin finibus nec nulla quis eleifend.

rhoncus mauris eu gravida. Nam faucibus lacus eget eleifend eleifend. Nam sed posuere dolor, vel dictum orci. Integer laoreet, massa ac consectetur volutpat, sem risus elementum leo, ut tincidunt nibh lectus in nunc. Vivamus non elit maximus ipsum euismod dignissim. Sed nibh ipsum, sodales sed metus id, sodales bibendum massa. Proin finibus nec nulla quis eleifend.

`,

<Figure
  art={
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/2/25/Paul_C%C3%A9zanne%2C_French_-_The_Large_Bathers_-_Google_Art_Project.jpg"
      alt=""
    />
  }
  size="large"
  caption="Sed mauris risus, aliquet ut nisi ac, congue finibus justo."
/>,

    `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie eget dui porta convallis. Aliquam erat volutpat. Mauris feugiat ullamcorper mi, ut tincidunt sapien dapibus eget. Phasellus at orci vel magna tincidunt placerat ut a tortor. Sed mauris risus, aliquet ut nisi ac, congue finibus justo. Curabitur id molestie turpis, sed molestie libero. Curabitur auctor tellus est, at auctor arcu laoreet ut.

Curabitur facilisis turpis vel cursus tincidunt. Aliquam a cursus justo. Aenean vel varius quam, et suscipit ipsum. Integer vehicula interdum enim ac aliquet. Fusce euismod nunc non est placerat aliquet. Pellentesque ornare, purus eu congue egestas, dui ipsum euismod erat, in auctor libero metus ut dolor. Quisque ac magna ac est euismod laoreet. In sit amet turpis non est finibus volutpat id vitae ante. Nullam sollicitudin maximus eros.

In massa nibh, rhoncus non pellentesque sit amet, fermentum sed turpis. Duis id lacus sit amet metus blandit condimentum nec sit amet odio. Nullam tempor vestibulum arcu, non facilisis tortor laoreet at. Aliquam nec urna euismod, ultrices nulla et, consequat leo. Nam aliquam erat vitae nisl venenatis ultrices. Pellentesque vel diam ut ligula aliquet lobortis at ut metus. Integer vehicula vestibulum dui, vel vestibulum nulla facilisis quis. Sed et elit sed mi imperdiet suscipit a in nunc. Vestibulum ut ex et nunc posuere commodo ut convallis augue. Proin accumsan magna nibh, non convallis massa euismod id. Etiam ut dolor eu velit fermentum elementum id non leo. Nam accumsan orci ac tortor feugiat venenatis. Sed luctus tempor condimentum. Donec congue dui elit, ac imperdiet eros eleifend sed.

Donec ipsum diam, pharetra sit amet euismod in, condimentum vitae odio. Nunc non rhoncus neque. Curabitur ultricies, leo eget elementum maximus, ante justo vulputate enim, vitae ultricies leo magna non elit. Sed bibendum urna id orci semper, vel porta nunc posuere. Donec ligula magna, faucibus nec elementum et, molestie a odio. Mauris dapibus mollis justo, gravida condimentum sapien. Sed mi tortor, bibendum eu orci sit amet, eleifend eleifend purus. Etiam bibendum condimentum velit gravida malesuada. Donec semper lacus id risus rhoncus imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce malesuada convallis orci sit amet lacinia. Phasellus vel facilisis elit. Etiam scelerisque nisl ac feugiat suscipit. Nunc congue egestas nulla at venenatis. Proin ut sollicitudin urna. Nullam aliquet imperdiet cursus.

Suspendisse nec erat sit amet sem posuere ornare. Proin neque tellus, placerat suscipit ipsum eget, scelerisque placerat velit. In eget pellentesque mi, nec gravida turpis. Aenean quis massa vitae eros accumsan gravida quis nec nisi. Donec vulputate laoreet diam. Ut quis rhoncus lacus. Sed egestas lobortis sagittis. Sed eget gravida libero. Sed sit amet tellus at nisi tempor scelerisque pellentesque vel odio. Donec dignissim, erat quis scelerisque posuere, ante elit porta erat, id convallis felis magna sed enim. Integer vitae porta leo. Nam ultrices quam ut neque ullamcorper, non semper metus sodales. In consequat sodales semper. Sed volutpat ligula in lorem mattis, volutpat malesuada sapien porttitor.
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
