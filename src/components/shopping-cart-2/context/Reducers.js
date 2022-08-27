export const storeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
};
