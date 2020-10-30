import * as React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import { MAIN_MENU_PROPS, MAIN_MENU } from '@src/Constants'

@inject((stores: any) => {
   return {
      cart: stores.cart.list
   }
})

@observer
export default class TopMenu extends React.Component<any, {}> {
   render() {
      const { pathname } = this.props.location ? this.props.location : this.props
      return (
         <header>
            {/* Header Start */}
            <div className="header-area">
               <div className="main-header header-sticky">
                  <div className="container-fluid">
                     <div className="menu-wrapper">
                        {/* Logo */}
                        <div className="logo">
                           <Link to="/"><img src="assets/img/logo/logo.png" alt="" /></Link>
                        </div>
                        {/* Main-menu */}
                        <div className="main-menu d-none d-lg-block">
                           <nav>
                              <ul id="navigation">
                                 <li>
                                    <Link to="/"><span
                                       style={{
                                          color: pathname === MAIN_MENU_PROPS.get(MAIN_MENU.HOME).pathName ? "red" : "black"
                                       }}
                                    >{MAIN_MENU_PROPS.get(MAIN_MENU.HOME).title}</span></Link>
                                 </li>
                                 <li>
                                    <Link to="/products">
                                       <span
                                          style={{
                                             color: pathname === MAIN_MENU_PROPS.get(MAIN_MENU.SHOP).pathName ? "red" : "black"
                                          }}>{MAIN_MENU_PROPS.get(MAIN_MENU.SHOP).title}</span>
                                    </Link>
                                 </li>
                                 <li>
                                    <Link to="/cart"><span
                                       style={{
                                          color: pathname === MAIN_MENU_PROPS.get(MAIN_MENU.CART).pathName ? "red" : "black"
                                       }}>{MAIN_MENU_PROPS.get(MAIN_MENU.CART).title}</span></Link>
                                 </li>
                                 <li>
                                    <Link to="/contact"><span
                                       style={{
                                          color: pathname === MAIN_MENU_PROPS.get(MAIN_MENU.CONTACT).pathName ? "red" : "black"
                                       }}>{MAIN_MENU_PROPS.get(MAIN_MENU.CONTACT).title}</span></Link>
                                 </li>
                                 {/* <li><a href="#">Pages</a>
                                       <ul className="submenu">
                                          <li><a href="login.html">Login</a></li>
                                          <li><a href="cart.html">Cart</a></li>
                                          <li><a href="elements.html">Element</a></li>
                                          <li><a href="confirmation.html">Confirmation</a></li>
                                          <li><a href="checkout.html">Product Checkout</a></li>
                                       </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li> */}
                              </ul>
                           </nav>
                        </div>
                        {/* Header Right */}
                        <div className="header-right">
                           <ul>
                              {/* <li>
                                    <div className="nav-search search-switch">
                                       <span className="flaticon-search" />
                                    </div>
                                 </li> */}
                              <li>
                                 <Link to="/login"><span className="flaticon-user" style={{
                                    color: pathname === MAIN_MENU_PROPS.get(MAIN_MENU.LOGIN).pathName ? "red" : "#752626"
                                 }} /></Link>
                              </li>
                              <li>
                                 <Link to="/cart"><span className="flaticon-shopping-cart" style={{
                                    color: pathname === MAIN_MENU_PROPS.get(MAIN_MENU.CART).pathName ? "red" : "#752626"
                                 }}><span style={{ fontSize: "12px", paddingLeft: "3px" }}>[ {this.props.cart.result.items.length} ]</span></span></Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     {/* Mobile Menu */}
                     <div className="col-12">
                        <div className="mobile_menu d-block d-lg-none" />
                     </div>
                  </div>
               </div>
            </div>
            {/* Header End */}
         </header>
      )
   }
}
