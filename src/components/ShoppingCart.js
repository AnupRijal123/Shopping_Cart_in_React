import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import '../styles/ShoppingCart.css';
function ShoppingCart() {
    const { closeCart, cartItems } = useShoppingCart()
    return (
        <div className="shopping-cart-container">
            <div className="cart-header">
                <p>Shopping cart component</p>
                <p onClick={closeCart}>X</p>
            </div>

            {cartItems.map((item) => (
                <div key={item.id}>
                    <CartItem {...item} />
                </div>
            ))}

            <div>
                <p>GrandTotal{
                    formatCurrency(cartItems.reduce((total, cartItem) => {
                        const storeItem = storeItems.find(item => item.id === cartItem.id)
                        return total + (storeItem?.price || 0) * cartItem.quantity
                    }, 0))
                }</p>
            </div>

        </div >
    )
}
export default ShoppingCart;