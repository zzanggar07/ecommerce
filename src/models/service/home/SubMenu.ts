import { flow, types } from 'mobx-state-tree'
import { Menu } from '../common/Menu'
import { SUB_MENU_HOME_PROPS, SUB_MENU_HOME } from '../../../Constants'

export const SubTabMenu = types
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
         name: SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.DASHBOARD).name,
         key: SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.DASHBOARD).key,
         title: SUB_MENU_HOME_PROPS.get(SUB_MENU_HOME.DASHBOARD).title,
      },
   })
