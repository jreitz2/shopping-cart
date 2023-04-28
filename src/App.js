import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import bandolier from './assets/bandolier.jpg';
import boots from './assets/boots.jpg';
import hat from './assets/hat.jpg';
import holster from './assets/holster.jpg';
import oven from './assets/oven.jpg';
import saddle from './assets/saddle.jpg';
import shirt from './assets/shirt.jpg';
import spurs from './assets/spurs.jpg';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Shop from './Components/Shop.jsx';
import Cart from './Components/Cart.jsx';

function App() {

  const [ shop, setShop ] = useState([
    {
      name: "Bandolier",
      image: bandolier,
      price: 15,
      id: uuidv4()
    },
    {
      name: "Boots",
      image: boots,
      price: 25,
      id: uuidv4()
    },
    {
      name: "Hat",
      image: hat,
      price: 12,
      id: uuidv4()
    },
    {
      name: "Holster",
      image: holster,
      price: 9,
      id: uuidv4()
    },
    {
      name: "Oven",
      image: oven,
      price: 5,
      id: uuidv4()
    },
    {
      name: "Saddle",
      image: saddle,
      price: 30,
      id: uuidv4()
    },
    {
      name: "Shirt",
      image: shirt,
      price: 4,
      id: uuidv4()
    },
    {
      name: "Spurs",
      image: spurs,
      price: 6,
      id: uuidv4()
    }
  ])

  const [ cart, setCart ] = useState([]);

  const addToCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    if (itemIndex === -1) {
      const newItem = { ...product, quantity: 1 };
      setCart([...cart, newItem]);
    } else {
      const updatedItems = cart.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item 
      );
      setCart(updatedItems);
    }
  };

  const removeFromCart = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);
    if (product.quantity === 1) {
      const updatedCart = cart.filter((item, index) => index !== itemIndex);
      setCart(updatedCart);
    } else {
      const updatedItems = cart.map((item, index) =>
        index === itemIndex ? { ...item, quantity: item.quantity - 1 } : item 
      );
      setCart(updatedItems);
    }
  };


  return (
    <div className="App">
      <BrowserRouter basename="/shopping-cart">
      <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="shop" element={<Shop shop={shop} addToCart={addToCart}
            cart={cart} setCart={setCart} />}>
          </Route>
          <Route path="cart" element={<Cart cart={cart} addToCart={addToCart}
          removeFromCart={removeFromCart} />}></Route>
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
