import type { RouteLocationRaw } from 'vue-router'
import {
  AwesomeLayoutPageNavbarMenu,
  AwesomeLayoutPageNavbarMenuDropdownItem,
} from './types'
import { NuxtApp } from '#app'

export interface NuxtAwesomeAppConfig {
  /** title name */
  name?: string
  /** description */
  description?: string

  /** project config */
  project?: {
    /** links */
    links?: {
      /** project github link */
      github?: string
    }
  }

  /** layout config */
  layout?: {
    /** page layout */
    page?: {
      /** navbar */
      navbar?: {
        /** menus in navbar */
        menus?: AwesomeLayoutPageNavbarMenu[]
      }
    }
    /** footer */
    footer?: {
      /** footer year */
      year?: number
    }
    /** welcome component page */
    welcome?: {
      title?: string
      disableInfoReplaceIndexInWelcomePage?: boolean
      primaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
      secondaryActionButton?: {
        title?: string
        to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
      }
    }
  }

  /** author config */
  author?: {
    /** author name */
    name?: string
    /** author links */
    links?: {
      /** author github link */
      github?: string
      /** author medium link */
      medium?: string
      /** author website link */
      website?: string
    }
  }

  /** author config */
  disableInfoReplaceIndexInWelcomePage?: boolean
}

declare module '@nuxt/schema' {
  interface AppConfigInput {
    austin?: NuxtAwesomeAppConfig
  }
}

export default defineAppConfig({
  austin: {
    name: 'Nuxt Bun Starter',
    description:
      'BunJs Nuxt 3 template and boilerplate with a lot of useful features. Nuxt 3 + Tailwindcss + Nuxt Layer',
    project: {
      links: {
        github: 'https://github.com/devhoangkien/nuxt-bun-starter',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt Bun Starter',
        disableInfoReplaceIndexInWelcomePage: true,
        primaryActionButton: {
          title: 'Nuxt 3',
          to: 'https://nuxt.com/',
        },
        secondaryActionButton: {
          title: 'Github',
          to: 'https://github.com/devhoangkien/nuxt-bun-starter',
        },
      },
    },
    author: {
      name: 'devhoangkien',
      links: {
        github: 'https://github.com/devhoangkien',
        medium: 'https://devhoangkien.com',
        website: 'https://devhoangkien.com',
      },
    },
    disableInfoReplaceIndexInWelcomePage: false,
  } as NuxtAwesomeAppConfig,
  nuxtIcon: {
    aliases: {},
    class: '',
    size: '1em',
  },
})