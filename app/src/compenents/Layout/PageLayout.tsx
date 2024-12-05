import { Page } from "../../pages/_types/PageShapes";
import { Aside, WorkWithAside } from "./Aside/Aside";
import { MainContent } from "./Content/MainContent";
import { PageHeader } from "./Content/PageHeader";
import { Footer } from "./Nav/Footer";
import { Nav } from "./Nav/Nav";
import { TopNav } from "./Nav/TopNav";
import styles from "./PageLayout.module.scss";
import React from "react";

export const PageLayout: React.FC<{ page: Page }> = ({ page }) => {
  return (
    <div className={styles["page-layout"]}>
      <TopNav page={page} />
      <div className={styles["main-screen"]}>
        <div className={styles["left"]}>
          <Nav />
        </div>
        <div className={`${styles["mid"]} ${WorkWithAside}`}>
          <PageHeader page={page} />
          <MainContent page={page} />
          <Footer />
        </div>
        <div className={styles["right"]}>
          <Aside page={page} />
        </div>
      </div>
    </div>
  );
};
