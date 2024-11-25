import styles from "./Aside.module.scss";

import React from "react";
import { Page } from "../../../pages/_types/PageTypes";
import { HoverBox } from "../../Buttons/Basic";
import { AsideCalendar } from "./AsideComponents/AsideCalendar";
import { GetTodayDateArray } from "../../Functions/Date";
import { SiteInfo } from "../../../SiteInfo";
import { FontSize } from "../../../appStyles/font";

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

  const AsideContent = () => {
    const { pageType } = page.basicInfo; // 从 BasicInfo 中解构 pageType
  
    switch (pageType) {
      case "channel":
        return [
          <AsideCalendar />,
          "sss"
        ];
      case "post":
        return []
      case "collection":
        return [];
      case "book":
        return [];
      default:
        return [];
    }
  };



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
      <div className={styles["fix-container"]}>
        {AsideContent().map((item, i: number) => (
          <div className={styles["aside-item"]} key={`${item}${i}`}>
            {item}
          </div>
        ))}

        <div className={styles["aside-footer"]} style={FontSize.smallest}>
          {SiteInfo.title} @{GetTodayDateArray()[0]}
        </div>
      </div>
    </aside>
  );
};
