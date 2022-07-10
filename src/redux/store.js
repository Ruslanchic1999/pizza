import {configureStore} from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
    reducer: {
        filterSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})

console.log(store)