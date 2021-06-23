import { flow, types } from 'mobx-state-tree'
import { Menu } from '../common/Menu'
import { SUB_MENU_MANAGER_PROPS, SUB_MENU_MANAGER } from '../../../Constants'

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
         name: SUB_MENU_MANAGER_PROPS.get(SUB_MENU_MANAGER.LEARNING_TYPE).name,
         key: SUB_MENU_MANAGER_PROPS.get(SUB_MENU_MANAGER.LEARNING_TYPE).key,
         title: SUB_MENU_MANAGER_PROPS.get(SUB_MENU_MANAGER.LEARNING_TYPE)
            .title,
      },
   })
