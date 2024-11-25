import React from "react"
import styles from "./Basic.module.scss"

interface HoverBoxPros {
  mode: "onLight" | "onDark"
}

export const HoverBox: React.FC<HoverBoxPros> = ({ mode }) => {
  return (
    <div className={`${styles["hover-box"]} ${styles[mode]}`}></div>
  )
}