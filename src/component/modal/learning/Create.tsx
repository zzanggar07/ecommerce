import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { action, observable } from 'mobx'

import Modal from 'react-bootstrap4-modal'
import Select from 'react-select'
import Toast from '../../../utils/Toast'
import {
   CREATE_LEARNING_ITEM,
   CREATE_LEARNING_ITEM_PROPS,
} from '../../../Constants'
import { isEmpty } from '../../../utils/Utility'

@inject((stores: any) => ({
   modal: stores.modal.learning.create.modal,
   hideDialog: stores.modal.learning.create.hideDialog,
}))
@observer
export default class Create extends React.Component<any, {}> {

   @observable tabIndex = 0
   @observable isWorking = false

   @observable firstStepMap = new Map().set(CREATE_LEARNING_ITEM.TYPE, {
      value: null,
   })

   @observable secondStepMap = new Map()
      .set(CREATE_LEARNING_ITEM.NAME, { value: null })
      .set(CREATE_LEARNING_ITEM.MODEL, { value: null })
      .set(CREATE_LEARNING_ITEM.DATASET, { value: null })
      .set(CREATE_LEARNING_ITEM.BATCH, { value: null })
      .set(CREATE_LEARNING_ITEM.EPOCH, { value: null })
      .set(CREATE_LEARNING_ITEM.GPU, { value: null })

   private toast: Toast

   @action
   setTabIndex = (selectTabIndex: number) => {
      this['tabIndex'] = selectTabIndex
   }

   @action
   onSelectLearningType = (selectedOption: any) => {
      this['firstStepMap'].set(CREATE_LEARNING_ITEM.TYPE, {
         value: selectedOption,
      })
   }

   @action
   onChangeSaveModelName = (e: any) => {
      this['secondStepMap'].set(CREATE_LEARNING_ITEM.NAME, {
         value: e.target.value,
      })
   }

   @action
   onSelectLearningModel = (selectedOption: any) => {
      this['secondStepMap'].set(CREATE_LEARNING_ITEM.MODEL, {
         value: selectedOption,
      })
   }

   @action
   onSelectLearningDataSet = (selectedOption: any) => {
      this['secondStepMap'].set(CREATE_LEARNING_ITEM.DATASET, {
         value: selectedOption,
      })
   }

   @action
   onChangeBatchSize = (e: any) => {
      this['secondStepMap'].set(CREATE_LEARNING_ITEM.BATCH, {
         value: e.target.value,
      })
   }

   @action
   onChangeEpochCount = (e: any) => {
      this['secondStepMap'].set(CREATE_LEARNING_ITEM.EPOCH, {
         value: e.target.value,
      })
   }

   @action
   onChangeAssignGpu = (e: any) => {
      this['secondStepMap'].set(CREATE_LEARNING_ITEM.GPU, {
         value: e.target.value,
      })
   }

   validateFirstStep = () => {
      return !isEmpty(this.firstStepMap.get(CREATE_LEARNING_ITEM.TYPE).value)
   }

   validateSecondStep = () => {
      return (
         !isEmpty(this.secondStepMap.get(CREATE_LEARNING_ITEM.NAME).value) &&
         !isEmpty(this.secondStepMap.get(CREATE_LEARNING_ITEM.MODEL).value) &&
         !isEmpty(this.secondStepMap.get(CREATE_LEARNING_ITEM.DATASET).value) &&
         !isEmpty(this.secondStepMap.get(CREATE_LEARNING_ITEM.BATCH).value) &&
         !isEmpty(this.secondStepMap.get(CREATE_LEARNING_ITEM.EPOCH).value) &&
         !isEmpty(this.secondStepMap.get(CREATE_LEARNING_ITEM.GPU).value)
      )
   }

   showNullValueCheckMsg = (stepMap: Map<string, any>) => {
      if (this.toast) {
         for (const key of stepMap.keys()) {
            if (isEmpty(stepMap.get(key).value)) {
               this.toast.showWarning(
                  '값 체크',
                  CREATE_LEARNING_ITEM_PROPS.get(key).errorMsg,
               )
               break
            }
         }
      }
   }

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
                        <h5 className="modal-title">K.A.I.M 학습 생성</h5>
                        <button
                           type="button"
                           className="btn-closed"
                           onClick={() => {
                              props
                                 .hideDialog()
                                 .then((r: any) =>
                                    this.toast.showInfo(
                                       '토스트',
                                       '모달을 닫습니다.',
                                    ),
                                 )
                           }}
                        />
                     </div>
                     <div className="modal-body modal-step">
                        <div className="tab">
                           <ul>
                              <li
                                 className={this.tabIndex === 0 ? 'on' : ''}
                                 onClick={(e) => {
                                    this.setTabIndex(0)
                                 }}
                              >
                                 <small>1</small> 학습유형 선택
                              </li>
                              <li
                                 className={
                                    this.validateFirstStep() &&
                                    this.tabIndex === 1
                                       ? 'on'
                                       : ''
                                 }
                                 onClick={(e) => {
                                    this.validateFirstStep()
                                       ? this.setTabIndex(1)
                                       : this.showNullValueCheckMsg(
                                            this.firstStepMap,
                                         )
                                 }}
                              >
                                 <small>2</small> 작업 모델 설정
                              </li>
                              <li
                                 className={
                                    this.validateSecondStep() &&
                                    this.tabIndex === 2
                                       ? 'on'
                                       : ''
                                 }
                                 onClick={(e) => {
                                    this.validateSecondStep()
                                       ? this.setTabIndex(2)
                                       : this.showNullValueCheckMsg(
                                            this.secondStepMap,
                                         )
                                 }}
                              >
                                 <small>3</small> 최종 확인
                              </li>
                           </ul>
                        </div>
                        <div className="tab-content">
                           {this.tabIndex === 0 && this.renderStep1()}
                           {this.tabIndex === 1 && this.renderStep2()}
                           {this.tabIndex === 2 && this.renderStep3()}
                        </div>
                        <div className="tab-button">
                           {this.tabIndex > 0 && (
                              <button
                                 type="button"
                                 disabled={!this.validateFirstStep()}
                                 className="btn btn-default"
                                 onClick={() => {
                                    this.setTabIndex(this.tabIndex - 1)
                                 }}
                              >
                                 이전
                              </button>
                           )}
                           {this.tabIndex < 2 && (
                              <button
                                 type="button"
                                 disabled={
                                    !(
                                       (this.validateFirstStep() &&
                                          this.tabIndex === 0) ||
                                       (this.validateSecondStep() &&
                                          this.tabIndex === 1)
                                    )
                                 }
                                 className="btn btn-default"
                                 onClick={() => {
                                    this.setTabIndex(this.tabIndex + 1)
                                 }}
                              >
                                 다음
                              </button>
                           )}
                           {this.tabIndex === 2 && (
                              <button
                                 type="button"
                                 disabled={
                                    !(
                                       this.validateFirstStep() &&
                                       this.validateSecondStep()
                                    )
                                 }
                                 className="btn btn-default"
                              >
                                 작업생성
                              </button>
                           )}
                        </div>
                     </div>
                  </div>
               </Modal>
            </React.Fragment>
         )
      })(this.props)
   }

   renderStep1() {
      return (
         <div>
            <dl>
               <dt> 학습 유형</dt>
               <dd>
                  <Select
                     placeholder={'선택하세요'}
                     value={
                        this.firstStepMap.get(CREATE_LEARNING_ITEM.TYPE).value
                     }
                     onChange={this.onSelectLearningType}
                     options={[
                        {
                           label: '이미지 인식',
                           options: [
                              {
                                 value: 'object',
                                 label: '객체 인식',
                              },
                              {
                                 value: 'face',
                                 label: '얼굴 인식',
                              },
                              {
                                 value: 'ip',
                                 label: 'IP 인식',
                              },
                           ],
                        },
                        {
                           label: '음성 인식',
                           options: [
                              {
                                 value: 'stt',
                                 label: 'STT',
                              },
                           ],
                        },
                     ]}
                  />
               </dd>
            </dl>
         </div>
      )
   }

   renderStep2() {
      return (
         <div>
            <dl>
               <dt>저장 모델명</dt>
               <dd>
                  <input
                     type="text"
                     name="model-name"
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.NAME).value
                     }
                     onChange={(e) => this.onChangeSaveModelName(e)}
                  />
               </dd>
            </dl>
            <dl>
               <dt>모델 선택</dt>
               <dd>
                  <Select
                     placeholder={'선택하세요'}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.MODEL).value
                     }
                     onChange={this.onSelectLearningModel}
                     options={[
                        {
                           value: 'facenet',
                           label: 'Facenet',
                        },
                        {
                           value: 'densenet',
                           label: 'DenseNet',
                        },
                     ]}
                  />
               </dd>
            </dl>
            <dl>
               <dt>데이터 셋 선택</dt>
               <dd>
                  <Select
                     placeholder={'선택하세요'}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.DATASET)
                           .value
                     }
                     onChange={this.onSelectLearningDataSet}
                     options={[
                        {
                           value: 'casiasebface',
                           label: 'CASIA-WebFace',
                        },
                     ]}
                  />
               </dd>
            </dl>
            <dl>
               <dt>배치 사이즈</dt>
               <dd>
                  <input
                     type="number"
                     name="batch-size"
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.BATCH).value
                     }
                     onChange={(e) => this.onChangeBatchSize(e)}
                  />
               </dd>
            </dl>
            <dl>
               <dt>에폭 수</dt>
               <dd>
                  <input
                     type="number"
                     name="epoch-count"
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.EPOCH).value
                     }
                     onChange={(e) => this.onChangeEpochCount(e)}
                  />
               </dd>
            </dl>
            <dl>
               <dt>GPU 지정</dt>
               <dd>
                  <input
                     type="number"
                     name="assign-gpu"
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.GPU).value
                     }
                     onChange={(e) => this.onChangeAssignGpu(e)}
                  />
               </dd>
            </dl>
         </div>
      )
   }

   renderStep3() {
      return (
         <div>
            <dl>
               <dt>학습 유형</dt>
               <dd>
                  <input
                     type="text"
                     name="learning-type"
                     readOnly={true}
                     value={
                        this.firstStepMap.get(CREATE_LEARNING_ITEM.TYPE).value
                           .label
                     }
                  />
               </dd>
            </dl>
            <dl>
               <dt>저장 모델명</dt>
               <dd>
                  <input
                     type="text"
                     name="model-name"
                     readOnly={true}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.NAME).value
                     }
                  />
               </dd>
            </dl>
            <dl>
               <dt>모델 선택</dt>
               <dd>
                  <input
                     type="text"
                     name="model"
                     readOnly={true}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.MODEL).value
                           .label
                     }
                  />
               </dd>
            </dl>
            <dl>
               <dt>데이터 셋 선택</dt>
               <dd>
                  <input
                     type="text"
                     name="data-set"
                     readOnly={true}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.DATASET)
                           .value.label
                     }
                  />
               </dd>
            </dl>
            <dl>
               <dt>배치 사이즈</dt>
               <dd>
                  <input
                     type="text"
                     name="batch-size"
                     readOnly={true}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.BATCH).value
                     }
                  />
               </dd>
            </dl>
            <dl>
               <dt>에폭 수</dt>
               <dd>
                  <input
                     type="text"
                     name="epoch-count"
                     readOnly={true}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.EPOCH).value
                     }
                  />
               </dd>
            </dl>
            <dl>
               <dt>GPU 지정</dt>
               <dd>
                  <input
                     type="text"
                     name="assign-gpu"
                     readOnly={true}
                     value={
                        this.secondStepMap.get(CREATE_LEARNING_ITEM.GPU).value
                     }
                  />
               </dd>
            </dl>
         </div>
      )
   }
}
