import React,{useState,useEffect} from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },[])
   // console.log(products)
    return (
        <div className='shop-container'>
            <div className="products-cont">
                {
                products.map(product=>
                <Product 
                key={product.id}
                product={product}>

                </Product>)

                }
                </div>
                
            
            <div className="cart-container">
                <h1>Order summery</h1>
            </div>

            
        </div>
    );
};

export default Shop;