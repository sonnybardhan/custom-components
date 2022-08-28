import React, { useEffect, useState } from 'react';
import { useCartState } from './context/Context';
import { Col, ListGroup, Row, Image } from 'react-bootstrap';
import Rating from './Rating';
import {
  // AiOutlineShoppingCart,
  AiFillDelete,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useCartState();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce(
        (total, currentItem) => total + currentItem.qty * currentItem.price,
        0
      )
    );
  }, [cart]);

  const handleDelete = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  const changeQuantity = (id, newQty) => {
    dispatch({
      type: 'CHANGE_QTY',
      payload: { id, newQty },
    });
  };

  return (
    <div className='home'>
      <div className='product-container'>
        <ListGroup>
          {cart.map((cartItem) => (
            <ListGroup.Item key={cartItem.id}>
              <Row>
                <Col md={2}>
                  <Image
                    src={cartItem.image}
                    alt={cartItem.name}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>{cartItem.name}</Col>
                <Col md={2}>{cartItem.price}</Col>
                <Col md={2}>
                  <Rating rating={cartItem.rating} />
                </Col>
                <Col md={2}>
                  <AiFillMinusCircle
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      changeQuantity(cartItem.id, cartItem.qty - 1)
                    }
                  />
                  <AiFillPlusCircle
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      changeQuantity(cartItem.id, cartItem.qty + 1)
                    }
                  />
                </Col>
                <Col md={2}>
                  <AiFillDelete
                    className='cartItem-dropdown-delete'
                    onClick={() => handleDelete(cartItem.id)}
                  />
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'>Subtotal ({cart.length}) items</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>
          Total: Rs. {total}
        </span>
      </div>
    </div>
  );
};

export default Cart;
