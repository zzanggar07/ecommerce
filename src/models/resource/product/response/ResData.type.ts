import { Instance, types } from 'mobx-state-tree'

export const Product = types.model({
   id: types.string,
   title: types.string,
   coverImage: types.string,
   price: types.number,
   score: types.number
})

export const ProductResData = types.model({
   items: types.array(Product),
})

export const ProductResDataInitialState = {
   items: [],
}

export type IProduct = Instance<typeof Product>
