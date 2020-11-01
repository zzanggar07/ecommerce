import { CommonRootModel } from './service/common'
import { ModalRootModel } from './service/modal'
import { APIRootModel } from './api'
import { HomeRootModel } from './service/home'
import { LearningRootModel } from './service/learning'
import { ManagerRootModel } from './service/manager'
import { ShopResRootModel } from './resource'
import { CartRootModel } from './service/cart'

const Root = {
   common: CommonRootModel,
   api: APIRootModel,
   modal: ModalRootModel,
   home: HomeRootModel,
   learning: LearningRootModel,
   manager: ManagerRootModel,
   shop: ShopResRootModel,
   cart : CartRootModel
}

export default Root
