import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Rating = ({ rating, onClick = () => {}, style = {} }) => {
  return (
    <>
      {[...Array(5)].map((_, idx) => {
        return (
          <span
            key={Math.random()}
            onClick={() => onClick({ type: 'BY_RATING', payload: idx + 1 })}
            style={style}
          >
            {idx < rating ? <AiFillStar /> : <AiOutlineStar />}
          </span>
        );
      })}
    </>
  );
};

export default Rating;
