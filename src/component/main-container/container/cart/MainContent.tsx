import * as React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { numberWithComma } from '@utils/Utility'

@inject((stores: any) => {
   return {
      cart: stores.cart.list,
   }
})

@observer
export default class MainContent extends React.Component<any, {}> {
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
                                                   <input type="checkbox" />
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
                                                <span className="input-number-decrement"> <i className="ti-minus" /></span>
                                                <input className="input-number" type="text" defaultValue={item.count} min={1} max={10} />
                                                <span className="input-number-increment"> <i className="ti-plus" /></span>
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
                                          <li>
                                             Flat Rate: $5.00
                                             <input type="radio" aria-label="Radio button for following text input" />
                                          </li>
                                          <li>
                                             Free Shipping
                                             <input type="radio" aria-label="Radio button for following text input" />
                                          </li>
                                          <li>
                                             Flat Rate: $10.00
                                             <input type="radio" aria-label="Radio button for following text input" />
                                          </li>
                                          <li className="active">
                                             Local Delivery: $2.00
                                             <input type="radio" aria-label="Radio button for following text input" />
                                          </li>
                                       </ul>
                                    </div>
                                 </td>
                                 <td />
                              </tr>
                              <tr>
                                 <td />
                                 <td />
                                 <td />
                                 <td>
                                    <h5>Subtotal</h5>
                                 </td>
                                 <td>
                                    <h5>$2160.00</h5>
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
