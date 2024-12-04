import styles from "./Figure.module.scss"
import React from "react";
import { MDBlock } from "../../MDBlock";
import { Img } from "../../../InlineElements/Img";

interface FigureProps {
  src: string
  ratio?: [number, number]
  size?: "large"
  caption: string
}

export const Figure: React.FC<FigureProps> = ({src, ratio, size, caption}) => {
  
  return (<>
    <figure className={`
      ${styles["figure"]}
      ${size ? size : styles["default"]}
    `}>
      <Img src={src} alt={`Image: ${caption}`} ratio={ratio} />

      <figcaption className={styles["caption"]}>
        <MDBlock>
          {caption}
        </MDBlock>
      </figcaption>
    </figure>
  </>)
}

