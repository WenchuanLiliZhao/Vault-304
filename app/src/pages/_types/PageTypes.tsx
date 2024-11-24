type Role =
  | "author" //
  | "translation"
  | "illustration"
  | "design"
  | "program";

export type PageElement = JSX.Element | string;

export type PageContent = PageElement[];

interface Author {
  data: Page | string; // Person is defined below
  roles: Role[];
}

export interface Page {
  info: {
    title: string;
    key: string;
    summary: string;

    // note: options
    cover?: {
      url: string;
      caption?: string;
    };
    authors?: Author[];
    update?: [];
    topic?: {
      title: "";
      key: "";
      summary: "";
    };
    tags?: [];
  };

  content: PageContent
}