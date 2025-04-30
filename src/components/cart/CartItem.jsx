import './CartItem.css'
import { MdDelete } from 'react-icons/md'

function CartItem ({image, title, price}){
    
    return (
       <div className="cartItem">
        <div className="right">
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
        <div className="left">
           <MdDelete size='25px' />
           <p>{price.toLocaleString()} $</p>
        </div>
       </div>
    )
}

export default CartItem