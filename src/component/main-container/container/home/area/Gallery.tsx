import * as React from 'react'
import { inject, observer } from 'mobx-react'

@inject((stores: any) => {
   return {
      products: stores.shop.product.list,
      cart: stores.cart.list,
   }
})

@observer
export default class Gallery extends React.Component<any, {}> {
   render() {
      return <React.Fragment>
         <div className="gallery-area">
            <div className="container-fluid p-0 fix">
               <div className="row">
                  <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                     <div className="single-gallery mb-30">
                        <div className="gallery-img big-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery1.png)' }} />
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                     <div className="single-gallery mb-30">
                        <div className="gallery-img big-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery2.png)' }} />
                     </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-12">
                     <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                           <div className="single-gallery mb-30">
                              <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery3.png)' }} />
                           </div>
                        </div>
                        <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                           <div className="single-gallery mb-30">
                              <div className="gallery-img small-img" style={{ backgroundImage: 'url(assets/img/gallery/gallery4.png)' }} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   }
}
