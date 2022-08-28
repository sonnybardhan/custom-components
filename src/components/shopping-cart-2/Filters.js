import './filters.css';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating';
import { useCartState } from './context/Context';

const Filters = () => {
  // const [currentRating, setCurrentRating] = useState(0);
  const {
    filters: { sort, byStock, byQuickDelivery, bySearchQuery, byRating },
    filtersDispatch,
  } = useCartState();

  // console.log(filters);

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
          checked={sort === 'asc' ? true : false}
          onChange={() =>
            filtersDispatch({ type: 'SORT_BY_PRICE', payload: 'asc' })
          }
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Descending'
          name='group1'
          type='radio'
          id='inline-2'
          checked={sort === 'desc' ? true : false}
          onChange={() =>
            filtersDispatch({ type: 'SORT_BY_PRICE', payload: 'desc' })
          }
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Include out of stock'
          name='group1'
          type='checkbox'
          id='inline-3'
          checked={byStock ? true : false}
          onChange={() => filtersDispatch({ type: 'BY_STOCK' })}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Quick delivery'
          name='group1'
          type='checkbox'
          id='inline-4'
          checked={byQuickDelivery}
          onChange={() => filtersDispatch({ type: 'BY_QUICK_DELIVERY' })}
        />
      </span>
      <span>
        <label style={{ paddingRight: '1em' }}>Rating </label>
        <Rating
          rating={byRating}
          style={{ cursor: 'pointer' }}
          onClick={filtersDispatch}
        />
      </span>
      <Button
        variant='light'
        onClick={() => filtersDispatch({ type: 'CLEAR_FILTERS' })}
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
