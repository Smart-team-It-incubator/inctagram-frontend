import { IconsType, SVG_PATHS } from './types'

export const icons: Array<IconsType> = [
  {
    paths: [SVG_PATHS.home, SVG_PATHS.homeActive],
    text: 'Home',
    variant: 'home',
  },

  {
    paths: [SVG_PATHS.create, SVG_PATHS.createActicve],
    text: 'Create',
    variant: 'create',
  },

  {
    paths: [SVG_PATHS.profile, SVG_PATHS.profileActive],
    text: 'Profile',
    variant: 'account',
  },

  {
    paths: [SVG_PATHS.messenger, SVG_PATHS.messengerActive],
    text: 'Messenger',
    variant: 'messenger',
  },

  {
    paths: [SVG_PATHS.search, SVG_PATHS.searchActive],
    text: 'Search',
    variant: 'search',
  },
]

export const iconsMiddle: Array<IconsType> = [
  {
    paths: [SVG_PATHS.stat, SVG_PATHS.stat],
    text: 'Statistics',
    variant: 'stat',
  },

  {
    paths: [SVG_PATHS.favor, SVG_PATHS.favorActive],
    text: 'Favorites',
    variant: 'favor',
  },
]

export const iconsFooter: Array<IconsType> = [
  {
    paths: [SVG_PATHS.logout, SVG_PATHS.logout],
    text: 'Log Out',
    variant: 'logout',
  },
]
