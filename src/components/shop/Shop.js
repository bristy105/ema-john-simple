import React,{useState,useEffect} from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products,setProducts]= useState([]);

    const [cart,setCart]=useState([]);


    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },[])
    const handleClick =(product)=>{
        const newCart= [...cart, product];
        
        setCart(newCart);
    }
 
    return (
        <div className='shop-container'>
            <div className="products-cont">
                {
                products.map(product=>
                <Product 
                key={product.id}
                product={product}
                handleClick={handleClick}
               >

                </Product>)

                }
                </div>
                
            
            <div className="cart-container">
                <h1>Order summery</h1>
                <p>Selected Items: {cart.length}</p>
            </div>

            
        </div>
    );
};

export default Shop;