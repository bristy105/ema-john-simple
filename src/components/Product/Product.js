import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {img,name,seller,ratings, price} =product
    return (
        <div className='product'>
            <img src={img} alt=""></img>
        </div>
    );
};

export default Product;