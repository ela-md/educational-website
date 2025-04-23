import { useSelector } from 'react-redux'
import Feature from './Feature'
import './FeatureList.css'
import { BiSupport } from "react-icons/bi";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";


const featureList = [
    {
        id:1,
        title:'our support',
        icon: <BiSupport/>
    },
    {
        id:2,
        title:'student satisfaction',
        icon: <FaRegFaceSmileBeam/>
    },
    {
        id:3,
        title:'updates',
        icon: <RxUpdate/>
    },

]


function FeatureList () {

 const {theme} = useSelector(store => store.global)



    return (
       <div className={`featureListContainer ${theme}`}>
        <div className="container">
            <h2>why choose us?</h2>
            <div className="featuresList">
                {featureList.map((feature)=>(
                    <Feature key={feature.id} {...feature}/>
                ))}

            </div>
        </div>
       </div>
    )
}

export default FeatureList