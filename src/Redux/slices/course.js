import { createSlice } from "@reduxjs/toolkit";


const coursesSlice = createSlice({
    name : 'courses',
    initialState : [],
    reducers : {
        getCourses : (state , action) => {

        },
        getCourseById : (state , action) => {

        },

    }
})

export const {gerCourses, getCourseById} = coursesSlice.actions
export default coursesSlice.reducer