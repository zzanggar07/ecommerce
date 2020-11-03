import { Instance, types } from 'mobx-state-tree'

export const Coupon = types.model({
   id:types.string,
   type: types.string,
   title: types.string,
   discount: types.number,
   isChecked:types.boolean
})

export const CartItem = types.model({
   id: types.string,
   title: types.string,
   coverImage: types.string,
   price: types.number,
   count: types.number,
   isChecked: types.boolean
})

export const CartResData = types.model({
   items: types.array(CartItem),
   coupons:types.array(Coupon),
})

export const CartDataInitialState = {
   items: [],
   coupons: [],
}

export type ICart = Instance<typeof CartItem>
