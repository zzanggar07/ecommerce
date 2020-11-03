import { flow, types } from 'mobx-state-tree'

import {
   CartDataInitialState,
   CartResData
} from '@service/cart/CartData.type'

export const List = types
   .model({
      result: types.frozen(CartResData),
   })
   .actions((self) => ({
      addToCart: flow(function* (item:any) {
         const tempArray : any = self.result.items?.slice();
         const idx = self.result.items?.findIndex(function(t) {return t.id === item.id})!
         if (idx === -1) {
            tempArray.push({id:item.id, title:item.title, coverImage:item.coverImage, price:item.price, count:1, isChecked:true});
         }
         self.result = {
            items: tempArray
         }
         return self.result
      }),

      removeToCart: flow(function* (item) {
         const idx = self.result.items?.findIndex(function(t) {return t.id === item.id})!
         const tempArray  = [...self.result.items];
         if (idx > -1) {
            tempArray?.splice(idx, 1)
         }
         
         self.result = {
            items: tempArray
         }

         return self.result
      }),

      increaseCountOfProduct: flow(function* (item) {
         const idx = self.result.items?.findIndex(function(t) {return t.id === item.id})!
         const tempArray  = [...self.result.items];
         if (idx > -1) {
            tempArray[idx].count ++
         }
         
         self.result = {
            items: tempArray
         }

         return self.result
      }),

      decreaseCountOfProduct: flow(function* (item) {
         const idx = self.result.items?.findIndex(function(t) {return t.id === item.id})!
         const tempArray  = [...self.result.items];
         if (idx > -1 && tempArray[idx].count > 1) {
            tempArray[idx].count --
         }
         
         self.result = {
            items: tempArray
         }

         return self.result
      }),

      toggleToBuyProduct: flow(function* (item) {
         const idx = self.result.items?.findIndex(function(t) {return t.id === item.id})!
         const tempArray  = [...self.result.items];
         if (idx > -1 && tempArray[idx].count > 0) {
            tempArray[idx].isChecked = !tempArray[idx].isChecked;
         }
         
         self.result = {
            items: tempArray
         }

         return self.result
      }),
   }))
   .create({
      result: CartDataInitialState,
   })
