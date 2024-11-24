import { Channel } from "../../pages/_types/PageTypes"
import { MainChennels } from "../../pages/channels/Channels"
import { HoverBox } from "../Buttons/Basic"
import { NavLinkToTop } from "./Functions/NavLinkToTop"
import styles from "./Nav.module.scss"

export const Nav = () => {
  const ChannelArray = Object.values(MainChennels).reverse()

  return (
    <nav className={styles["nav"]}>
      <div className={styles["container"]}>
      {ChannelArray.map((item: Channel, i: number) => (
        <NavLinkToTop key={i} className={styles["item"]} to={`/${item.info.key}`}>
          {item.info.title}
          <HoverBox />
        </NavLinkToTop>
      ))}
    </div>
    </nav>
  )
}