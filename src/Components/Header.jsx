import { Link } from "react-router-dom";
import cartIcon from '../assets/cart.png'

const Header = ({ cart }) => {

    const cartQuantity = cart.reduce((total, item) =>
        total + item.quantity, 0);
    

    return ( 
        <div className="header">
            <Link to="/" className="header-item">Home</Link>
            <Link to="contact" className="header-item">Contact</Link>
            <Link to="shop" className="header-item">Shop</Link>
            <Link to="cart" className="header-item">
                {cart.length !== 0 && <div data-testid="cq">{cartQuantity}</div>}
                <img src={cartIcon} alt="cart-icon" />
            </Link>
        </div>
     );
}
 
export default Header;