import styles from "./Aside.module.scss";

import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { HoverBox, TextBtn } from "../../Buttons/Buttons";
import { AsideCalendar } from "./AsideComponents/AsideCalendar";
import { GetTodayDateArray } from "../../Functions/Date";
import { SiteInfo } from "../../../SiteInfo";
import { FontSizes } from "../../../appStyles/font";
import {
  AsideInfoBox,
  AsideKeywords,
  AuthorsInfoBox,
} from "./AsideComponents/AsideArticle";
import { AsideToc } from "./AsideComponents/AsideToc";
import { Channels } from "../../../pages/channels/Channels";

interface AsideProps {
  page: Page;
}

export const AsideId = "aside";
export const WorkWithAside = "work-with-aside";
export const AsideToggleClass = "toggled";

export const Aside: React.FC<AsideProps> = ({ page }) => {
  function ToggleAside() {
    const findWorkWithAside = document.querySelectorAll(`.${WorkWithAside}`);
    for (let i = 0; i < findWorkWithAside.length; i++) {
      const element = findWorkWithAside[i];

      if (element.classList.contains(AsideToggleClass)) {
        element.classList.remove(AsideToggleClass);
        EnableBodyScroll();
      } else {
        element.classList.add(AsideToggleClass);
        DisableBodyScorll();
      }
    }
  }

  function DisableBodyScorll() {
    const findBody = document.getElementById("body");
    findBody?.classList.add("disable-scroll");
  }

  function EnableBodyScroll() {
    const findBody = document.getElementById("body");
    findBody?.classList.remove("disable-scroll");
  }

  const Content = () => {
    if (page.postInfo?.postType) {
      switch (page.postInfo.postType) {
        case "article":
          return [
            <AsideToc page={page} />,
            <AsideInfoBox
              title={"Summary of the Page"}
              content={[page.info.summary]}
            />,
            <AsideKeywords page={page} />,
            <AuthorsInfoBox page={page} />,
          ];

        case "book cover":
          return [
            <AsideToc page={page} />,
            <AsideInfoBox
              title={"Summary of the Page"}
              content={[page.info.summary]}
            />,
            <AsideKeywords page={page} />,
            <AuthorsInfoBox page={page} />,
          ];

        default:
          return [<h1>Aside: Page type error</h1>];
      }
    } else {
      return [
        <AsideCalendar />,
        <AsideInfoBox
          title={"About & Location"}
          content={[
            SiteInfo["about & location"],
            <>
              <TextBtn
                text={"About"}
                size={FontSizes.smaller}
                fillMode={"fill"}
                onDark={false}
                inline={false}
                link={Channels.About}
              />
            </>,
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
    <aside
      className={`${styles["aside"]} ${WorkWithAside}`}
      id={AsideId}
      onMouseOver={DisableBodyScorll}
      onMouseLeave={EnableBodyScroll}
    >
      <div className={styles["bg-btn"]} onClick={ToggleAside}></div>
      <div className={styles["aside-header"]}>
        <div className={styles["toggle-btn"]} onClick={ToggleAside}>
          <span className={`material-symbols-outlined`}>view_sidebar</span>
          <HoverBox mode="onDark" />
        </div>
      </div>
      <div className={styles["content-container"]}>
        <div>
          {Content()?.map((item, i: number) => (
            <div className={styles["aside-item"]} key={`${item}${i}`}>
              {item}
            </div>
          ))}
        </div>

        <div className={`${styles["aside-footer"]} ${FontSizes.smaller}`}>
          {SiteInfo.title} @{GetTodayDateArray()[0]}
        </div>
      </div>
    </aside>
  );
};
