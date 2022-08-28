export const storeReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_PRODUCTS':
      return { ...state, products: payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.id !== payload),
      };
    case 'CHANGE_QTY':
      return {
        ...state,
        cart: [
          ...state.cart.filter((cartItem) =>
            cartItem.id === payload.id
              ? (cartItem.qty = payload.newQty)
              : cartItem
          ),
        ],
      };
    default:
      return state;
  }
};

export const filtersReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: payload };
    case 'BY_STOCK':
      return { ...state, byStock: !state.byStock };
    case 'BY_RATING':
      return { ...state, byRating: payload };
    case 'BY_QUICK_DELIVERY':
      return { ...state, byQuickDelivery: !state.byQuickDelivery };
    case 'BY_SEARCH_QUERY':
      return { ...state, bySearchQuery: payload };
    case 'CLEAR_FILTERS':
      return {
        sort: false,
        byStock: false,
        byRating: 0,
        byQuickDelivery: false,
        bySearchQuery: '',
      };
    default:
      return state;
  }
};
