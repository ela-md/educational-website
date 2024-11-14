import { useSelector } from 'react-redux'
import './Footer.css'
function Footer(){

    const { theme } = useSelector((store) => store.global)
    return(
        
           <div className={`footer ${theme}`}>
            <p className={`design ${theme}`}>designed by : <b>Ela Ahmadi</b></p>
           </div>
       
    )
}

export default Footer