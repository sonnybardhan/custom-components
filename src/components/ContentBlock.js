import React from 'react';
import './ContentBlock.css';
const ContentBlock = ({ content, idx }) => {
  const { text } = content;

  const isLeft = idx % 2 === 0;

  return (
    <div
      className={
        isLeft
          ? 'content-block content-block-left'
          : 'content-block content-block-right'
      }
    >
      <div className='content-text'>{text}</div>
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
