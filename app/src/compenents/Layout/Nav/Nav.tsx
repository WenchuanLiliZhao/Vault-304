import { Page } from "../../../pages/_types/PageShapes"
import { MainChennels } from "../../../pages/channels/Channels"
import { HoverBox } from "../../Buttons/Buttons"
import { NavLinkToTop } from "../_Functions/Link"
import styles from "./Nav.module.scss"

export const Nav = () => {
  const ChannelArray = Object.values(MainChennels).reverse()

  return (
    <nav className={styles["nav"]}>
      <div className={styles["fix-container"]}>
      {ChannelArray.map((item: Page, i: number) => (
        <NavLinkToTop key={i} className={styles["item"]} to={`/${item.info.path}`}>
          {item.info.title}
          <HoverBox mode="onLight" />
        </NavLinkToTop>
      ))}
    </div>
    </nav>
  )
}