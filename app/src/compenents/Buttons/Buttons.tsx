import React from "react";
import styles from "./Buttons.module.scss";
import { FontSize, FontSizes } from "../../appStyles/font";

interface HoverBoxPros {
  mode: "onLight" | "onDark";
}

export const HoverBox: React.FC<HoverBoxPros> = ({ mode }) => {
  return <div className={`${styles["hover-box"]} ${styles[mode]}`}></div>;
};

interface TextButtonProps {
  text: string;
  size: FontSize;
  fillMode: "fill" | "outline";
  onDark: boolean;
  inline: boolean;
  icon?: string;
  className?: string;
}

export const TextButton: React.FC<TextButtonProps> = ({
  text,
  size,
  className,
  fillMode,
  onDark,
  inline,
  icon,
}) => {
  return (
    <>
      <div
        className={`
          ${styles[`text-button`]}
          ${className}
          ${styles[fillMode]}
          ${inline && styles["inline"]}
        `}
        // style={
        //   size === FontSizes.smaller ? {
        //     paddingTop: "12px"
        //   } : {}
        // }
      >
        <div className={styles["container"]} style={
          size === String(FontSizes.smaller) ? {
            padding: "8px"
          } : {}
        }>
          <span className={`material-symbols-outlined`}>{icon}</span>
          <span className={styles["text"]}>{text}</span>
          <HoverBox mode={onDark === true ? "onDark" : "onLight"} />
        </div>
      </div>
    </>
  );
};
