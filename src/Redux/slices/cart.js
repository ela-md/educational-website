import { createSlice } from "@reduxjs/toolkit"


const cartSlice = createSlice({
    name : 'cart',
    initialState : {addedToCart : 0, total : 0, addedProducts : []},
    reducers : {
        addToCart : (state , action) => {
            state.addedToCart += 1,
            state.total += action.payload.price,
            state.addedProducts.push(action.payload)

            
        },

        removeFromCart : (state , action) => {

        }

    }
})



export const {addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer