import React from "react";
import styles from "./Buttons.module.scss";
import { FontSize } from "../../appStyles/font";

interface HoverBoxPros {
  mode: "onLight" | "onDark";
}

export const HoverBox: React.FC<HoverBoxPros> = ({ mode }) => {
  return <div className={`${styles["hover-box"]} ${styles[mode]}`}></div>;
};

interface TextButtonProps {
  text: string;
  size: keyof typeof FontSize;
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
          ${size}
          ${styles[size]}
          ${inline && styles["inline"]}
        `}
      >
        <div className={styles["container"]}>
          <span className={`material-symbols-outlined`}>{icon}</span>
          <span className={styles["text"]}>{text}</span>
          <HoverBox mode={onDark === true ? "onDark" : "onLight"} />
        </div>
      </div>
    </>
  );
};
