
import { icons, iconsFooter, iconsMiddle, iconsMobile } from '@/components/Menu/data'

import styles from "../components/Menu/Sidebar/sidebar.module.scss"
import { Menu } from '@/components/Menu/MobileMenu/MobileMenu'



export default function Home() {
  return (
    <div>
      main page
      
     <Menu icons={iconsMobile} className={styles.menu} />
    </div>
  )
}
