import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name : 'global',
    initialState : {theme : 'light'},
    reducers : {
        toggleTheme : (state, action) => {

        }
    }
})

export const { toggleTheme} = globalSlice.actions
export default globalSlice.reducer