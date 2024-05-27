import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import '../styles/ShoppingCart.css';
function ShoppingCart() {
    const { closeCart, cartItems, cartQuantity, isOpen } = useShoppingCart()
    return (
        <div className={isOpen === false ? "shopping-cart-container" : "shopping-cart-container expanded"}>
            <div className="cart-header align-center">
                <p>Your Shopping Cart({cartQuantity})</p>
                <p className="color-gray cursor-pointer" onClick={closeCart}>X</p>
            </div>

            <div className="cart-content">
                {cartQuantity === 0 &&
                    <div className="empty-cart-message-div">
                        <p className="color-gray">You have no items in your,items you add to cart will show here</p>

                    </div>
                }
                {cartItems.map((item) => (
                    <div className="cart-row" key={item.id}>
                        <CartItem {...item} />
                    </div>
                ))}

                <div className="total-price-div d-flex">
                    {cartQuantity !== 0 &&
                        <h3>Total:{
                            formatCurrency(cartItems.reduce((total, cartItem) => {
                                const storeItem = storeItems.find(item => item.id === cartItem.id)
                                return total + (storeItem?.price || 0) * cartItem.quantity
                            }, 0))
                        }</h3>
                    }
                </div>


            </div>



        </div >
    )
}
export default ShoppingCart;