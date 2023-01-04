import React from 'react';
import './Product.css'

const Product = ({product,handleClick}) => {
    
    //const {product,handleClick}=props
    
    const {img,name,seller,ratings, price,id} =product
    //const {handleAddToCart}=props.handleAddToCart

   // console.log(props.handleClick)
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p><small>Price: ${price}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
           
            </div>
            <button onClick={()=>handleClick(product)} className='btn-cart'>Add to cart</button>

           

        </div>
    );
};

export default Product;