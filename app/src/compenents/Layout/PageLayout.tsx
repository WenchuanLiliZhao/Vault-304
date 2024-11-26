import { Page } from "../../pages/_types/PageShapes";
import { Aside } from "./Aside/Aside";
import { MainContent } from "./Content/MainContent";
import { PageHeader } from "./Content/PageHeader";
import { Nav } from "./Nav/Nav";
import { TopNav } from "./Nav/TopNav";
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
          <main className={styles["main"]}>
            <PageHeader page={page} />

            <MainContent page={page} />
          </main>
        </div>
        <div className={styles["right"]}>
          <Aside page={page} />
        </div>
      </div>
    </div>
  );
};
