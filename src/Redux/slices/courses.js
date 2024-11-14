import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchCourses = createAsyncThunk("courses/fetchCoursesStatus", async () => {
   const res = await fetch("http://localhost:9000/courses")
   const courses = await res.json()
   return courses
})


export const coursesSlice = createSlice({
   name: "courses",
   initialState: {
      data: [], 
      loading: false
   },
 
   extraReducers: (builder) => {
      builder.addCase(fetchCourses.fulfilled, (state, action) => {
         state.data = action.payload
         state.loading = false
      })
      builder.addCase(fetchCourses.pending , (state , action) => {
         state.loading = true
      })
   }
})


export default coursesSlice.reducer
