
import './ContactPage.css'
import { useSelector } from 'react-redux'

function ContactPage () {
    const { theme } = useSelector((store) => store.global)

    return (
       <div className="contact">
        <div className="container">
            <div className={`contactInfo ${theme}`}>
              <h2>more inquiries :</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate nihil tempora dolorem.</p>
            </div>
        </div>
       </div>
    )
}

export default ContactPage