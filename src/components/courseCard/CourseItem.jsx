import "./CourseItem.css"
import { FaRegSmile } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { useSelector } from "react-redux"

function CourseItem() {

const {theme} = useSelector(store => store.global)

   return (
      <>
         <div className={`courseCard ${theme}`}>
            <div className='cardHeader'>
               <img src='https://dl.next1code.ir/images//redux/courses/tailwind.jpg' />
            </div>
            <div className='cardBody'>
               <h4 className='courseTitle'>Project based learning (tailwind css)</h4>
               <p className='courseDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
               <div className='courseInfo'>
                  <div className='courseTeacher'>
                     <span>
                        <FaRegSmile />
                     </span>
                     <p>Jane Doe</p>
                  </div>
                  <div className='courseStudent'>
                     <p>60</p>
                     <span>
                        <FaUsers />
                     </span>
                  </div>
               </div>
            </div>
            <div className='cardFooter'>
               <button> register </button>
               <span className='price'>199000</span>
            </div>
         </div>
      </>
   )
}

export default CourseItem
