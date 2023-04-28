import { Link } from 'react-router-dom';

const Cart = ({ cart, addToCart, removeFromCart }) => {
    
    const cartItems = cart.map(item => {
        return (<li key={item.id}>
            <div className="cart-buttons">
                <button onClick={() => addToCart(item)} className="plus-minus">+</button>
                <button onClick={() => removeFromCart(item)} className="plus-minus">-</button>
            </div>
            {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
        </li>)
    })
    
    const totalCost = cart.reduce((total, item) => 
        total + item.quantity * item.price, 0);

    return ( 
        <div className="cart-container">
            <div className="cart">
                {cart.length === 0 && "Your cart's empty, partner!"}
                <ul>
                    {cartItems}
                </ul>
                {cart.length > 0 && "Your total comes to $" + totalCost}
                <Link to="../shop">
                    <button>Back to shoppin'</button>
                </Link>
                <button>Checkout</button>
            </div>
        </div>
     );
}
 
export default Cart;