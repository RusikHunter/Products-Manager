import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '@/store/asyncActions/fetchProducts'
import type { ProductType } from '@/store/asyncActions/fetchProducts'

type InitialStateType = {
    products: ProductType[]
}

const initialState: InitialStateType = {
    products: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        removeProducts: (state) => {
            console.log(123)
            state.products = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
    }
})

export const { removeProducts } = productsSlice.actions
export default productsSlice.reducer