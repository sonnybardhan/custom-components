import React from 'react';
import { Navbar, Container, FormControl, Dropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar expand='lg' variant='dark' bg='dark'>
      <Container>
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className='search'>
          <FormControl style={{ width: '500px' }} placeholder='Search' />
        </Navbar.Text>
        <Dropdown>
          <Dropdown.Toggle variant='success' id='dropdown-basic'>
            <AiOutlineShoppingCart />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Navbar>
  );
};

export default Header;
