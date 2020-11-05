import * as React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { numberWithComma } from '@utils/Utility'
import Toast from '@utils/Toast'

@inject((stores: any) => {
   return {
      product: stores.shop.product.list,
      cart: stores.cart.list,
   }
})

@observer
export default class Popular extends React.Component<any, {}> {
   private toast: Toast
   render() {
      const { cart, product } = this.props;
      const { toast } = this;
      return <React.Fragment>
         <Toast onRef={(ref: Toast) => (this.toast = ref)} />
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
                     product.result.items.slice(0, 6).map((item: any) => {
                        const hasCartItem = cart.result.items?.findIndex(function (t: any) { return t.product.id === item.id })! > -1
                        return (
                           <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                              <div className="single-popular-items mb-50 text-center">
                                 <div className="popular-img">
                                    <img src={item.coverImage} alt="" />
                                    <div className="img-cap"
                                       onClick={(e) => {
                                          hasCartItem ?
                                             cart.removeToCart(item.id).then((r: any) => { console.log(r) }) :
                                             cart.addToCart(item).then((r: any) => {
                                                if (r.items.length > 3) {
                                                   cart.removeToCart(item.id).then((a: any) => {
                                                      console.log(a)
                                                   })
                                                   toast.showDanger('장바구니 오류', '장바구니 최대 갯수는 3개입니다.')
                                                   return
                                                }
                                             })
                                       }}>
                                       {hasCartItem ? <span>Remove to cart</span> : <span >Add to cart</span>}
                                    </div>
                                    <div className="favorit-items">
                                       <span className="flaticon-heart" style={{ color: hasCartItem ? "red" : "black" }} />
                                    </div>
                                 </div>
                                 <div className="popular-caption">
                                    <h3><a href="product_details.html">{item.title}</a></h3>
                                    <span>{numberWithComma(item.price)}원</span>
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
