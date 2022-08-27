import './filters.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating';

const Filters = () => {
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className='filter-container'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label='Ascending'
          name='group1'
          type='radio'
          id='inline-1'
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Descending'
          name='group1'
          type='radio'
          id='inline-2'
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Include out of stock'
          name='group1'
          type='checkbox'
          id='inline-3'
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Quick delivery'
          name='group1'
          type='checkbox'
          id='inline-4'
        />
      </span>
      <span>
        <label style={{ paddingRight: '1em' }}>Rating </label>
        <Rating
          rating={currentRating}
          style={{ cursor: 'pointer' }}
          onClick={setCurrentRating}
        />
      </span>
      <Button variant='light'>Clear Filters</Button>
    </div>
  );
};

export default Filters;
