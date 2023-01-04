import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={()=>handleClick(product)} className='btn-cart'>
                <p className='btn-text'>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

            </button>

           

        </div>
    );
};

export default Product;