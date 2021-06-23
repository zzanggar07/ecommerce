import { inject, observer } from 'mobx-react'
import * as React from 'react'

import { ReactEasyNotify, notify } from 'react-easy-notify'
import 'react-easy-notify/dist/index.css'

import {  NOTIFICATION, LEVEL } from '../../../Constants'

@inject((stores: any) => ({
   notice: stores.common.toast.notice,
}))
@observer
export default class Notification extends React.Component<any, {}> {

   constructor(props: Readonly<{}>) {
      super(props)
   }

   componentWillUpdate(nextProps: { notice: { type: string, level:string, message: {title:string, message:string} } }, nextState: any) {
      const notice = nextProps.notice
      if (notice.type === NOTIFICATION.MESSAGE) {
         this.showMessage(notice.level, notice.message)
      }
   }

   showMessage(level: string, message:any) {
      notify({
         type: LEVEL.get(level).type,
         title: message.title,
         status: true,
         timeout: 5000,
         message: message.content,
         position: 'bottom-right',
         animationType: 'pops-up'
       })
   }

   render() {
      // @ts-ignore
      const { type, level, message } = this.props.notice

      return (
         <div id="toast">
            <ReactEasyNotify />
         </div>
      )
   }
}
