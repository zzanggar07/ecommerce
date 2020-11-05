import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { numberWithComma } from '@utils/Utility'

@inject((stores: any) => {
   return {
      product: stores.shop.product.list,
   }
})

@observer
export default class NewProduct extends React.Component<any, {}> {
   render() {
      const { product } = this.props;
      return <React.Fragment>
         <section className="new-product-area section-padding30">
            <div className="container">
               {/* Section tittle */}
               <div className="row">
                  <div className="col-xl-12">
                     <div className="section-tittle mb-70">
                        <h2>New Arrivals</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {
                     product.result.items.slice(3, 6).map((item: any) => {
                        return (
                           <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                              <div className="single-new-pro mb-30 text-center">
                                 <div className="product-img">
                                    <img src={item.coverImage} alt="" />
                                 </div>
                                 <div className="product-caption">
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
         </section>
      </React.Fragment>
   }
}
