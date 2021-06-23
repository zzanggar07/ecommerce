import * as React from 'react'
import { inject, observer } from 'mobx-react'
// import PopularArea from '@home/area/Popular'
// import GalleryArea from '@home/area/Gallery'
// import VideoArea from '@home/area/Video'
// import NewProductArea from '@home/area/NewProduct'
// import WatchArea from '@home/area/Watch'
// import ShopMethodArea from '@home/area/ShopMethod'

const SliderArea = React.lazy(() => import('@src/View/Home/area/Slider'));
const PopularArea = React.lazy(() => import('@src/View/Home/area/Popular'));
const NewProductArea = React.lazy(() => import('@src/View/Home/area/NewProduct'));
const ShopMethodArea = React.lazy(() => import('@src/View/Home/area/ShopMethod'));

@inject((stores: any) => {
   return {
      products: stores.shop.product.list
   }
})

@observer
export default class Content extends React.Component<any, {}> {

   componentDidMount() {
      const products = this.props.products;
      products.getList().then((r: any) => {
         products.sortByScore().then((a: any) => {
            console.log("load product" + a)
         })
      })
   }

   render() {
      return <React.Fragment>
         <main>
            <SliderArea/>
            <NewProductArea/>
            {/* <GalleryArea/> */}
            <PopularArea/>
            {/* <VideoArea/>*/}
            {/* <WatchArea/> */}
            <ShopMethodArea/>
         </main>
      </React.Fragment>
   }
}
