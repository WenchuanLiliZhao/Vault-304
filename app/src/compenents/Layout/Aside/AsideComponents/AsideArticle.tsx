import React from "react";
import {
  Page,
  PageContent,
  PageElement,
} from "../../../../pages/_types/PageShapes";
import styles from "./AsideArticle.module.scss";
import { FontSizes } from "../../../../appStyles/font";
import { MDBlock } from "../../../Markdown/MDBlock";
import { PageLink } from "../../_Functions/Links";
import { DateFormatter } from "../../../Functions/Date";
import { HoverBox } from "../../../Buttons/Buttons";

interface AsideArticleProps {
  title: string;
  titleDeco?: string;
  content: PageContent;
}

export const AsideInfoBox: React.FC<AsideArticleProps> = ({
  title,
  titleDeco,
  content,
}) => {
  return (
    <>
      <div className={`${styles["aside-info-box"]} ${FontSizes.smaller}`}>
        <div className={styles["title-bar"]}>
          <span className={styles["title"]}>{title}</span>
          {titleDeco && (
            <>
              {" "}
              <span>{titleDeco}</span>
            </>
          )}
        </div>
        <div className={styles["body"]}>
          {content.map((item: PageElement, i: number) => (
            <React.Fragment key={`${item}${i}`}>
              {typeof item === "string" ? (
                <>
                  <MDBlock>{item}</MDBlock>
                </>
              ) : (
                item
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

interface AsideKeywordsProps {
  page: Page;
}

export const AsideKeywords: React.FC<AsideKeywordsProps> = ({ page }) => {
  const title =
    page.postInfo && page.postInfo.tags.length > 1 ? "Keywords" : "Keyword";

  return (
    <>
      <AsideInfoBox
        title={title}
        titleDeco={`(${page.postInfo?.tags.length})`}
        content={[
          <div className={styles["keywords"]}>
            {page.postInfo?.tags.length !== 0 ? (
              page.postInfo?.tags.map((item: string) => (
                <div key={`${item}`} className={styles["keyword"]}>
                  {item}
                  <HoverBox mode="onLight" />
                </div>
              ))
            ) : (
              <p className={styles["hint-no-keywords"]}>
                This page currently does not contain any keywords.
              </p>
            )}
          </div>,
        ]}
      />
    </>
  );
};

interface AuthorsInfoBoxProps {
  page: Page;
}

export const AuthorsInfoBox: React.FC<AuthorsInfoBoxProps> = ({ page }) => {
  const title =
    page.postInfo && page.postInfo.authors.length > 1
      ? "Authors of the Page"
      : "Author of the Page";

  return (
    <>
      <AsideInfoBox
        title={title}
        content={[
          <>
            {page.postInfo && page.postInfo.authors && (
              <>
                <p>
                  The article <em>{page.info.title}</em> is edited by{" "}
                  {page.postInfo.authors.map((item, i: number) => (
                    <React.Fragment key={i}>
                      {i > 0 && i + 1 !== page.postInfo?.authors.length && ", "}
                      {i > 0 &&
                        i + 1 === page.postInfo?.authors.length &&
                        " and "}
                      <strong>
                        <PageLink
                          link={item.data}
                          children={item.data.info.title}
                        />
                      </strong>
                      {` (`}
                      {item.roles.map((role, k: number) => (
                        <React.Fragment key={k}>
                          {k > 0 && k + 1 !== item.roles.length && ", "}
                          {k > 0 && k + 1 == item.roles.length && " and "}
                          {role}
                        </React.Fragment>
                      ))}
                      {`)`}
                    </React.Fragment>
                  ))}{" "}
                  on {DateFormatter(page.postInfo.update)[2]}{" "}
                  {DateFormatter(page.postInfo.update)[1]}{" "}
                  {DateFormatter(page.postInfo.update)[0]}.
                </p>
              </>
            )}
          </>,
        ]}
      />
    </>
  );
};
