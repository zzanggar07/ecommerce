import { types, flow } from 'mobx-state-tree'
import { MAIN_MENU_PROPS, MAIN_MENU } from '../../../Constants'

export const Menu = types.model({
   name: types.string,
   key: types.string,
   title: types.string,
})

export const TabMenu = types
   .model({
      tabMenu: types.frozen(Menu),
   })
   .actions((self: any) => ({
      setTabMenu: flow(function*(tabMenu: any) {
         self.tabMenu = tabMenu
      }),
   }))
   .create({
      tabMenu: {
         name: MAIN_MENU_PROPS.get(MAIN_MENU.SHOP).name,
         key: MAIN_MENU_PROPS.get(MAIN_MENU.SHOP).key,
         title: MAIN_MENU_PROPS.get(MAIN_MENU.SHOP).title,
      },
   })
