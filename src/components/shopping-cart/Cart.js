import './Cart.css';
import React, { useState, useEffect } from 'react';

const Cart = ({ state, dispatch }) => {
  const { cart } = state;
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setCartTotal(
      cart.reduce(
        (total, currentItem) => total + currentItem.price * currentItem.qty,
        0
      )
    );
  }, [cart]);

  const incrementQty = (id, qty) => {
    const newCart = cart.map((cartItem) => {
      if (cartItem.id === id) {
        cartItem.qty += 1;
      }
      return cartItem;
    });

    // dispatch({
    //   type: 'CHANGE_QTY',
    //   payload: newCart,
    // });
    dispatch({
      type: 'CHANGE_QTY',
      payload: { id, qty },
    });
  };

  const decrementQty = (id, qty) => {
    const newCart = cart
      .map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.qty -= 1;
          if (cartItem.qty < 1) return '';
        }
        return cartItem;
      })
      .filter(Boolean);

    // dispatch({
    //   type: 'CHANGE_QTY',
    //   payload: newCart,
    // });
    dispatch({
      type: 'CHANGE_QTY',
      payload: { id, qty },
    });
  };

  return (
    <div className='cart-container'>
      {
        <>
          <div className='cart-total'>
            {cartTotal > 0 ? `Total: $${cartTotal}` : 'Your cart is empty'}
          </div>
          <div className='cart-items-container'>
            {cart.map((cartItem) => {
              const { id, price, title, thumbnail, qty } = cartItem;
              return (
                <div className='cart-item' key={Math.random()}>
                  <img src={thumbnail} alt={title} />
                  <span className='cart-item-title'>{title}</span>
                  <button onClick={() => decrementQty(id, qty - 1)}>-</button>
                  {qty}
                  <button onClick={() => incrementQty(id, qty + 1)}>+</button>
                  <span className='cart-item-price'>${price * qty}</span>
                </div>
              );
            })}
          </div>
        </>
      }
    </div>
  );
};

export default Cart;
