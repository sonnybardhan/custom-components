import './cart-styles.css';
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';
import { useCartState } from './context/Context';

const Product = ({ data }) => {
  const {
    state: { cart },
    dispatch,
  } = useCartState();

  const handleAdd = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: data,
    });
  };

  const handleRemove = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: data.id,
    });
  };

  return (
    <div className='product'>
      <Card>
        <Card.Img variant='top' src={data.image} alt={data.name} />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: '10px' }}>
            <span>${data.price}</span>
            {data.fastDelivery ? (
              <div className=''>Fast Delivery</div>
            ) : (
              <div className=''>Regular Delivery</div>
            )}
            <Rating rating={data.rating} />
          </Card.Subtitle>
          {cart.some((cartItem) => cartItem.id === data.id) ? (
            <Button variant='danger' onClick={handleRemove}>
              Remove from cart
            </Button>
          ) : (
            <Button disabled={!data.inStock} onClick={handleAdd}>
              {data.inStock ? 'Add to cart' : 'Out of stock!'}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
