import React from 'react';
import './ContentBlock.css';
const ContentBlock = ({ content, idx }) => {
  const { body, id } = content;

  const isLeft = idx % 2 === 0;

  return (
    <div
      className={
        isLeft
          ? 'content-block content-block-left'
          : 'content-block content-block-right'
      }
    >
      <div className='content-text'>
        <h3>{id}</h3>
        <p>{body}</p>
      </div>
      <span
        className={isLeft ? 'arrow arrow-left' : 'arrow arrow-right'}
      ></span>
      <span
        className={isLeft ? 'marker marker-left' : 'marker marker-right'}
      ></span>
    </div>
  );
};

export default ContentBlock;
