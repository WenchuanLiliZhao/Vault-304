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
import { PageType } from "../../../pages/_types/PageType";
import { AsideToc } from "./AsideComponents/AsideToc";
import { Channels } from "../../../pages/channels/Channels";

interface AsideProps {
  page: Page;
  type: PageType;
}

export const AsideId = "aside";
export const AsideToggleClass = "toggled";

export const Aside: React.FC<AsideProps> = ({ page, type }) => {
  function ToggleAside() {
    const findAside = document.getElementById(AsideId);
    const condition = findAside?.classList.contains(AsideToggleClass);
    if (condition) {
      findAside?.classList.remove(AsideToggleClass);
      EnableBodyScroll();
    } else {
      findAside?.classList.add(AsideToggleClass);
      DisableBodyScorll();
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

  const AsideContent = () => {
    switch (type) {
      case "channel":
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
      case "post":
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
        return null;
    }
  };

  return (
    <aside
      className={styles["aside"]}
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
          {AsideContent()?.map((item, i: number) => (
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
