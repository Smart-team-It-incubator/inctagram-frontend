import { Menu } from '@/components/Menu/Menu'
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
      <Menu />
    </div>
  )
}
