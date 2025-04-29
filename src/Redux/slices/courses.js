import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchCourses = createAsyncThunk("courses/fetchCoursesStatus", async () => {
   const res = await fetch("http://localhost:9000/courses")
   const courses = await res.json()
   return courses
   console.log(fetchCourses);
   
})



export const coursesSlice = createSlice({
   name: "courses",
   initialState: [],
   reducers: {
      // getCourses: (state, action) => {
      //    // code
      // },
      // getCourseById: (state, action) => {
      //    // code
      // },
      // deleteCourseById: (state, action) => {
      //    // code
      // },
      // editCourseById: (state, action) => {
      //    // code
      // }
   },
   extraReducers: (builder) => {
      builder.addCase(fetchCourses.fulfilled, (state, action) => action.payload)
    
      
   }
})

// export const { getCourses, getCourseById, deleteCourseById, editCourseById } = coursesSlice.actions

export default coursesSlice.reducer
