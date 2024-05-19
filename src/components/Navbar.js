import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
function Navbar() {
    return (
        <div className="navbar">
            <p>navbar component</p>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
            <p>cart icon</p>

        </div>
    )
}
export default Navbar;