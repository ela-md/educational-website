import { useSelector } from 'react-redux';
import './Feature.css'



function Feature ({title, icon}) {

    const {theme} = useSelector(store => store.global)

    return(
       <div className={`featureContainer ${theme}`}>
        <p className='icon'>
            {icon}
        </p>
        <h2>{title}</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sapiente earum culpa inventore laboriosam, suscipit modi. Aspernatur voluptates quis libero, doloremque in magni qui voluptas dolore eligendi, sapiente temporibus adipisci.
            Explicabo, labore. Repudiandae cupiditate numquam iure, optio voluptas accusantium ipsa.  
        </p>
       </div>
    )
}

export default Feature