import { screen, render, it } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Cart from './Cart.jsx';
import Header from './Header.jsx';


test('renders list', async () => {
    render(
        <BrowserRouter>
            <Cart cart={[
                {name: "hat", price: 12, quantity: 2, id: 1},
                {name: "spurs", price: 6, quantity: 3, id: 2}
                ]}></Cart>
        </BrowserRouter>
    );
    const cartList = screen.getByRole('list');
    expect(cartList).toBeInTheDocument();
});

test('renders list with correct length', async () => {
    render(
        <BrowserRouter>
            <Cart cart={[
                {name: "hat", price: 12, quantity: 2, id: 1},
                {name: "spurs", price: 6, quantity: 3, id: 2}
                ]}></Cart>
        </BrowserRouter>
    );
    const cartList = screen.getAllByRole('listitem');
    expect(cartList.length).toBe(2);
});

test('renders correct quantity next to cart icon', async () => {
    render(
        <BrowserRouter>
            <Header cart={[
                {name: "hat", price: 12, quantity: 2, id: 1},
                {name: "spurs", price: 6, quantity: 3, id: 2}
                ]}></Header>
        </BrowserRouter>
    );
    const cartQuantity = screen.getByTestId('cq');
    expect(parseInt(cartQuantity.textContent)).toBe(5);
});