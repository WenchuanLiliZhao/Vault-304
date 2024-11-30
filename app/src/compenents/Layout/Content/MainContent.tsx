import React from "react";
import { Page, PageElement } from "../../../pages/_types/PageShapes";
import { MainView } from "../Grid/GridViews";
import { PageType } from "../../../pages/_types/PageType";
import { PostBody } from "../PostBody/PostBody";

interface MainContentProps {
  page: Page;
  type: PageType;
}

export const MainContent: React.FC<MainContentProps> = ({ page, type }) => {
  const Content = () => {
    switch (type) {
      case "channel":
        return (
          <>
            {page.content.map((item: PageElement, i: number) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </>
        );
      case "post":
        return (
          <PostBody page={page} />
        );
      case "book cover":
        return [];
      default:
        return null;
    }
  };

  return (
    <MainView>
      <Content />
    </MainView>
  );
};
