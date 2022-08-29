import React from 'react';
import { useCartState } from './context/Context';
import Filters from './Filters';
import Product from './Product';
const Home = () => {
  const {
    state: { products },
    filters,
  } = useCartState();

  const filteredProducts = () => {
    let filteredResults = [...products];

    if (filters.sort) {
      filteredResults.sort((a, b) => {
        if (filters.sort === 'asc') return a.price - b.price;
        else return b.price - a.price;
      });
    }

    if (filters.byStock) {
      filteredResults = filteredResults.filter((item) => item.inStock);
    }

    if (filters.byQuickDelivery) {
      filteredResults = filteredResults.filter((item) => item.fastDelivery);
    }

    if (filters.bySearchQuery) {
      filteredResults = filteredResults.filter((item) =>
        item.name.toLowerCase().includes(filters.bySearchQuery.toLowerCase())
      );
    }

    if (filters.byRating) {
      filteredResults = filteredResults.filter(
        (item) => item.rating >= filters.byRating
      );
    }

    return filteredResults;
  };

  return (
    <div className='home'>
      <Filters />
      <div className='product-container'>
        {filteredProducts().length
          ? filteredProducts().map((product) => (
              <Product data={product} key={product.id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
