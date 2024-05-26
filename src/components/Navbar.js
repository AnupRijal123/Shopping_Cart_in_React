import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { useNavigate } from 'react-router-dom';
import cartIcon from '../icons/shopping-cart-solid-svgrepo-com.svg';
function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart();
    const navigate = useNavigate();

    return (
        <div className="navbar d-flex align-center">
            <h3 onClick={() => navigate('/')} className="cursor-pointer">Anup's Ecommerce</h3>
            <div className="link-div d-flex align-center">
                <Link to='/store'>PRODUCTS</Link>

                <div onClick={openCart} className="d-flex cursor-pointer cart-icon-div">
                    <img src={cartIcon} width='35px' height='35px' />
                    {cartQuantity !== 0 &&
                        <div className="red-circle">
                            <p className="font-small">{cartQuantity}</p>
                        </div>
                    }
                </div>


            </div>

        </div >
    )
}
export default Navbar;