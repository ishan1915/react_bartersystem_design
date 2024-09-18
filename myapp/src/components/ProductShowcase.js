import React from 'react';

const ProductSowcase = ({ title, price,image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{price}</p>
       
    </div>
  );
}

export default ProductSowcase;
