import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCourses = createAsyncThunk('courses/fetchCoursesStatus' , async () => {
    const response = await axios('http://localhost:9000/courses')
    const data = await response.json()
    return data
})

const coursesSlice = createSlice({
    name : 'courses',
    initialState : [],
    reducers : {
        // getCourses : (state , action) => {

        // },
        // getCourseById : (state , action) => {

        // },
    },

    extraReducers : function (builder){
     builder.addCase(fetchCourses.fulfilled , function(state , action){
        
     })
    }
})

export const {gerCourses, getCourseById} = coursesSlice.actions
export default coursesSlice.reducer