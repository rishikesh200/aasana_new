import React from 'react';
import Product_hero from '../components/product/Product_hero';
import Product_main from '../components/product/Product_main';

const Product = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Product_hero />
      <Product_main />
    </div>
  );
};

export default Product;

