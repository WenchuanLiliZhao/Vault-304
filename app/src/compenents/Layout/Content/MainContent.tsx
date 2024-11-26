import React from "react";
import { Page, PageElement } from "../../../pages/_types/PageShapes";
import { MainView } from "../Grid/GridViews";
import { MDBlock } from "../../Functions/Markdown";

interface MainContentProps {
  page: Page;
}

export const MainContent: React.FC<MainContentProps> = ({ page }) => {
  const Content = () => {
    const { pageType } = page.info;

    switch (pageType) {
      default:
        return (
          <MainView>
            {page.content.map((item: PageElement, i: number) => (
              <React.Fragment key={`${item}${i}`}>
                {typeof item === "string" && <MDBlock>{item}</MDBlock>}
                {typeof item === "object" && item}
              </React.Fragment>
            ))}
          </MainView>
        );
      case "book cover":
        return [];
    }
  };

  return <Content />;
};
