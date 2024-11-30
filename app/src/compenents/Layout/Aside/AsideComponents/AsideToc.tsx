import styles from "./AsideToc.module.scss";

import React from "react";
import { Page } from "../../../../pages/_types/PageShapes";
import { FontSizes } from "../../../../appStyles/font";
import { PageLink, PageNavLink } from "../../_Functions/Links";
import { HoverBox } from "../../../Buttons/Buttons";

interface Props {
  page: Page;
}

export const AsideToc: React.FC<Props> = ({ page }) => {
  return (
    <>
      <div className={styles["aside-toc"]}>
        <div className={styles["header"]}>
          <div className={`${styles["label"]} ${FontSizes.smaller}`}>
            Table of Contents
          </div>
          <PageLink
            link={page.postInfo?.parent ? page.postInfo.parent : page}
            className={`${styles["title"]} ${FontSizes.large}`}
          >
            {page.postInfo?.parent?.info.title}
          </PageLink>
          <div className={`${styles["toc-list"]} ${FontSizes.smaller}`}>
            {page.postInfo?.toc?.map((item: Page, i: number) => (
              <PageNavLink key={i} className={styles["toc-item"]} link={item}>
                <div className={styles["toc-item-container"]}>
                  {item.info.title}
                  <HoverBox mode={"onLight"} />
                </div>
              </PageNavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
