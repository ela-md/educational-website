import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name : 'cart',
    initialState : {addedToCart : 0, total : 0, addedProducts : []},
    reducers : {
        addToCart : (state , action) => {

        },

        removeFromCart : (state , action) => {

        }

    }
})



export const {addTocart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer