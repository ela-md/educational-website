import { MdContactPhone } from "react-icons/md";
import './ContactPage.css'
import { useSelector } from "react-redux";


function ContactPage(){

    const {theme} = useSelector((store) => store.global)

    return(
       <div className={`contactContainer ${theme}`}>
           <p className='icon'>
           <MdContactPhone />

           </p>
           <h2>  تماس با ما </h2>
           <p>
                
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک
               است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
               تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
   
           </p>
       </div>
    )

}

export default ContactPage