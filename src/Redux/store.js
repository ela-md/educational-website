import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cart'
import coursesReducer from './slices/courses'
import globalReducer from './slices/global'


const store = configureStore({
    reducer: {
        cart : cartReducer,
        course : coursesReducer,
        global : globalReducer
    }
})



export default store