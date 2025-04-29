import "./CourseItem.css"
import { FaRegSmile } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { useSelector } from "react-redux"

function CourseItem({title, price, id, image, teacher, studentCount}) {

const {theme} = useSelector(store => store.global)

   return (
      <>
         <div className={`courseCard ${theme}`}>
            <div className='cardHeader'>
               <img src={image}/>
            </div>
            <div className='cardBody'>
               <h4 className='courseTitle'>{title}</h4>
               <p className='courseDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
               <div className='courseInfo'>
                  <div className='courseTeacher'>
                     <span>
                        <FaRegSmile />
                     </span>
                     <p>{teacher}</p>
                  </div>
                  <div className='courseStudent'>
                     <p>{studentCount}</p>
                     <span>
                        <FaUsers />
                     </span>
                  </div>
               </div>
            </div>
            <div className='cardFooter'>
               <button> register </button>
               <span className='price'>{price} $</span>
            </div>
         </div>
      </>
   )
}

export default CourseItem
