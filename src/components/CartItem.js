import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart();
    const storeItem = storeItems.find((item) => item.id === id);
    if (storeItem === null) return null;
    console.log(storeItem);
    return (
        <div>
            <p>Cart Item component</p>
            <img src={storeItem.imgUrl} width="200px" height="200px" />
            <p>{storeItem.name}</p>
            {quantity > 1 && <p>x{quantity}</p>}
            <p>price:{formatCurrency(storeItem.price)}</p>
            <p>Total:{formatCurrency(storeItem.price * quantity)}</p>
            <button onClick={() => removeFromCart(id)}>remove</button>

        </div>
    )
}
export default CartItem;