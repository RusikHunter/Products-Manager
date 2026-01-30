import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export type ProductType = {
    id: number;
    title: string;
    description: string;
    count: number;
    production_date: string;
    price: number;
}

const url = "https://697c90fe889a1aecfeb2dbd0.mockapi.io/products"

export const fetchProducts = createAsyncThunk<ProductType[], void, { rejectValue: string }>(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ProductType[]>(url)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error loading posts: ' + (error as Error))
        }
    }
)