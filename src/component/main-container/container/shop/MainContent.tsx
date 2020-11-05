import * as React from 'react'
import { inject, observer } from 'mobx-react'
import SliderArea from '@shop/area/Slider'
import ProductArea from '@shop/area/Product'
import ShopMethodArea from '@shop/area/ShopMethod'

@inject((stores: any) => {
   return {
      product: stores.shop.product.list,
   }
})

@observer
export default class MainContent extends React.Component<any, {}> {
   componentDidMount() {
      const { product } = this.props;
      product.getList().then((r: any) => {
         product.sortByPrice().then((a: any) => {
            console.log("load product" + a)
         })
      })
   }

   render() {
      return <React.Fragment>
         <main>
            <SliderArea />
            <ProductArea />
            <ShopMethodArea />
         </main>
      </React.Fragment>
   }
}
