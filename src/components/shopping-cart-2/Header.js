import React from 'react';
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Badge,
  Button,
} from 'react-bootstrap';
import {
  AiOutlineShoppingCart,
  AiFillDelete,
  // AiFillPlusCircle,
  // AiFillMinusCircle,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useCartState } from './context/Context';

const Header = () => {
  const {
    state: { cart },
    filters,
    filtersDispatch,
    dispatch,
  } = useCartState();

  const handleDelete = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: id,
    });
  };

  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl
            style={{ width: '500px' }}
            placeholder='Search'
            value={filters.bySearchQuery}
            onChange={(e) =>
              filtersDispatch({
                type: 'BY_SEARCH_QUERY',
                payload: e.target.value,
              })
            }
          />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            <AiOutlineShoppingCart />
            <Badge>
              {cart.reduce((total, currentItem) => total + currentItem.qty, 0)}
            </Badge>
          </Dropdown.Toggle>
          <Dropdown.Menu style={{ minWidth: '370px' }}>
            {!cart.length ? (
              <span style={{ padding: 10 }}>Cart is empty</span>
            ) : (
              cart.map((cartItem) => (
                <span key={cartItem.id} className='cartItem-dropdown-container'>
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    style={{ height: '50px' }}
                    className='cartItem-dropdown-img'
                  />
                  <div className='cartItem-dropdown-details'>
                    <span>{cartItem.name}</span>
                    <span>${cartItem.price}</span>
                  </div>
                  <AiFillDelete
                    className='cartItem-dropdown-delete'
                    onClick={() => handleDelete(cartItem.id)}
                  />
                </span>
              ))
            )}
            <Link to='/cart'>
              <Button style={{ width: '95%', margin: '0 10px' }}>
                Go to cart
              </Button>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
