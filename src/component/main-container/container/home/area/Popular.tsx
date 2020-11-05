import * as React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject((stores: any) => {
   return {
      products: stores.shop.product.list,
      cart: stores.cart.list,
   }
})

@observer
export default class Popular extends React.Component<any, {}> {

   render() {
      return <React.Fragment>
         <div className="popular-items section-padding30">
            <div className="container">
               {/* Section tittle */}
               <div className="row justify-content-center">
                  <div className="col-xl-7 col-lg-8 col-md-10">
                     <div className="section-tittle mb-70 text-center">
                        <h2>Popular Items</h2>
                        <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     this.props.products.result.items.map((item: any) => {
                        return (
                           <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                              <div className="single-popular-items mb-50 text-center">
                                 <div className="popular-img">
                                    <img src="assets/img/gallery/popular1.png" alt="" />
                                    <div className="img-cap">
                                       <span>Add to cart</span>
                                    </div>
                                    <div className="favorit-items">
                                       <span className="flaticon-heart" />
                                    </div>
                                 </div>
                                 <div className="popular-caption">
                                    <h3><a href="product_details.html">Thermo Ball Etip Gloves</a></h3>
                                    <span>$ 45,743</span>
                                 </div>
                              </div>
                           </div>
                        )
                     })
                  }
               </div>
               {/* Button */}
               <div className="row justify-content-center">
                  <div className="room-btn pt-70">
                     <Link to="/products"><a href="#" className="btn view-btn1">View More Products</a></Link>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   }
}
