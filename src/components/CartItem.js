import { useShoppingCart } from '../context/ShoppingCartContext';
import storeItems from '../data/items.json';
import formatCurrency from '../utilities/formatCurrency';
import '../styles/CartItem.css';
function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart();
    const storeItem = storeItems.find((item) => item.id === id);
    if (storeItem === null) return null;
    return (
        <div className="card-item d-flex">
            <img src={storeItem.imgUrl} width="100px" height="80px" />
            <div className="card-info-div d-flex align-center">
                <div className="card-name-div d-flex g-5">
                    <div className="d-flex g-5 align-center">
                        <p>{storeItem.name}</p>
                        {quantity > 1 && <p className="color-gray font-small">x{quantity}</p>}
                    </div>
                    <p className="color-gray font-small">{formatCurrency(storeItem.price)}</p>
                </div>
                <div className="d-flex g-5 align-center">
                    <p>{formatCurrency(storeItem.price * quantity)}</p>
                    <button className="remove-button" onClick={() => removeFromCart(id)}>x</button>
                </div>
            </div>
        </div>
    )
}
export default CartItem;