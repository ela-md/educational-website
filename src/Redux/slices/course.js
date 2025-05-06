import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const fetchCourseById = createAsyncThunk("course/fetchCourseById", async (id, {rejectWithValue}) => {
  try {
   const res = await fetch(`http://localhost:9000/courses/${id}`)
   const course = await res.json()
   return course
   
  } catch (error) {
   return rejectWithValue('An error has occurred')
  } 
})



export const courseSlice = createSlice({
   name: "course",
   initialState: {
      data : [],
      loading : false,
      errorMessage : false
   },
 
   extraReducers: (builder) => {
      builder.addCase(fetchCourseById.fulfilled, (state, action) => {
         state.data = action.payload
         state.loading = false
         
         
      })
    
      builder.addCase(fetchCourseById.pending , (state, action) =>{
         // state.loading = true
      })
      builder.addCase(fetchCourseById.rejected , (state, action) => {
       
      //  state.errorMessage = action.payload
      //  state.loading = false
      })
   }
})


export default courseSlice.reducer
