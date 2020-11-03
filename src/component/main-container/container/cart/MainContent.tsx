import * as React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { numberWithComma } from '@utils/Utility'
import { COUPON_TYPE_RATE } from '@src/Constants'

@inject((stores: any) => {
   return {
      cart: stores.cart.list,
   }
})

@observer
export default class MainContent extends React.Component<any, {}> {
   componentDidMount() {
      this.props.cart.getCouponList().then((r: any) => {
         console.log("load coupons=" + r)
      })
   }

   render() {
      return <React.Fragment>
         <main>
            {/* Hero Area Start*/}
            <div className="slider-area ">
               <div className="single-slider slider-height2 d-flex align-items-center">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="hero-cap text-center">
                              <h2>Cart List</h2>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/*================Cart Area =================*/}
            <section className="cart_area section_padding">
               <div className="container">
                  <div className="cart_inner">
                     <div className="table-responsive">
                        <table className="table">
                           <thead>
                              <tr>
                                 <th scope="col">&nbsp;</th>
                                 <th scope="col">Product</th>
                                 <th scope="col">Price</th>
                                 <th scope="col">Quantity</th>
                                 <th scope="col">Total</th>
                                 <th scope="col">&nbsp;</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 this.props.cart.result.items.map((item: any) => {
                                    return (
                                       <tr key={item.key}>
                                          <td>
                                             <div className="check_box">
                                                <label className="checkbox-wrap checkbox-primary">
                                                   <input type="checkbox" checked={item.isChecked}
                                                      onClick={(e) => {
                                                         this.props.cart.toggleToBuyProduct(item).then((r: any) => { console.log(r) })
                                                      }} />
                                                   <span className="checkmark"></span>
                                                </label>
                                             </div>
                                          </td>
                                          <td>
                                             <div className="media">
                                                <div className="d-flex">
                                                   <img src={item.coverImage} alt="" />
                                                </div>
                                                <div className="media-body">
                                                   <p>{item.title}</p>
                                                </div>
                                             </div>
                                          </td>
                                          <td>
                                             <h5>{numberWithComma(item.price)}원</h5>
                                          </td>
                                          <td>
                                             <div className="product_count">
                                                <span className="input-number-decrement"
                                                   onClick={(e) => {
                                                      this.props.cart.decreaseQuantity(item).then((r: any) => { console.log(r) })
                                                   }}><i className="ti-minus" /></span>
                                                <input className="input-number" type="text" defaultValue={item.count} value={item.count} min={1} max={10} />
                                                <span className="input-number-increment"
                                                   onClick={(e) => {
                                                      this.props.cart.increaseQuantity(item).then((r: any) => { console.log(r) })
                                                   }}><i className="ti-plus" /></span>
                                             </div>
                                          </td>
                                          <td>
                                             <h5>{numberWithComma(item.price * item.count)}원</h5>
                                          </td>
                                          <td>
                                             <div className="close_box">
                                                <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                                                   onClick={(e) => {
                                                      this.props.cart.removeToCart(item).then((r: any) => { console.log(r) })
                                                   }}>
                                                   <span aria-hidden="true"><i className="fas fa-times" /></span>
                                                </button>
                                             </div>
                                          </td>
                                       </tr>
                                    )
                                 })
                              }

                              <tr className="coupon_area">
                                 <td />
                                 <td />
                                 <td />
                                 <td>
                                    <h5>Coupon </h5>
                                 </td>
                                 <td>
                                    <div className="coupon_box">
                                       <ul className="list">
                                          {
                                             this.props.cart.result.coupons.map((item: any) => {
                                                return (
                                                   <li key={item.type}>
                                                      {item.title}
                                                      <input type="radio" aria-label="Radio button for following text input"
                                                         checked={item.isChecked}
                                                         onClick={(e) => {
                                                            this.props.cart.toggleToCheckCoupon(item).then((r: any) => { console.log(r) })
                                                         }} />
                                                   </li>
                                                )
                                             })
                                          }
                                       </ul>
                                    </div>
                                 </td>
                                 <td />
                              </tr>
                              <tr>
                                 <td colSpan={4} style={{ textAlign: "right" }}>
                                    <h5>총상품 가격:
                                       {numberWithComma(this.props.cart.subTotal)}원 - 총할인:{this.props.cart.totalDiscount}
                                       =
                                       총 주문 가격:{}
                                    </h5>
                                 </td>
                                 <td />
                              </tr>
                           </tbody>
                        </table>
                        <div className="checkout_btn_inner float-right">
                           <Link to="/products" className="btn_1" >Continue Shopping</Link>
                           <a className="btn_1 checkout_btn_1" href="#">Proceed to checkout</a>
                        </div>
                     </div>
                  </div>
               </div></section>
            {/*================End Cart Area =================*/}
         </main>
      </React.Fragment>
   }
}
