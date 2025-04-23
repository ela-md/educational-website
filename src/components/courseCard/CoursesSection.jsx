import { useSelector } from "react-redux"
import CourseItem from "./CourseItem"
import "./CoursesSection.css"
function CoursesSection() {
   const { theme } = useSelector((store) => store.global)
   return (
      <div className='coursesSectionContainer'>
         <div className='container'>
            <h2 className={`newestCourses ${theme}`}>Courses List</h2>
            <div className='row'>
               <div className='col'>
                  <CourseItem />
               </div>
               <div className='col'>
                  <CourseItem />
               </div>
               <div className='col'>
                  <CourseItem />
               </div>
               <div className='col'>
                  <CourseItem />
               </div>
               <div className='col'>
                  <CourseItem />
               </div>
               <div className='col'>
                  <CourseItem />
               </div>
               <div className='col'>
                  <CourseItem />
               </div>
               <div className='col'>
                  <CourseItem />
               </div>
            </div>
         </div>
      </div>
   )
}

export default CoursesSection