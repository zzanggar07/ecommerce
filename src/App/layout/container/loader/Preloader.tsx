import * as React from "react"
import { inject, observer } from 'mobx-react'

@inject((stores: any) => ({
   menu: stores.common.menu,
}))

@observer
export default class Preloader extends React.Component<any, {}>{
   render() {
      return ((props: any) => {
         return (
            <React.Fragment>
               <div id="preloader-active">
                  <div className="preloader d-flex align-items-center justify-content-center">
                     <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                           <img src="assets/img/logo/logo.png" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </React.Fragment>
         )
      })(this.props)
   }
}
