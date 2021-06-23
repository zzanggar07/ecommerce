import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { observable } from 'mobx'

import Modal from 'react-bootstrap4-modal'

@inject((stores: any) => ({
   modal: stores.modal.learning.logs.modal,
   hideDialog: stores.modal.learning.logs.hideDialog,
}))
@observer
export default class Logs extends React.Component<any, {}> {
   @observable isWorking = false

   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <Modal
                  visible={props.modal.isShow}
                  dialogClassName="modal-dialog modal-dialog-centered"
                  onClickBackdrop={() => {
                     props.hideDialog().then((r: any) => {
                        console.log(r)
                     })
                  }}
               >
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5 className="modal-title">K.A.I.M 학습 모델 로그</h5>
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
                     <div className="modal-body">{this.renderContent()}</div>
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
      return (
         <div className={'log-list'}>
            <ul>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-info-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     DevTools failed to parse SourceMap:
                     http://localhost:8080/static/assets/js/bootstrap.bundle.min.js.map
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-info-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     DevTools failed to parse SourceMap:
                     http://localhost:8080/static/assets/js/bootstrap.bundle.min.js.map
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-info-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     DevTools failed to parse SourceMap:
                     http://localhost:8080/static/assets/js/bootstrap.bundle.min.js.map
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-info-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     DevTools failed to parse SourceMap:
                     http://localhost:8080/static/assets/js/bootstrap.bundle.min.js.map
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-info-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     DevTools failed to parse SourceMap:
                     http://localhost:8080/static/assets/js/bootstrap.bundle.min.js.map
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-exclamation-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     react-dom.development.js?cada:12357 Warning:
                     componentWillMount has been renamed, and is not recommended
                     for use. See
                     https://fb.me/react-unsafe-component-lifecycles for
                     details. * Move code with side effects to
                     componentDidMount, and set initial state in the
                     constructor. * Rename componentWillMount to
                     UNSAFE_componentWillMount to suppress this warning in
                     non-strict mode. In React 17.x, only the UNSAFE_ name will
                     work. To rename all deprecated lifecycles to their new
                     names, you can run `npx react-codemod
                     rename-unsafe-lifecycles` in your project source folder.
                     Please update the following components: _class
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-exclamation-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     react-dom.development.js?cada:12357 Warning:
                     componentWillMount has been renamed, and is not recommended
                     for use. See
                     https://fb.me/react-unsafe-component-lifecycles for
                     details. * Move code with side effects to
                     componentDidMount, and set initial state in the
                     constructor. * Rename componentWillMount to
                     UNSAFE_componentWillMount to suppress this warning in
                     non-strict mode. In React 17.x, only the UNSAFE_ name will
                     work. To rename all deprecated lifecycles to their new
                     names, you can run `npx react-codemod
                     rename-unsafe-lifecycles` in your project source folder.
                     Please update the following components: _class
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-exclamation-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     react-dom.development.js?cada:12357 Warning:
                     componentWillMount has been renamed, and is not recommended
                     for use. See
                     https://fb.me/react-unsafe-component-lifecycles for
                     details. * Move code with side effects to
                     componentDidMount, and set initial state in the
                     constructor. * Rename componentWillMount to
                     UNSAFE_componentWillMount to suppress this warning in
                     non-strict mode. In React 17.x, only the UNSAFE_ name will
                     work. To rename all deprecated lifecycles to their new
                     names, you can run `npx react-codemod
                     rename-unsafe-lifecycles` in your project source folder.
                     Please update the following components: _class
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-exclamation-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     react-dom.development.js?cada:12357 Warning:
                     componentWillMount has been renamed, and is not recommended
                     for use. See
                     https://fb.me/react-unsafe-component-lifecycles for
                     details. * Move code with side effects to
                     componentDidMount, and set initial state in the
                     constructor. * Rename componentWillMount to
                     UNSAFE_componentWillMount to suppress this warning in
                     non-strict mode. In React 17.x, only the UNSAFE_ name will
                     work. To rename all deprecated lifecycles to their new
                     names, you can run `npx react-codemod
                     rename-unsafe-lifecycles` in your project source folder.
                     Please update the following components: _class
                  </p>
               </li>
               <li
                  onClick={(e: any) => {
                     e.currentTarget.classList.toggle('on')
                  }}
               >
                  <i className="fas fa-exclamation-circle"></i>
                  <span>14:09:40.315</span>
                  <p>
                     react-dom.development.js?cada:12357 Warning:
                     componentWillMount has been renamed, and is not recommended
                     for use. See
                     https://fb.me/react-unsafe-component-lifecycles for
                     details. * Move code with side effects to
                     componentDidMount, and set initial state in the
                     constructor. * Rename componentWillMount to
                     UNSAFE_componentWillMount to suppress this warning in
                     non-strict mode. In React 17.x, only the UNSAFE_ name will
                     work. To rename all deprecated lifecycles to their new
                     names, you can run `npx react-codemod
                     rename-unsafe-lifecycles` in your project source folder.
                     Please update the following components: _class
                  </p>
               </li>
            </ul>
         </div>
      )
   }
}
