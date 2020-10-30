import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'

import Modal from 'react-bootstrap4-modal'
import CSS from 'csstype'
// @ts-ignore
import Files from 'react-files'
import Toast from '../../../utils/Toast'

@inject((stores: any) => ({
   modal: stores.modal.learning.tests.modal,
   hideDialog: stores.modal.learning.tests.hideDialog,
}))
@observer
export default class Tests extends React.Component<any, {}> {
   @observable isWorking = false

   private toast: Toast

   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <Modal
                  visible={props.modal.isShow}
                  dialogClassName="modal-dialog modal-dialog-centered modal-lg"
                  onClickBackdrop={() => {
                     props.hideDialog().then((r: any) => {
                        console.log(r)
                        this.toast.showInfo('토스트', '모달을 닫습니다.')
                     })
                  }}
               >
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title">
                           K.A.I.M 학습 모델 테스트
                        </h5>
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
                     <div className={'ribbon'}>
                        학습모델명 : <span>faceNet_inceptionv3</span>
                     </div>
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
                           확인
                        </button>
                     </div>
                  </div>
               </Modal>
            </React.Fragment>
         )
      })(this.props)
   }

   renderContent() {
      const tempStyle: CSS.Properties = {
         height: '300px',
         overflowY: 'scroll',
         paddingRight: '5px',
      }

      return (
         <div>
            <p>테스트 정보</p>
            <dl>
               <dt>파일</dt>
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
                     <div>Drop files here or click to upload</div>
                  </Files>
               </dd>
            </dl>
            <p>테스트 결과</p>
            <div className={'row'}>
               <div className={'col-6'}>
                  <dl>
                     <dt>테스트 파일</dt>
                  </dl>
                  <div className={'thumb'}>
                     <img src="" alt="" />
                  </div>
               </div>
               <div className={'col-6'}>
                  <dl>
                     <dt>예측 결과값</dt>
                  </dl>
                  <dl style={tempStyle}>
                     <dt></dt>
                     <dd>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                        <dl>
                           <dt>오해영</dt>
                           <dd>
                              <input type="text" value={'100%'} />
                           </dd>
                        </dl>
                     </dd>
                  </dl>
               </div>
            </div>
         </div>
      )
   }
}
