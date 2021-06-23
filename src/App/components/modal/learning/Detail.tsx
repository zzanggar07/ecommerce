import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'

import Modal from 'react-bootstrap4-modal'
import CSS from 'csstype'

@inject((stores: any) => ({
   modal: stores.modal.learning.detail.modal,
   hideDialog: stores.modal.learning.detail.hideDialog,
}))
@observer
export default class Detail extends React.Component<any, {}> {
   @observable isWorking = false

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
                     })
                  }}
               >
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title">K.A.I.M 학습 모델 상세</h5>
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
                        <div className="row">
                           <div className="col-7">{this.renderLeft()}</div>
                           <div className="col-5">{this.renderRight()}</div>
                        </div>
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

   renderLeft() {
      return (
         <div>
            <dl>
               <dt>유형</dt>
               <dd>
                  <input type="text" name="model-name" />
               </dd>
            </dl>
            <dl>
               <dt>사용 모델명</dt>
               <dd>
                  <input type="text" name="model-name" />
               </dd>
            </dl>
            <dl>
               <dt>데이터 셋</dt>
               <dd>
                  <input type="text" name="model-name" />
               </dd>
            </dl>
            <dl>
               <dt></dt>
               <dd>
                  <dl>
                     <dt>클래스수</dt>
                     <dd>
                        <input type="text" name="model-name" value={'10'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>학습데이터수</dt>
                     <dd>
                        <input type="text" name="model-name" value={'7,000'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>검증데이터수</dt>
                     <dd>
                        <input type="text" name="model-name" value={'2,000'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>테스트데이터수</dt>
                     <dd>
                        <input type="text" name="model-name" value={'1,000'} />
                     </dd>
                  </dl>
               </dd>
            </dl>
            <dl>
               <dt>배치 사이즈</dt>
               <dd>
                  <input type="text" name="model-name" />
               </dd>
            </dl>
            <dl>
               <dt>에폭 수</dt>
               <dd>
                  <input type="text" name="model-name" />
               </dd>
            </dl>
         </div>
      )
   }

   renderRight() {
      const tempStyle: CSS.Properties = {
         height: '250px',
         overflowY: 'scroll',
         paddingRight: '5px',
      }

      return (
         <div>
            <p>평가 결과</p>
            <dl>
               <dt></dt>
               <dd>
                  <dl>
                     <dt>Accuracy</dt>
                     <dd>
                        <input type="text" name="model-name" value="98%" />
                     </dd>
                  </dl>
                  <dl>
                     <dt>Precision</dt>
                     <dd>
                        <input type="text" name="model-name" value={'100%'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>Recall</dt>
                     <dd>
                        <input type="text" name="model-name" value={'98%'} />
                     </dd>
                  </dl>
               </dd>
            </dl>

            <p>클래스 별 결과</p>
            <dl style={tempStyle}>
               <dt></dt>
               <dd>
                  <dl>
                     <dt>오해영1</dt>
                     <dd>
                        <input type="text" name="model-name" value={'98%'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>오해영2</dt>
                     <dd>
                        <input type="text" name="model-name" value={'100%'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>덕이</dt>
                     <dd>
                        <input type="text" name="model-name" value={'100%'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>도경</dt>
                     <dd>
                        <input type="text" name="model-name" value={'100%'} />
                     </dd>
                  </dl>
                  <dl>
                     <dt>수경</dt>
                     <dd>
                        <input type="text" name="model-name" value={'98%'} />
                     </dd>
                  </dl>
               </dd>
            </dl>
         </div>
      )
   }
}
