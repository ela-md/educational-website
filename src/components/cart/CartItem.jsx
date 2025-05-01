
import { useDispatch } from 'react-redux';
import './CartItem.css'
import { MdDelete } from 'react-icons/md'
import { removeFromCart } from '../../Redux/slices/cart';



function CartItem ({id, image, title, price}){

  const dispatch = useDispatch()

const removeHandler = () => {
  dispatch(removeFromCart({id, price}))
  
}
   
    
    return (
       <div className="cartItem">
        <div className="right">
            <img src={image} alt="" />
            <p>{title}</p>
        </div>
        <div className="left">
           <MdDelete size='25px' onClick={removeHandler} />
           <p>{price.toLocaleString()} $</p>
        </div>
       </div>
    )
}

export default CartItem