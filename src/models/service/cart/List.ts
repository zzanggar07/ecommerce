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
            return p + n.product.price * n.quantity;
         }, 0) : 0
      },
      get count() {
         return self.result.items ? self.result.items.length : 0
      },
      get isCouponAvailable() {
         const checkedProduct = self.result.items?.filter((d: any) => d.isChecked);
         if (checkedProduct?.length === 0 || checkedProduct?.filter((d: any) => !d.product.availableCoupon).length === checkedProduct?.length) {
            return false
         }

         return true;
      },
      get displayDicount() {
         if (!this.isCouponAvailable) {
            return "쿠폰사용 불가"
         }

         return self.result.coupons?.filter((d: any) => d.isChecked).reduce((p: any, n: any) => {
            const discount = (n.type === COUPON_TYPE_RATE ? n.discount + "%(정액할인)" : n.discount + "원(금액할인)");
            if (p !== "없음") {
               return p + ", " + discount;
            }
            return discount;
         }, "없음")
      },
      get total() {
         let total = 0;
         let discount = 0;

         // 쿠폰사용 가능
         const availableCouponPrice = self.result.items?.filter((d: any) => d.isChecked).filter((d: any) => d.product.availableCoupon).reduce((p: any, n: any) => {
            return p + n.product.price * n.quantity;
         }, 0)


         self.result.coupons?.filter((d: any) => d.isChecked).forEach(coupon => {
            if (coupon.type === COUPON_TYPE_RATE) {
               discount += (availableCouponPrice * coupon.discount / 100);
            } else {
               discount += coupon.discount;
            }
         });

         if (availableCouponPrice > 0) {
            total += (availableCouponPrice - discount);
         }

         // 쿠폰사용 불가
         self.result.items?.filter((d: any) => d.isChecked).filter((d: any) => !d.product.availableCoupon).forEach((item: any) => {
            total += (item.product.price * item.quantity);
         })

         return total;
      },
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

      addToCart: flow(function* (item) {
         const tempArray = _.cloneDeep(self.result.items);
         const idx = self.result.items?.findIndex(function (t: any) {
            return t.product.id === item.id
         })
         if (idx === -1 && tempArray) {
            tempArray.push({ product: { ...item }, quantity: 1, isChecked: true });
         }

         self.result = {
            ...self.result,
            items: tempArray
         }

         return self.result
      }),

      removeToCart: flow(function* (id) {
         const idx = self.result.items?.findIndex(function (t: any) { return t.product.id === id })!
         const tempArray = _.cloneDeep(self.result.items);
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
         const idx = self.result.items?.findIndex(function (t: any) { return t.product.id === item.product.id })!
         const tempArray = _.cloneDeep(self.result.items)!;
         if (idx > -1 && tempArray[idx]) {
            tempArray[idx].quantity = ++tempArray[idx].quantity!;
         }

         self.result = {
            ...self.result,
            items: tempArray
         }

         return self.result
      }),

      decreaseQuantity: flow(function* (item) {
         const idx = self.result.items?.findIndex(function (t: any) { return t.product.id === item.product.id })!
         const tempArray = _.cloneDeep(self.result.items)!;
         if (idx > -1 && tempArray[idx].quantity! > 1) {
            tempArray[idx].quantity = --tempArray[idx].quantity!;
         }

         self.result = {
            ...self.result,
            items: tempArray
         }

         return self.result
      }),

      toggleToBuyProduct: flow(function* (item) {
         const idx = self.result.items?.findIndex(function (t: any) { return t.product.id === item.product.id })!
         const itemsTempArray = [...self.result.items];
         if (idx > -1 && itemsTempArray[idx].quantity! > 0) {
            itemsTempArray[idx].isChecked = !itemsTempArray[idx].isChecked;
         }

         // 쿠폰 선택 초기화
         const couponTempArray = _.cloneDeep(self.result.coupons);
         couponTempArray?.forEach(function (coupon, index, array) {
            array[index].isChecked = false;
         });

         self.result = {
            ...self.result,
            items: itemsTempArray,
            coupons: couponTempArray,
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
