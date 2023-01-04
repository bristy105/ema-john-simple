import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {img,name,seller,ratings, price} =product
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p><small>Price:{price}</small></p>
            <p><small>Ratings: {ratings} stars</small></p>
           
            </div>
            <button className='btn-cart'>Add to cart</button>

           

        </div>
    );
};

export default Product;