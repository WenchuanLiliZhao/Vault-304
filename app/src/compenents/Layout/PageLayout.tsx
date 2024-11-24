import { Page, PageElement } from "../../pages/_types/PageTypes";
import { Nav } from "../Nav/Nav";
import { TopNav } from "../Nav/TopNav";
import styles from "./PageLayout.module.scss";
import React from "react";

interface PageLayoutProps {
  page: Page;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ page }) => {
  return (
    <div className={styles["page-layout"]}>
      <TopNav page={page} />
      <div className={styles["main-screen"]}>
        <div className={styles["left"]}>
          <Nav />
        </div>
        <div className={styles["mid"]}>
          <main>
            {page.content.map((item: PageElement) => (
              <div key={`${item}`}>{item}</div>
            ))}
          </main>
        </div>
        <div className={styles["right"]}></div>
      </div>
    </div>
  );
};
