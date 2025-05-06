import { useDispatch, useSelector } from "react-redux"
import CourseItem from "./CourseItem"
import "./CoursesSection.css"
import { useEffect } from "react"
import { fetchCourses } from "../../Redux/slices/courses"

function CoursesSection() {
   const { theme } = useSelector((store) => store.global)
   const dispatch = useDispatch()
   const {data, loading, errorMessage} = useSelector((store) => store.courses)

   useEffect(() => {
      dispatch(fetchCourses())
   } , [])

   

   return (
      <div className='coursesSectionContainer'>
         <div className='container'>
            <h2 className={`newestCourses ${theme}`}>our courses</h2>
            <div className='row'>
            {loading ? (<h2>loading...</h2> ) : (
            errorMessage ? <h2>{errorMessage}</h2> :
            (data.map((course) => (
               <div className="col" key={course.id}>
                  <CourseItem {...course} />
               </div>
              )))
            )}
               
            </div>
         </div>
      </div>
   )
}

export default CoursesSection
