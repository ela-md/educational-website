import './Navbar.css'
import { Link } from 'react-router-dom'
import {BsCart} from "react-icons/bs"
import { MdOutlineDarkMode , MdOutlineLightMode} from "react-icons/md"
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../Redux/slices/global'


function Navbar () {

const {theme} = useSelector(store => store.global)
const {addedToCart} = useSelector(store => store.cart)
const dispatch = useDispatch()


const changeTheme = () => {
    dispatch(toggleTheme(theme))
}




    return(
       <div className={`navbarContainer ${theme}`}>
        <div className="navbar container">
            <ul>
                <li>
                    <Link to='/'>main</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/contact'>contact</Link>
                </li>
            </ul>
            <div className="icons">
                <span className='cartIcon'>
                    <Link to='/cart'>
                    <BsCart size='25px'/></Link>
                    {addedToCart > 0 ? (<span>{addedToCart}</span>) : ('')}
                </span>
                <span className='darkModeIcon'>
                  {theme == "light" ? (<MdOutlineDarkMode size='25px' onClick={changeTheme}/>) : <MdOutlineLightMode size='25px' onClick={changeTheme}/>}
                </span>
            </div>
        </div>

       </div>
    )
}

export default Navbar