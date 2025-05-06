import { useDispatch, useSelector} from "react-redux"
import './SingleCoursePage.css'
import { useEffect, useState } from "react"
import { fetchCourseById } from "../../Redux/slices/course"
import { useParams } from "react-router-dom"
import { FaRegSmile } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"


function SingleCoursePage () {


    const singleId = useParams().singleCourseId
    const dispatch = useDispatch()
    const {theme} = useSelector(store => store.global)
    const {data} = useSelector((store) => store.course)
  
     useEffect(() => {
      dispatch(fetchCourseById(singleId))
     }, [])
  
    return(
        <>
        <div className={`singleCoursePage ${theme}`}>
            <div className={`itemContainer ${theme}`}>
              <div className="cardHeader">
                <img src={data.image} alt="" />
                <h2 className="title">{data.title}</h2>
                <p className='courseDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
              </div>

             <div className='courseInfo'>
                               <div className='courseTeacher'>
                                  <span>
                                     <FaRegSmile />
                                  </span>
                                  <p>{data.teacher}</p>
                               </div>
                               <div className='courseStudent'>
                                  <p>{data.studentCount}</p>
                                  <span>
                                     <FaUsers />
                                  </span>
                                  <span className='price'>{data.price} $</span>
                               </div>
                            </div>
            
            
           
            </div>
        </div>
        
        </>
    )
}

export default SingleCoursePage