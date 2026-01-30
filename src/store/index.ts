import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '@/store/reducers/productsReducer'


const store = configureStore({
    reducer: {
        client: productsReducer
    },
})

// todo -->
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store