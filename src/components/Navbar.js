import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    return (
        <div className="navbar">
            <p>navbar component</p>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
            {cartQuantity !== 0 &&
                <div>
                    <p onClick={openCart}>cart icon</p>
                    <p>{cartQuantity}</p>
                </div>
            }
        </div>
    )
}
export default Navbar;