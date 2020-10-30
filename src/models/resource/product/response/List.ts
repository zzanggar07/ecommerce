import { flow, types } from 'mobx-state-tree'
import { PRODUCTS } from '@src/Constants'
import {
   Product,
   ProductResData,
   ProductResDataInitialState,
} from '@resource/product/response/ResData.type'

export const List = types
   .model({
      result: types.frozen(ProductResData),
   })
   .actions((self) => ({
      getList: flow(function* () {
         self.result = {
            items: PRODUCTS.map((product: any) =>
               types.frozen(Product).create({
                  id: product.id,
                  title: product.title,
                  coverImage: product.coverImage,
                  price: product.price,
                  score: product.score
               }),
            ),
         }
         return self.result
      }),
      sortByPrice: flow(function* () {
         self.result = {
            items: self.result.items?.slice().sort((a: any, b: any) => {
               if (a.price === b.price) {
                  return 0
               }
               return a.price > b.price ? -1 : 1;
            }),
         }
         return self.result
      }),
      sortByScore: flow(function* () {
         self.result = {
            items: self.result.items?.slice().sort((a: any, b: any) => {
               if (a.score === b.score) {
                  return 0
               }
               return a.score > b.score ? -1 : 1;
            }),
         }
         return self.result
      }),
   }))
   .create({
      result: ProductResDataInitialState,
   })
