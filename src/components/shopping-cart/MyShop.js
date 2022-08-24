import React, { useEffect, useReducer } from 'react';
import Cart from './Cart';
import Products from './Products';
import { cartReducer } from './cartReducer/cartReducer';
const initialState = {
  products: [],
  cart: [],
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const { products } = state;

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products,
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className='main-container'>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
};

export default ShoppingCart;
