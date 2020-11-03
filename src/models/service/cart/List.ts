import { flow, types } from 'mobx-state-tree'
import * as _ from "lodash"
import { COUPONS, COUPON_TYPE_RATE } from '@src/Constants'

import {
   Coupon,
   CartDataInitialState,
   CartResData
} from '@service/cart/CartData.type'

export const List = types
   .model({
      result: types.frozen(CartResData),
   })
   .views((self) => ({
      get subTotal() {
         return self.result.items ? self.result.items.filter((d: any) => d.isChecked).reduce((p: any, n: any) => {
            return p + n.price * n.count;
         }, 0) : 0
      },
      get totalDiscount() {
         return self.result.coupons ? self.result.coupons.filter((d: any) => d.isChecked).reduce((p: any, n: any) => {
            const discount = (n.type === COUPON_TYPE_RATE ? n.discount + "%(정액할인)" : n.discount + "원(금액할인)");
            if (p !== "없음") {
               return p + ", " + discount;
            }
            return discount;
         }, "없음") : "쿠폰없음"

      },
      //   get total() {
      //       return self.subTotal - self.discount
      //   },
   }))
   .actions((self) => ({
      getCouponList: flow(function* () {
         self.result = {
            ...self.result,
            coupons: COUPONS.map((coupon: any) =>
               types.frozen(Coupon).create({
                  id: coupon.type,
                  type: coupon.type,
                  title: coupon.title,
                  discount: coupon.discountRate ? coupon.discountRate : coupon.discountAmount,
                  isChecked: false,
               }),
            ),
         }
         return self.result
      }),

      addToCart: flow(function* (item: any) {
         const tempArray: any = self.result.items?.slice();
         const idx = self.result.items?.findIndex(function (t) { return t.id === item.id })!
         if (idx === -1) {
            tempArray.push({ id: item.id, title: item.title, coverImage: item.coverImage, price: item.price, count: 1, isChecked: true });
         }
         self.result = {
            ...self.result,
            items: tempArray
         }
         return self.result
      }),

      removeToCart: flow(function* (item) {
         const idx = self.result.items?.findIndex(function (t) { return t.id === item.id })!
         const tempArray = [...self.result.items];
         if (idx > -1) {
            tempArray?.splice(idx, 1)
         }

         self.result = {
            ...self.result,
            items: tempArray
         }

         return self.result
      }),

      increaseQuantity: flow(function* (item) {
         const idx = self.result.items?.findIndex(function (t) { return t.id === item.id })!
         const tempArray = [...self.result.items];
         if (idx > -1) {
            tempArray[idx].count++
         }

         self.result = {
            ...self.result,
            items: tempArray
         }

         return self.result
      }),

      decreaseQuantity: flow(function* (item) {
         const idx = self.result.items?.findIndex(function (t) { return t.id === item.id })!
         const tempArray = [...self.result.items];
         if (idx > -1 && tempArray[idx].count > 1) {
            tempArray[idx].count--
         }

         self.result = {
            ...self.result,
            items: tempArray
         }

         return self.result
      }),

      toggleToBuyProduct: flow(function* (item) {
         const idx = self.result.items?.findIndex(function (t) { return t.id === item.id })!
         const tempArray = [...self.result.items];
         if (idx > -1 && tempArray[idx].count > 0) {
            tempArray[idx].isChecked = !tempArray[idx].isChecked;
         }

         self.result = {
            ...self.result,
            items: tempArray
         }

         return self.result
      }),

      toggleToCheckCoupon: flow(function* (item) {
         const idx = self.result.coupons?.findIndex(function (t) { return t.id === item.id })!
         const tempArray = _.cloneDeep(self.result.coupons);
         if (idx > -1 && tempArray) {
            tempArray[idx].isChecked = !tempArray[idx].isChecked;
         }

         self.result = {
            ...self.result,
            coupons: tempArray
         }

         return self.result
      }),
   }))
   .create({
      result: CartDataInitialState,
   })
