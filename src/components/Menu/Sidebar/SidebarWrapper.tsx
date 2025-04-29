import { icons, iconsFooter, iconsMiddle } from "../data"
import { Sidebar } from "./sidebar"
import { IconsType, Variant } from "./types"

const headerIcons: Array<IconsType> = icons
const middleIcons: Array<IconsType> = iconsMiddle
const footerIcons: Array<IconsType> = iconsFooter

type Props = {
  disabledItems?: Array<Variant>
}

export const SidebarWrapper = ({disabledItems = []}: Props) => {

    if(disabledItems.length > 0) {
        console.log(disabledItems)
    }

    return (
        <Sidebar icons={headerIcons} iconsMiddle={middleIcons} iconsFooter={footerIcons} />
    )
}