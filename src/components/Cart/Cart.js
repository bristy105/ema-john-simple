import React from 'react';

const Cart = (props) => {
    const {cart}= props
    const handleClear =()=>{
        console.log('clear clicked')
        

    }
    return (
        <div>
            <h1>Order Summary </h1>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: </p>
            <p>Total Shipping: </p>
            <p>Tax: </p>

            <div className='btn'></div>
            <button onClick={handleClear}>Clear cart</button>
            <button>Review Order</button>
            
            
        </div>
    );
};

export default Cart;