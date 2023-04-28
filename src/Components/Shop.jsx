const Shop = ({ cart, setCart, addToCart, shop }) => {

    const products = shop.map(item => {
        return (
            <li key={item.id}>
                <div className="product-card">
                        <div className="product-image">
                            <img src={item.image} alt="product"></img>
                        </div>
                        <div className="product-info">
                            <div>{item.name}</div>
                            <div>${item.price}</div>
                        </div>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
            </li>
        )
    })
    
    return ( 
        <div className="shop-container">
            <ul>
                {products}
            </ul>
        </div>
     );
}
 
export default Shop;