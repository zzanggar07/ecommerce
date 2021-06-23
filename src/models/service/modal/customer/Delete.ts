import { flow, types } from 'mobx-state-tree'
import { Modal, ModalInitialState } from '../types/modal.type'

export const Delete = types
   .model({
      modal: types.frozen(Modal),
   })
   .actions((self: any) => ({
      showDialog: flow(function*(resource: any) {
         self.modal = { isShow: true, resource }
      }),
      hideDialog: flow(function*() {
         self.modal = { isShow: false, resource: {} }

         return 'test'
      }),
   }))
   .create({
      modal: ModalInitialState,
   })
