
import { useSelector } from 'react-redux'
import './CartPage.css'
import { BsCart4 } from 'react-icons/bs';
import CartItem from '../../components/cart/CartItem';

function CartPage () {

    const{addedToCart, total, addedProducts} = useSelector(store => store.cart)
    const {theme} = useSelector(store => store.global)
     
    return (
        <>
        <div className={`cartPageContainer ${theme}`}>
            <div className="cartPage">
                {addedToCart == 0 ? 
                (
                    <div className="emptyCart">
                       <BsCart4 size='80px'/>
                       <h1>cart is empty</h1>
                    </div>
                ) : (
                    <div className="notEmptyCart">
                        <div className="itemsContainer">
                           {addedProducts.map((course) => (
                            <div className="item" key={course.id}>
                            <CartItem {...course}/>
                           </div>
                           ))}
                        </div>
                        <div className="totalCart">
                            <span>
                                <p>total Price</p>
                                <b>{total}</b>
                            </span>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
        </>
    )
}

export default CartPage