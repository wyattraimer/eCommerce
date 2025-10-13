import React from 'react'
import { FaStar } from "react-icons/fa";

const ProductCard = ({product}) => {
  return (
    <div>
        <img src={product.image} alt="" />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
        </div>
        <div>
            <span>+</span>
            <span>Add to cart</span>
        </div>
    </div>
  )
}

export default ProductCard