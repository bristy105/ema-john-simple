import React,{useState,useEffect} from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products,setProducts]= useState([]);

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json()
        .then(data=>setProducts(data)))
    },[]);

    useEffect(()=>{
        const savedCart = []
        const storedCart = getStoredCart() ;
        for (const id in storedCart) {
            const addedProduct = products.find(product=>product.id===id);
            if(addedProduct){
                const quantity =storedCart[id]
                addedProduct.quantity= quantity
                console.log(quantity)
                savedCart.push(addedProduct)
            }
            }
                    
                setCart(savedCart);
    },[products])
    const handleClick =(product)=>{
        const newCart= [...cart, product];
       
        setCart(newCart);
        addToDb(product.id);
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
              <Cart 
              cart={cart}></Cart>
            </div>

            
        </div>
    );
};

export default Shop;