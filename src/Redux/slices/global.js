import { createSlice } from "@reduxjs/toolkit"

export const globalSlice = createSlice({
   name: "global",
   initialState: { theme: "light" },
   reducers: {
      toggleTheme: (state, action) =>
         action.payload == "light" ? { theme: "dark" } : { theme: "light" }
   }
})

export const { toggleTheme } = globalSlice.actions
export default globalSlice.reducer