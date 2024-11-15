import { useDispatch, useSelector } from "react-redux"
import CourseItem from "./CourseItem"
import "./CoursesSection.css"
import { useEffect } from "react"
import { fetchCourses } from "../../Redux/slices/courses"



function CoursesSection() {
   const { theme } = useSelector((store) => store.global)
   const {data , loading} = useSelector((store) => store.course)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(fetchCourses())
   }, [])

  
   return (
      <div className='coursesSectionContainer'>
         <div className='container'>
            <h2 className={`iransans newestCourses ${theme}`}>جدیدترین دوره های آموزشی</h2>
            <div className='row'>
               {loading ? (
                  <h2 className={`information ${theme}`}>در حال دریافت اطلاعات</h2>
               ) : (
                  data.map((course) => (
                     <div className='col' key={course.id}>
                        <CourseItem {...course} />
                     </div>
                  ))
               )}
            </div>
         </div>
      </div>
   )
}

export default CoursesSection
