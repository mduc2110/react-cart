import CartItem from '../components/CartItem';
import './CartScreen.css';

const CartScreen = () => {
    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping cart</h2>
                <CartItem/>
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal (0) items</p>
                    <p>$49.9</p>
                </div>
                <div>
                    <button>Check out</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen