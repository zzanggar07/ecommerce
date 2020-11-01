import { flow, types } from 'mobx-state-tree'
import { COUPONS } from '@src/Constants'
import {
   Coupon,
   CouponResData,
   CouponResDataInitialState,
} from '@resource/coupon/response/ResData.type'

export const List = types
   .model({
      result: types.frozen(CouponResData),
   })
   .actions((self) => ({
      getList: flow(function* () {
         self.result = {
            items: COUPONS.map((coupon: any) =>
               types.frozen(Coupon).create({
                  type: coupon.type,
                  title: coupon.title,
                  discount: coupon.discountRate ? coupon.discountRate: coupon.discountAmount,
               }),
            ),
         }
         return self.result
      }),
   }))
   .create({
      result: CouponResDataInitialState,
   })
