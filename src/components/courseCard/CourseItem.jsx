import "./CourseItem.css"
import { FaRegSmile } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../../Redux/slices/cart"
import toast, { Toaster } from 'react-hot-toast';
import { fetchCourseById } from "../../Redux/slices/course"
import { Link } from "react-router-dom"

function CourseItem({title, price, id, image, teacher, studentCount}) {

const {theme} = useSelector(store => store.global)
const {data} = useSelector(store => store.courses)
const {addedProducts} = useSelector(store => store.cart)
const dispatch = useDispatch()

const clickHandler = ()=> {
if(isProductExistInCart()){
   toast.error('added already')
}else{
   toast.success('course successfuly added')
   const course = data.find(course => course.id == id)
   dispatch(addToCart(course))
}}

const isProductExistInCart = ()=>{
  return addedProducts.some(product => product.id == id)
}

const getCourseInfoHandler = () => {
dispatch(fetchCourseById(id))

}


   return (
      <>
       <Toaster position="top-right"/>
         <div className={`courseCard ${theme}`}>
            <div className='cardHeader'>
               <Link to={`/SingleCourse/${id}`}>
               <img src={image} onClick={getCourseInfoHandler} />
               </Link>
               
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
               <button onClick={clickHandler}>add to cart</button>
               <span className='price'>{price} $</span>
            </div>
         </div>
      </>
   )
}

export default CourseItem
