import styles from "./TopNav.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { SiteInfo } from "../../../SiteInfo";
import { NavLinkToTop } from "../_Functions/NavLinkToTop";
import { InfoChannels, MainChennels } from "../../../pages/channels/Channels";
import { HoverBox } from "../../Buttons/Buttons";
import { FontSize } from "../../../appStyles/font";

interface TopNavProps {
  page: Page;
}

const NavItems = [
  {
    title: "Channels",
    items: MainChennels,
  },

  {
    title: "Infos",
    items: InfoChannels,
  },
];

export const TopNav: React.FC<TopNavProps> = ({ page }) => {
  function ToggleAltNav() {
    const toggleArray = document.querySelectorAll(`.${styles["toggle"]}`);

    for (let i = 0; i < toggleArray.length; i++) {
      const element = toggleArray[i];
      element.classList.toggle(styles["open"]);
    }

    const body = document.querySelector("body");
    body?.classList.toggle("alt-nav-open");
  }

  return (
    <div className={styles["top-nav"]}>
      <div className={styles["top-nav-container"]}>
        {/* left */}
        <div className={styles["alt-nav-btn"]} onClick={ToggleAltNav}>
          <span className={`material-symbols-outlined`}>menu</span>
          <HoverBox mode="onLight" />
        </div>
        {/* right */}
        <div className={styles["nav-body"]}>
          <div className={`${styles["page-path"]} ${FontSize.small}`}>
            <NavLinkToTop to={"/"} className={styles["site-title"]}>
              {SiteInfo.title}
            </NavLinkToTop>
            <NavLinkToTop
              to={`/${page.info.key}`}
              className={styles["page-title"]}
            >
              <span className={styles["slash"]}>/</span>
              <span className={styles["text"]}>{page.info.title}</span>
            </NavLinkToTop>
          </div>
          <div className={styles["right"]}></div>
        </div>
      </div>

      <div className={styles["alt-nav"]}>
        <div
          className={`${styles["alt-nav-bg-btn"]} ${styles["toggle"]}`} // note: toggle
          id="alt-nav-bg-btn"
          onClick={ToggleAltNav}
        ></div>

        <div
          className={`${styles["alt-nav-body"]} ${styles["toggle"]}`} // note: toggle
          id="alt-nav-body"
        >
          {NavItems.map((group, i: number) => (
            <div className={styles["channel-group"]} key={`${group}${i}`}>
              <div
                className={`${styles["channel-group-title"]} ${FontSize.smallest}`}>
                {group.title}
              </div>
              {Object.values(group.items).map((channel: Page, k: number) => (
                <div
                  key={`${channel}${k}`}
                  onClick={ToggleAltNav} // note: toggle
                >
                  <NavLinkToTop
                    to={`/${channel.info.key}`}
                    className={`${styles["channel-title"]} ${FontSize.small}`}>
                    {channel.info.title}
                    <HoverBox mode="onLight" />
                  </NavLinkToTop>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
