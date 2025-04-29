import { useDispatch, useSelector } from "react-redux"
import CourseItem from "./CourseItem"
import "./CoursesSection.css"
import { useEffect } from "react"
import { fetchCourses } from "../../Redux/slices/courses"

function CoursesSection() {
   const { theme } = useSelector((store) => store.global)
   const dispatch = useDispatch()
   const courses = useSelector(store => store.courses)

   useEffect(() => {
      dispatch(fetchCourses())
   } , [])

   // {
   //    type : 'courses/fetchCoursesStatus/fulfilled',
   //    payload : courses
   // }

   return (
      <div className='coursesSectionContainer'>
         <div className='container'>
            <h2 className={`newestCourses ${theme}`}>our courses</h2>
            <div className='row'>
               {courses.map((course) => (
                  <div className="col" key={course.id}>
                     <CourseItem {...course} />
                  </div>
               ))}
               
            </div>
         </div>
      </div>
   )
}

export default CoursesSection
