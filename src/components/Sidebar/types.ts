import { MenuMode } from "../Menu/Menu";


export const SVG_PATHS = {
    home: '/menu/home.svg',
    homeActive: '/menu/home-active.svg',

    create: '/menu/plus-square.svg',
    createActicve: '/menu/plus-square-active.svg',

    messenger: '/menu/message.svg',
    messengerActive: '/menu/message-active.svg',

    search: '/menu/search.svg',
    searchActive: '/menu/search-active.svg',

    profile: '/menu/account.svg',
    profileActive: '/menu/account-active.svg'

  } as const;
  
  
  export type SvgPath = typeof SVG_PATHS[keyof typeof SVG_PATHS];

  export type IconsType = {
    mode: MenuMode,
    paths: SvgPath[],
    text: string
}