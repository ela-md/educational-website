import { configureStore } from "@reduxjs/toolkit";

import cart from './slices/cart'
import courses from './slices/courses'
import global from './slices/global'
import course from './slices/course'

const store = configureStore({
    reducer: {
        cart,
       courses,
       global,
       course
       
    }
})

export default store