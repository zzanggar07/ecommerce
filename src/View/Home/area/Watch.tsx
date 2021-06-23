import * as React from 'react'
import { Link } from 'react-router-dom'

export default class Watch extends React.Component<any, {}> {
   render() {
      return <React.Fragment>
         <div className="watch-area section-padding30">
            <div className="container">
               <div className="row align-items-center justify-content-between padding-130">
                  <div className="col-lg-5 col-md-6">
                     <div className="watch-details mb-40">
                        <h2>Watch of Choice</h2>
                        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <Link to="/products"><a href="#" className="btn">Show Watches</a></Link>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-10">
                     <div className="choice-watch-img mb-40">
                        <img src="assets/img/gallery/choce_watch1.png" alt="" />
                     </div>
                  </div>
               </div>
               <div className="row align-items-center justify-content-between">
                  <div className="col-lg-6 col-md-6 col-sm-10">
                     <div className="choice-watch-img mb-40">
                        <img src="assets/img/gallery/choce_watch2.png" alt="" />
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-6">
                     <div className="watch-details mb-40">
                        <h2>Watch of Choice</h2>
                        <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <Link to="/products"><a href="#" className="btn">Show Watches</a></Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   }
}
