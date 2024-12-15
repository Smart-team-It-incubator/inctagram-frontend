
import { IconsType, SVG_PATHS } from "./types";

export const icons: Array<IconsType> = [
    {
        mode: "home",
        paths: [SVG_PATHS.home, SVG_PATHS.homeActive],
        text: 'Home'
    },

    {
        mode: "create",
        paths: [SVG_PATHS.create, SVG_PATHS.createActicve],
        text: 'Create'
    },

    {
        mode: "profile",
        paths: [SVG_PATHS.profile, SVG_PATHS.profileActive],
        text: 'Profile'
    },

    {
        mode: "messenger",
        paths: [SVG_PATHS.messenger, SVG_PATHS.messengerActive],
        text: 'Messenger'
    },

    {
        mode: "search",
        paths: [SVG_PATHS.search, SVG_PATHS.searchActive],
        text: 'Search'
    },


    
]