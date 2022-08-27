import React from 'react';
import { useCartState } from './context/Context';
import Filters from './Filters';
import Product from './Product';
const Home = () => {
  const {
    state: { products },
  } = useCartState();

  return (
    <div className='home'>
      <Filters />
      <div className='product-container'>
        {products.length
          ? products.map((product) => (
              <Product data={product} key={product.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
