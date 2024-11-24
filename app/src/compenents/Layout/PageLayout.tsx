import { Page } from "../../pages/_types/PageTypes";
import { TopNav } from "../Nav/TopNav";
import styles from "./PageLayout.module.scss";
import React from "react";

interface PageLayoutProps {
  page: Page;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ page }) => {
  return (
    <div className={styles["page-layout"]}>
      <div className={styles["top-conainer"]}>
        <TopNav page={page}/>
      </div>
      <div className={styles["screen-container"]}></div>
    </div>
  );
};
