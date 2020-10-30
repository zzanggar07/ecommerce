import { Instance, types } from 'mobx-state-tree'

export const CartItem = types.model({
   id: types.string,
   title: types.string,
   coverImage: types.string,
   price: types.number,
   count: types.number
})

export const CartResData = types.model({
   items: types.array(CartItem),
})

export const CartDataInitialState = {
   items: [],
}

export type ICart = Instance<typeof CartItem>
