import * as React from 'react'
import ModalDeleteOfCustomer from './customer/Delete'
import ModalCreateOfLearning from './learning/Create'
import ModalDetailOfLearning from './learning/Detail'
import ModalLogsOfLearning from './learning/Logs'
import ModalTestsOfLearning from './learning/Tests'
import ModalModelsOfManager from './manager/Models'

export default class ModalWrapper extends React.Component<any, {}> {
   render() {
      return (
         <React.Fragment>
            <ModalDeleteOfCustomer />
            <ModalCreateOfLearning />
            <ModalDetailOfLearning />
            <ModalLogsOfLearning />
            <ModalTestsOfLearning />
            <ModalModelsOfManager />
         </React.Fragment>
      )
   }
}
