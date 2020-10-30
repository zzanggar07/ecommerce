import { types } from 'mobx-state-tree'
import { LEVEL_TYPE, NOTIFICATION } from '../../../Constants'

export const Message = types.model({
   title: types.string,
   content: types.string
})

export const Notice = types.model({
   type: types.string,
   level: types.string,
   message: types.frozen(Message),
})

export const Toast = types
   .model({
      notice: types.frozen(Notice),
   })
   .actions((self: any) => ({
      sendMessage(notice: {type:string, level:string, message:{title:string, content:string}}) {
         self.notice = {type:notice.type, level:notice.level, message:{title:notice.message.title?? '', content:notice.message.content?? ''}}
      },
   }))
   .create({
      notice: {
         type: NOTIFICATION.MESSAGE,
         level: LEVEL_TYPE.INFO,
         message: {title:'', content:''},
      },
   })
