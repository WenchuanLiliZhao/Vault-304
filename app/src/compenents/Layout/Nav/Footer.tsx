import React from "react";
import { FontSize } from "../../../appStyles/font";
import { Topics } from "../../../pages/_types/Topics";
import { Channels } from "../../../pages/channels/Channels";
import { SiteInfo } from "../../../SiteInfo";
import { SiteLinks } from "../../../SiteLinks";
import { GetTodayDateArray } from "../../Functions/Date";
import { MDBlock } from "../../Functions/Markdown";
import { PageLink } from "../_Functions/Link";
import { MainGridView, MainView } from "../Grid/GridViews";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const footerLinks = [
    {
      title: "Social",
      items: [
        SiteLinks.Instagram,
        SiteLinks.Figma,
        SiteLinks.Behance,
        SiteLinks.Medium,
      ],
    },
    {
      title: "Topics",
      items: [Topics.UIUX, Topics.Illustration, Topics.Math, Topics.Coding],
    },
    {
      title: "More",
      items: [Channels.About, Channels.Contact, Channels.HireMe],
    },
  ];

  const footerEndLinks = [Channels.Privacy, Channels.TermsOfUse];

  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <MainView>
          <MainGridView className={styles["footer-body"]}>
            <div className={styles["site-info"]}>
              <div className={`${styles["site-title"]} ${FontSize.large}`}>
                {SiteInfo.title}
              </div>
              <div className={`${styles["site-summary"]} ${FontSize.small}`}>
                <MDBlock>{SiteInfo.summary}</MDBlock>
              </div>
            </div>

            <div className={`${styles["footer-channels"]} ${FontSize.small}`}>
              <MainGridView className={styles["foot-channels-grid"]}>
                {footerLinks.map((group, i: number) => (
                  <div key={i} className={styles["group"]}>
                    <div className={styles["group-title"]}>{group.title}</div>
                    <ul className={styles["channel-list"]}>
                      {group.items.map((page, k: number) => (
                        <li
                          key={k}
                          className={styles["channel"]} // note: this class name is not used yet
                        >
                          <PageLink link={page}>{page.info.title}</PageLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </MainGridView>
            </div>
          </MainGridView>

          <div className={`${styles["foot-end"]} ${FontSize.smallest}`}>
            <div className={styles["left"]}>
              ©Wenchuan Zhao {GetTodayDateArray()[0]}
            </div>
            <div className={styles["end-links"]}>
              {footerEndLinks.map((page, i: number) => (
                <React.Fragment key={i}>
                  {i != 0 && (
                    <span className={styles["end-link-divider"]}>·</span>
                  )}
                  <PageLink link={page} className={styles["end-link"]}>
                    {page.info.title}
                  </PageLink>
                </React.Fragment>
              ))}
            </div>
          </div>
        </MainView>
      </div>
    </footer>
  );
};
