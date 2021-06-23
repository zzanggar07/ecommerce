import * as React from 'react'
import { inject, observer } from 'mobx-react'

import SliderArea from '@src/View/Cart/area/Slider'
import CartArea from '@src/View/Cart/area/Cart'

@inject((stores: any) => {
   return {
      cart: stores.cart.list,
   }
})

@observer
export default class Content extends React.Component<any, {}> {
   componentDidMount() {
      this.props.cart.getCouponList().then((r: any) => {
         console.log("load coupons=" + r)
      })
   }

   render() {
      return <React.Fragment>
         <main>
            <SliderArea />
            <CartArea />
         </main>
      </React.Fragment>
   }
}
