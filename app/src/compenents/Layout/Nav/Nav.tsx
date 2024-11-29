import { Page } from "../../../pages/_types/PageShapes"
import { MainChennels } from "../../../pages/channels/Channels"
import { HoverBox } from "../../Buttons/Buttons"
import { PageNavLink } from "../_Functions/Links"
import styles from "./Nav.module.scss"

export const Nav = () => {
  const ChannelArray = Object.values(MainChennels).reverse()

  return (
    <nav className={styles["nav"]}>
      <div className={styles["fix-container"]}>
      {ChannelArray.map((item: Page, i: number) => (
        <PageNavLink key={i} className={styles["item"]} link={item}>
          {item.info.title}
          <HoverBox mode="onLight" />
        </PageNavLink>
      ))}
    </div>
    </nav>
  )
}