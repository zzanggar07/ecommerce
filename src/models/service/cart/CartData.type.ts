import { Instance, types } from 'mobx-state-tree'

export const Coupon = types.model({
   id:types.string,
   type: types.string,
   title: types.string,
   discount: types.number,
   isChecked:types.boolean
})

import {
   Product,
} from '@resource/product/response/ResData.type'

export const CartEntry = types
    .model("CartEntry", {
        quantity: types.optional(types.number, 1),
        isChecked: types.optional(types.boolean, true),
        product: Product
    })


export const CartResData = types.model({
   items: types.array(CartEntry),
   coupons:types.array(Coupon),
})

export const CartDataInitialState = {
   items: [],
   coupons: [],
}

export type ICart = Instance<typeof CartEntry>
