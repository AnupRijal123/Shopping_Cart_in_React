import formatCurrency from '../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext';
function StoreItem({ id, name, price, imgUrl }) {
    const { getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart();
    const quantity = getItemQuantity(id);
    return (
        <div>
            <h2>Store Item component</h2>
            <img src={imgUrl} width="200px" height="200px" />
            <p>{name}</p>
            <p>{formatCurrency(price)}</p>
            <div>
                {quantity === 0 ? (
                    <button onClick={() => increaseCartQuantity(id)}>+Add To Cart</button>
                ) : (
                    <div>
                        <button onClick={() => decreaseCartQuantity(id)}>-</button>
                        <p>{quantity} in Cart</p>
                        <button onClick={() => increaseCartQuantity(id)}>+</button>
                        <button onClick={() => removeFromCart(id)}>Remove</button>
                    </div>
                )}
            </div>
        </div>
    )
}
export default StoreItem;