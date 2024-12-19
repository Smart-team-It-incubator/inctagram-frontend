import { Menu } from '@/components/Menu/Menu'
import { Menu2 } from '@/components/Menu/menu2'
import { icons, iconsFooter, iconsMiddle } from '@/components/Sidebar/data'
import { Sidebar } from '@/components/Sidebar/sidebar'

export default function Home() {
  return (
    <div>
      main page
      <Sidebar
        disabledItems={['home']}
        icons={icons}
        iconsFooter={iconsFooter}
        iconsMiddle={iconsMiddle}
      />
      <Menu2 />
    </div>
  )
}
