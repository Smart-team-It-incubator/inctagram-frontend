import { Menu } from '@/components/Menu/Menu'
import { Menu2 } from '@/components/Menu/menu2'
import { icons, iconsFooter, iconsMiddle, iconsMobile } from '@/components/Sidebar/data'
import { MenuContent } from '@/components/Sidebar/menuContent'
import { Sidebar } from '@/components/Sidebar/sidebar'
import { Sidebar2 } from '@/components/Sidebar/sidebar2'
import styles from "../components/Menu/menu.module.scss"

export default function Home() {
  return (
    <div>
      main page
      <Sidebar2
        disabledItems={['home']}
        icons={icons}
        iconsFooter={iconsFooter}
        iconsMiddle={iconsMiddle}
      />
     <Menu2 icons={iconsMobile} className={styles.menu} />
    </div>
  )
}
