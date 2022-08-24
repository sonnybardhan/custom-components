export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload),
      };
    case 'CHANGE_QTY':
      // return { ...state, cart: payload };
      return {
        ...state,
        cart: state.cart.filter((cartItem) =>
          cartItem.id === payload.id ? (cartItem.qty = payload.qty) : cartItem
        ),
      };
    default:
      return state;
  }
};
