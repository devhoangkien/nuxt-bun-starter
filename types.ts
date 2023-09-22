import { NuxtApp } from '#app'
import { RouteLocationRaw } from '#vue-router'

export interface LayoutPageNavbarMenuDropdownItem {
  type?: 'link'
  title?: string | ((nuxt: NuxtApp) => string)
  to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
}

export interface LayoutPageNavbarMenu {
  type?: 'link' | 'button' | 'dropdown'
  title?: string | ((nuxt: NuxtApp) => string)
  to?: RouteLocationRaw | ((nuxt: NuxtApp) => RouteLocationRaw)
  children?: LayoutPageNavbarMenuDropdownItem[]
}