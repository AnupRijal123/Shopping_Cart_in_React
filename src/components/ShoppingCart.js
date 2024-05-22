import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import '../styles/ShoppingCart.css';
function ShoppingCart() {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <div className="shopping-cart-container">

            <div className="cart-header align-center">
                <h3>Cart</h3>
                <p className="color-gray cursor-pointer" onClick={closeCart}>X</p>
            </div>

            <div class="cart-content">
                {cartItems.map((item) => (
                    <div key={item.id}>
                        <CartItem {...item} />
                    </div>
                ))}

                <div className="total-price-div d-flex">
                    <h3>Total:{
                        formatCurrency(cartItems.reduce((total, cartItem) => {
                            const storeItem = storeItems.find(item => item.id === cartItem.id)
                            return total + (storeItem?.price || 0) * cartItem.quantity
                        }, 0))
                    }</h3>
                </div>


            </div>



        </div >
    )
}
export default ShoppingCart;