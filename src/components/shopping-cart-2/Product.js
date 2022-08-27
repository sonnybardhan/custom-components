import './cart-styles.css';
import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({ data }) => {
  return (
    <Card>
      <Card.Img variant='top' src={data.image} alt={data.name} />
    </Card>
  );
};

export default Product;
