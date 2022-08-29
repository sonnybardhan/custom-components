import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { storeReducer } from './Reducers';
import { filtersReducer } from './Reducers';

const CartContext = createContext();
faker.seed(1);

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, {
    cart: [],
    products: [],
  });

  const [filters, filtersDispatch] = useReducer(filtersReducer, {
    sort: false,
    byStock: false,
    byRating: 0,
    byQuickDelivery: false,
    bySearchQuery: '',
  });

  const generatedProducts = [...Array(20)].map(() => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.abstract(),
      inStock: faker.helpers.arrayElement([0, 20, 30, 40, 50]),
      fastDelivery: faker.helpers.arrayElement([0, 1]),
      rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    };
  });

  useEffect(() => {
    dispatch({
      type: 'ADD_PRODUCTS',
      payload: generatedProducts,
    });
  }, []);

  // useEffect(() => {
  //   console.log('filters modified: ', filters);
  // }, [filters]);

  return (
    <CartContext.Provider value={{ state, dispatch, filters, filtersDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

export const useCartState = () => {
  return useContext(CartContext);
};
