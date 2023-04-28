import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Shop from './Shop.jsx';
import Header from './Header.jsx';


test('add to cart button adds to quantity total by icon', async () => {
    const addItem = jest.fn();
    render(
       
            <Shop shop={[{name: "Hat", id: 1}]} addToCart={addItem} />
    );
    const addButton = screen.getByText('Add to Cart');
    fireEvent.click(addButton);
    expect(addItem).toHaveBeenCalledTimes(1);
})