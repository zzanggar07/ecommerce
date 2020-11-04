import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { numberWithComma } from '@utils/Utility'
import Toast from '@utils/Toast'

@inject((stores: any) => {
   return {
      products: stores.shop.product.list,
      cart: stores.cart.list,
   }
})

@observer
export default class MainContent extends React.Component<any, {}> {
   private toast: Toast

   componentDidMount() {
      const products = this.props.products;
      products.getList().then((r: any) => {
         products.sortByPrice().then((a: any) => {
            console.log("load product" + a)
         })
      })
   }

   render() {
      const cart = this.props.cart;
      const toast = this.toast;
      return <React.Fragment>
         <Toast onRef={(ref: Toast) => (this.toast = ref)} />
         <main>
            <div className="slider-area ">
               <div className="single-slider slider-height2 d-flex align-items-center">
                  <div className="container">
                     <div className="row">
                        <div className="col-xl-12">
                           <div className="hero-cap text-center">
                              <h2>Shop</h2>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Hero Area End*/}
            {/* Latest Products Start */}
            <section className="popular-items latest-padding">
               <div className="container">
                  <div className="row product-btn justify-content-between mb-40">
                     <div className="properties__button">
                        {/*Nav Button  */}
                        <nav>
                           <div className="nav nav-tabs" id="nav-tab" role="tablist">
                              <a className="nav-item nav-link active" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false"
                                 onClick={(e) => {
                                    this.props.products.sortByPrice().then((r: any) => {
                                       console.log(r)
                                    })
                                 }}> Price high to low</a>
                              <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false"
                                 onClick={(e) => {
                                    this.props.products.sortByScore().then((r: any) => {
                                       console.log(r)
                                    })
                                 }}> Score high to low </a>
                           </div>
                        </nav>
                        {/*End Nav Button  */}
                     </div>
                     {/* Grid and List view */}
                     <div className="grid-list-view">
                     </div>
                     {/* Select items */}
                     {/* <div className="select-this">
                        <form action="#">
                           <div className="select-itms">
                              <select name="select" id="select1">
                                 <option >40 per page</option>
                                 <option >50 per page</option>
                                 <option >60 per page</option>
                                 <option >70 per page</option>
                              </select>
                           </div>
                        </form>
                     </div> */}
                  </div>
                  {/* Nav Card */}
                  <div className="tab-content" id="nav-tabContent">
                     {/* card one */}
                     <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div className="row">
                           {
                              this.props.products.result.items.map((item: any) => {
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
                                                }}
                                             >
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
                     </div>
                     {/* Card two */}
                     <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <div className="row">
                           {
                              this.props.products.result.items.map((item: any) => {
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
                                                }}
                                             >
                                                {hasCartItem ? <span >Remove to cart</span> : <span >Add to cart</span>}
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
                     </div>
                  </div>
                  {/* End Nav Card */}
               </div>
            </section>
            {/* Latest Products End */}
            {/*? Shop Method Start*/}
            <div className="shop-method-area">
               <div className="container">
                  <div className="method-wrapper">
                     <div className="row d-flex justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="single-method mb-40">
                              <i className="ti-package" />
                              <h6>Free Shipping Method</h6>
                              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="single-method mb-40">
                              <i className="ti-unlock" />
                              <h6>Secure Payment System</h6>
                              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                           <div className="single-method mb-40">
                              <i className="ti-reload" />
                              <h6>Secure Payment System</h6>
                              <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* Shop Method End*/}
         </main>
      </React.Fragment>
   }
}
