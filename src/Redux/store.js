import { configureStore } from "@reduxjs/toolkit";

import cart from './slices/cart'
import courses from './slices/courses'
import global from './slices/global'

const store = configureStore({
    reducer: {
        cart,
       courses,
       global 
    }
})

export default store