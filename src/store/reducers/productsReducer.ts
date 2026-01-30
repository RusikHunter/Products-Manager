import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '@/store/asyncActions/fetchProducts'
import type { Product } from '@/store/asyncActions/fetchProducts'

type InitialStateType = {
    products: Product[]
}

const initialState: InitialStateType = {
    products: []
}

const clientSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
    }
})

export default clientSlice.reducer