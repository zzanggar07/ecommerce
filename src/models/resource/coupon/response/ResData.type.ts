import { Instance, types } from 'mobx-state-tree'

export const Coupon = types.model({
   type: types.string,
   title: types.string,
   discount: types.number,
})

export const CouponResData = types.model({
   items: types.array(Coupon),
})

export const CouponResDataInitialState = {
   items: [],
}

export type ICoupon = Instance<typeof Coupon>
