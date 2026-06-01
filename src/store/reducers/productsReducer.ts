import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from '@/store/asyncActions/fetchProducts'
import type { ProductType } from '@/@types/ProductType'
import { SortSelectValues } from '@/components/ControlPanel/ControlPanel'

type InitialStateType = {
    products: ProductType[],
    selectedProducts: ProductType[],
    currentProductForInfo: ProductType | null
}

const initialState: InitialStateType = {
    products: [],
    selectedProducts: [],
    currentProductForInfo: null
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        removeProducts: (state) => {
            state.products = []
        },
        removeProductByObject: (state, action): void => {
            const index = state.products.findIndex(p => p.id === action.payload.id)

            if (index !== -1) state.products.splice(index, 1)
        },
        addProductToSelected: (state, action): void => {
            state.selectedProducts.push(action.payload)
        },
        removeProductOfSelected: (state, action): void => {
            const index = state.selectedProducts.findIndex(p => p.id === action.payload.id)

            if (index !== -1) state.selectedProducts.splice(index, 1)
        },
        removeSelectedProducts: (state): void => {
            for (const product of state.selectedProducts) {
                const index = state.products.findIndex(p => p.id === product.id)

                if (index !== -1) state.products.splice(index, 1)
            }

            state.selectedProducts = []
        },
        sortProductsBy: (state, action): void => {
            switch (action.payload) {
                case SortSelectValues.BY_ID:
                    state.products.sort((a, b) => a.id - b.id)
                    break
                case SortSelectValues.BY_QUANTITY:
                    state.products.sort((a, b) => a.count - b.count)
                    break
                case SortSelectValues.BY_PRICE:
                    state.products.sort((a, b) => a.price - b.price)
                    break
            }
        },
        addProduct: (state, action): void => {
            // console.log(action.payload)

            const d = new Date();
            const formattedDate = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

            const newProduct: ProductType = {
                id: state.products.length + 1,
                title: action.payload.title,
                description: action.payload.description,
                count: action.payload.count,
                production_date: formattedDate,
                price: action.payload.price
            }

            state.products.push(newProduct)
        },
        tagCurrentProductForInfo: (state, action): void => {
            state.currentProductForInfo = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action): void => {
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
        removeSelectedProducts,
        sortProductsBy,
        addProduct,
        tagCurrentProductForInfo
    } = productsSlice.actions

export default productsSlice.reducer