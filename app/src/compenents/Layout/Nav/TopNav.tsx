import styles from "./TopNav.module.scss";
import React from "react";
import { Page } from "../../../pages/_types/PageShapes";
import { SiteInfo } from "../../../SiteInfo";
import { NavLinkToTop } from "../_Functions/Links";
import { InfoChannels, MainChennels } from "../../../pages/channels/Channels";
import { HoverBox } from "../../Buttons/Buttons";
import { FontSize } from "../../../appStyles/font";

interface TopNavProps {
  page: Page;
}

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

  const NavPath = [];
  if (page.postInfo?.parent !== undefined) {
    NavPath.push(page.postInfo.parent);
  }
  NavPath.push(page)

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
            {NavPath.map((item: Page, i: number) => (
              <React.Fragment key={`${item}${i}`}>
                <span className={styles["slash"]}>/</span>
                <NavLinkToTop
                  to={`/${item.info.path}`}
                  className={styles["page-title"]}
                >
                  {item.info.title}
                </NavLinkToTop>
              </React.Fragment>
            ))}
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
                className={`${styles["channel-group-title"]} ${FontSize.smallest}`}
              >
                {group.title}
              </div>
              {Object.values(group.items).map((channel: Page, k: number) => (
                <div
                  key={`${channel}${k}`}
                  onClick={ToggleAltNav} // note: toggle
                >
                  <NavLinkToTop
                    to={`/${channel.info.path}`}
                    className={`${styles["channel-title"]} ${FontSize.small}`}
                  >
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
