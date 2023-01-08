
import React from 'react';

const Cart = (props) => {
    const {cart}= props
    console.log(cart)
    const handleClear =()=>{
        console.log('clear clicked')
        }
        let total = 0;
        let shipping =0
        let quantity=0
for(const product of cart){
 
    
    total += product.price*product.quantity;
    shipping +=product.shipping*product.quantity;
    quantity += product.quantity;

   

}
const tax= total*0.1
const  grandTotal= parseFloat(tax.toFixed(2))+total+shipping

    

    return (
        <div>
            <h1>Order Summary </h1>
            <p>Selected Items: {quantity}</p>
            <p>Total price:{total} </p>
            <p>Total Shipping: {shipping} </p>
            <p>Tax: {tax}</p>
            <p>Grand Total : {grandTotal}</p>

            <div className='btn'></div>
            <button onClick={handleClear}>
                <p>Clear cart</p>
                 </button>
            <button>Review Order</button>
            
            
        </div>
    );
};

export default Cart;