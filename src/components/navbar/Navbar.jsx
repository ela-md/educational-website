import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar () {

    return(
       <div className="navbarContainer">
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
                    <span>5</span>
                </span>
                <span className='darlModeIcon'>
                  <MdOutlineDarkMode size='25px' />
                </span>
            </div>
        </div>

       </div>
    )
}

export default Navbar