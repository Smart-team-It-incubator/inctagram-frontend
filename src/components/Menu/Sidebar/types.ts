

export const SVG_PATHS = {
  create: '/menu/plus-square.svg',
  createActicve: '/menu/plus-square-active.svg',

  favor: ' /menu/favorites.svg',
  favorActive: ' /menu/favorites-active.svg',

  home: '/menu/home.svg',
  homeActive: '/menu/home-active.svg',

  logout: '/menu/logout.svg',
  messenger: '/menu/message.svg',

  messengerActive: '/menu/message-active.svg',
  profile: '/menu/account.svg',

  profileActive: '/menu/account-active.svg',

  search: '/menu/search.svg',
  searchActive: '/menu/search-active.svg',

  stat: '/menu/stat.svg',
} as const

export type Variant =
  | 'account'
  | 'create'
  | 'favor'
  | 'home'
  | 'logout'
  | 'messenger'
  | 'search'
  | 'stat'

export type SvgPath = (typeof SVG_PATHS)[keyof typeof SVG_PATHS]

export type IconsType = {
  paths: SvgPath[] | string[]
  text: string
  variant: Variant
}
