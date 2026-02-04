import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '@/store/asyncActions/fetchProducts'
import type { ProductType } from '@/store/asyncActions/fetchProducts'

type InitialStateType = {
    products: ProductType[],
    selectedProducts: ProductType[]
}

const initialState: InitialStateType = {
    products: [],
    selectedProducts: []
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        removeProducts: (state) => {
            console.log(123)
            state.products = []
        },
        removeProductByObject: (state, action) => {
            // action.payload must have an product
            const index = state.products.findIndex(p => p.id === action.payload.id)

            if (index !== -1) state.products.splice(index, 1)
        },
        addProductToSelected: (state, action) => {
            state.selectedProducts.push(action.payload)
        },
        // todo -->
        removeProductOfSelected: (state, action) => {
            const index = state.selectedProducts.findIndex(p => p.id === action.payload.id)

            if (index !== -1) state.selectedProducts.splice(index, 1)
        },
        removeSelectedProducts: (state) => {
            for (const product of state.selectedProducts) {
                const index = state.products.findIndex(p => p.id === product.id)

                if (index !== -1) state.products.splice(index, 1)
            }

            state.selectedProducts = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
    }
})

export const
    {
        removeProducts,
        removeProductByObject,
        addProductToSelected,
        removeProductOfSelected,
        removeSelectedProducts
    } = productsSlice.actions

export default productsSlice.reducer