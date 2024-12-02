import React, { ReactNode } from "react";
import styles from "./Buttons.module.scss";
import { FontSize, FontSizes } from "../../appStyles/font";
import { PageLink } from "../Layout/_Functions/Links";
import { Page } from "../../pages/_types/PageShapes";

interface HoverBoxPros {
  mode: "onLight" | "onDark";
}

export const HoverBox: React.FC<HoverBoxPros> = ({ mode }) => {
  return <div className={`${styles["hover-box"]} ${styles[mode]}`}></div>;
};

interface TextButtonProps {
  text: ReactNode;
  size: FontSize;
  fillMode: "fill" | "outline";
  onDark: boolean;
  inline: boolean;
  icon?: string;
  className?: string;
  link?: Page;
}

export const TextBtn: React.FC<TextButtonProps> = ({
  text,
  size,
  className,
  fillMode,
  onDark,
  inline,
  icon,
  link,
}) => {
  const btnBody = (
    <>
      <div
        className={styles["container"]}
        style={
          size === String(FontSizes.smaller)
            ? {
                padding: "8px",
              }
            : {}
        }
      >
        <span className={`material-symbols-outlined`}>{icon}</span>
        <span className={styles["text"]}>{text}</span>
        <HoverBox mode={onDark === true ? "onDark" : "onLight"} />
      </div>
    </>
  );

  const Btn = () => {
    if (link) {
      return (
        <PageLink link={link} className={`
          ${styles[`text-button`]}
          ${className}
          ${styles[fillMode]}
          ${inline && styles["inline"]}
        `}
          style={
            size === FontSizes.smaller
              ? {
                  paddingTop: "12px",
                }
              : {}
          }>
          {btnBody}
        </PageLink>
      );
    } else {
      return (
        <div
          className={`
          ${styles[`text-button`]}
          ${className}
          ${styles[fillMode]}
          ${inline && styles["inline"]}
        `}
          style={
            size === FontSizes.smaller
              ? {
                  paddingTop: "12px",
                }
              : {}
          }
        >
          {btnBody}
        </div>
      );
    }
  };

  return <Btn />;
};
