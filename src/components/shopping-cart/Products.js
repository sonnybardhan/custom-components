import './Products.css';
import React from 'react';

const Products = ({ state, dispatch }) => {
  const { products, cart } = state;
  const handleAdd = (product) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...product,
        qty: 1,
      },
    });
  };

  const handleRemove = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  return (
    <div className='products-container'>
      {products.map((product) => {
        const { thumbnail, price, title, rating, id } = product;

        return (
          <div className='product-container' key={Math.random()}>
            <div className='product-title'>{title}</div>
            <img src={thumbnail} alt={title} />
            <div className='product-price'>${price}</div>
            {cart.some((cartItem) => cartItem.id === id) ? (
              <button onClick={() => handleRemove(id)}>Remove</button>
            ) : (
              <button onClick={() => handleAdd(product)}>Add</button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Products;
