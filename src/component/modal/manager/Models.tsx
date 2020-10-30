import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'

import Modal from 'react-bootstrap4-modal'
import Toast from '../../../utils/Toast'
// @ts-ignore
import Files from 'react-files'
// import CSS from 'csstype'
import Select from 'react-select'

@inject((stores: any) => ({
   modal: stores.modal.manager.models.modal,
   hideDialog: stores.modal.manager.models.hideDialog,
}))
@observer
export default class Models extends React.Component<any, {}> {
   @observable isWorking = false

   private toast: Toast

   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <Toast onRef={(ref: Toast) => (this.toast = ref)} />
               <Modal
                  visible={props.modal.isShow}
                  dialogClassName="modal-dialog modal-dialog-centered"
                  onClickBackdrop={() => {
                     props.hideDialog().then((r: any) => {
                        console.log(r)
                        this.toast.showInfo('토스트', '모달을 닫습니다.')
                     })
                  }}
               >
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title">K.A.I.M 학습 모델 등록</h5>
                        <button
                           type="button"
                           className="btn-closed"
                           onClick={() => {
                              props.hideDialog().then((r: any) => {
                                 console.log(r)
                              })
                           }}
                        />
                     </div>
                     <div className={'ribbon'}>학습 모델 등록</div>
                     <div className="modal-body modal-detail">
                        {this.renderContent()}
                     </div>
                     <div className="modal-footer">
                        <button
                           className={'btn btn-default'}
                           onClick={() => {
                              props.hideDialog().then((r: any) => {
                                 console.log(r)
                              })
                           }}
                        >
                           등록
                        </button>
                     </div>
                  </div>
               </Modal>
            </React.Fragment>
         )
      })(this.props)
   }

   renderContent() {
      // const tempStyle: CSS.Properties = {
      //    height: '300px',
      //    overflowY: 'scroll',
      //    paddingRight: '5px',
      // }

      return (
         <div>
            <dl>
               <dt>모델 유형</dt>
               <dd>
                  <Select
                     placeholder={'선택하세요'}
                     options={[
                        {
                           value: '',
                           label: '선택하세요',
                        },
                     ]}
                  />
               </dd>
            </dl>
            <dl>
               <dt>세부 유형</dt>
               <dd>
                  <Select
                     placeholder={'선택하세요'}
                     options={[
                        {
                           value: '',
                           label: '선택하세요',
                        },
                     ]}
                  />
               </dd>
            </dl>
            <dl>
               <dt>모델명</dt>
               <dd>
                  <input type="text" placeholder={'모델명을 입력하시오.'} />
               </dd>
            </dl>
            <dl>
               <dt>Accuracy</dt>
               <dd>
                  <input
                     type="text"
                     placeholder={'모델의 Accuracy를 입력하시오.'}
                  />
               </dd>
            </dl>
            <dl>
               <dt>학습데이터셋명</dt>
               <dd>
                  <input
                     type="text"
                     placeholder={'모델의 학습 데이터셋명을 입력하시오.'}
                  />
               </dd>
            </dl>
            <dl>
               <dt>베이스 모델명</dt>
               <dd>
                  <input
                     type="text"
                     placeholder={'모델의 베이스모델명을 입력하시오.'}
                  />
               </dd>
            </dl>
            <dl>
               <dt>파일 경로</dt>
               <dd>
                  <Files
                     ref="files"
                     className="files-dropzone-list"
                     style={{}}
                     onChange={(files: any) => {
                        // this.files = files
                     }}
                     onError={(
                        error: { code: string; message: string },
                        file: any,
                     ) => {
                        this.toast.showDanger(
                           '파일',
                           'error code ' + error.code + ': ' + error.message,
                        )
                     }}
                     multiple={false}
                     maxFileSize={104857600} // 100MB
                     minFileSize={0}
                     clickable={true}
                     accepts={['.xlsx']}
                  >
                     <div>
                        <i className="fas fa-cloud-upload-alt"></i>
                     </div>
                     <div>파일위치를 추가하시오.</div>
                  </Files>
               </dd>
            </dl>
         </div>
      )
   }
}
