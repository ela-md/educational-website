import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name : 'global',
    initialState : {theme : 'light'},
    reducers : {
        toggleTheme : (state, action) => {
          if(action.payload == 'light')
            return {theme : 'dark'}
            else
            return {theme : 'light'}
        }
    }
})

export const { toggleTheme} = globalSlice.actions
export default globalSlice.reducer