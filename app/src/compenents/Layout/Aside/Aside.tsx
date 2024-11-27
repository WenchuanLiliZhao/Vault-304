import styles from "./Aside.module.scss";

import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { HoverBox, TextButton } from "../../Buttons/Buttons";
import { AsideCalendar } from "./AsideComponents/AsideCalendar";
import { GetTodayDateArray } from "../../Functions/Date";
import { SiteInfo } from "../../../SiteInfo";
import { FontSize } from "../../../appStyles/font";
import { AsideInfoBox } from "./AsideComponents/AsideArticle";
import { PageType } from "../../../pages/_types/PageType";

interface AsideProps {
  page: Page;
  type: PageType;
}

export const AsideId = "aside";
export const AsideToggleClass = "toggled";

export const Aside: React.FC<AsideProps> = ({ page, type }) => {
  function ToggleAside() {
    const findAside = document.getElementById(AsideId);
    findAside?.classList.toggle(AsideToggleClass);
  }

  const AsideContent = () => {
    switch (type) {
      case "post":
        return [<>
          {page.info.title}
        </>];
      case "book cover":
        return [];
      default:
        return [
          <AsideCalendar />,
          <AsideInfoBox
            title={"About & Location"}
            content={[
              SiteInfo["about & location"],
              <TextButton
                text={"Contact Me"}
                size={"smallest"}
                fillMode={"fill"}
                onDark={false}
                inline={false}
              />,
            ]}
          />,
          <AsideInfoBox
            title={"Copyrights"}
            content={[SiteInfo["copyrights"]]}
          />,
        ];
    }
  };

  return (
    <aside className={styles["aside"]} id={AsideId}>
      <div className={styles["bg-btn"]} onClick={ToggleAside}></div>
      <div className={styles["aside-header"]}>
        <div className={styles["toggle-btn"]} onClick={ToggleAside}>
          <span className={`material-symbols-outlined`}>view_sidebar</span>
          <HoverBox mode="onDark" />
        </div>
      </div>
      <div className={styles["content-container"]}>
        {AsideContent().map((item, i: number) => (
          <div className={styles["aside-item"]} key={`${item}${i}`}>
            {item}
          </div>
        ))}

        <div className={`${styles["aside-footer"]} ${FontSize.smallest}`}>
          {SiteInfo.title} @{GetTodayDateArray()[0]}
        </div>
      </div>
    </aside>
  );
};
