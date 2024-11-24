import { Page } from "../../pages/_types/PageTypes";
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
      <TopNav page={page}/>
      <Nav />
    </div>
  );
};
