import { createAsyncThunk } from '@reduxjs/toolkit'
import productsURL from '@/config/productsURL';
import type { ProductType } from '@/@types/ProductType';
import axios from 'axios'

export const fetchProducts = createAsyncThunk<ProductType[], void, { rejectValue: string }>(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<ProductType[]>(productsURL)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Error loading posts: ' + (error as Error))
        }
    }
)