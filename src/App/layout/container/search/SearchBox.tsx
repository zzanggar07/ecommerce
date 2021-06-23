import * as React from "react"

export default class SearchBox extends React.Component<any, {}>{
   render() {
      return (
         <React.Fragment>
            <div className="search-model-box">
                  <div className="h-100 d-flex align-items-center justify-content-center">
                     <div className="search-close-btn">+</div>
                     <form className="search-model-form">
                        <input type="text" id="search-input" placeholder="Searching key....." />
                     </form>
                  </div>
               </div>
         </React.Fragment>
      )
   }
}
