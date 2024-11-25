import styles from "./Aside.module.scss";

import React from "react";
import { Page } from "../../../pages/_types/PageTypes";
import { HoverBox } from "../../Buttons/Basic";

interface AsideProps {
  page: Page;
}

export const AsideId = "aside";
export const AsideToggleClass = "toggled";

export const Aside: React.FC<AsideProps> = ({ page }) => {
  function ToggleAside() {
    const findAside = document.getElementById(AsideId);
    findAside?.classList.toggle(AsideToggleClass);
  }

  return (
    <aside className={styles["aside"]} id={AsideId}>
      <div className={styles["bg-btn"]} onClick={ToggleAside}></div>
      <div className={styles["aside-header"]}>
        <div className={styles["toggle-btn"]} onClick={ToggleAside}>
          <span className={`material-symbols-outlined`}>
            view_sidebar
          </span>
          <HoverBox mode="onDark" />
        </div>
      </div>
      <div className={styles["fix-container"]}>{page.basicInfo.title}</div>
    </aside>
  );
};
