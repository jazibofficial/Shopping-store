import React, { useState } from 'react';

function Cart({ cart }) {
    const [cartItems, setCartItems] = useState(cart);

    const increaseQuantity = (index) => {
        const newCart = [...cartItems];
        newCart[index].Q += 1; // Increase the quantity
        setCartItems(newCart);
    };

    const decreaseQuantity = (index) => {
        const newCart = [...cartItems];
        if (newCart[index].Q > 1) {
            newCart[index].Q -= 1; // Decrease the quantity if it's more than 1
            setCartItems(newCart);
        }
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.prices * item.Q, 0);
    };

    return (
        <div className='flex flex-col'>
            {cartItems.map((item, index) => (
                <div key={index} className='flex items-center justify-between p-4'>
                    <img src={item.imageUrl} className='w-32 h-32 object-cover rounded-lg shadow-lg' alt={item.name} />
                    <span>{item.name}</span>
                    <button className='p-1  rounded' onClick={() => decreaseQuantity(index)}>-</button>
                    <span>{item.Q}</span>
                    <button className='p-1  rounded' onClick={() => increaseQuantity(index)}>+</button>
                    <span>${(item.prices  * item.Q).toFixed(2)}</span>
                </div>
            ))}
            <p className='p-4 text-lg font-bold'>
                Total price: ${calculateTotalPrice().toFixed(2)}
            </p>
        </div>
    );
}

export default Cart;
