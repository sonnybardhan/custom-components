import React from 'react';
import ContentBlock from './ContentBlock';
import './Timeline.css';
import { events } from './events';

const Timeline = (props) => {
  return (
    <div className='timeline-container'>
      {events.map((event, idx) => {
        return <ContentBlock content={event} idx={idx} key={Math.random()} />;
      })}
    </div>
  );
};

export default Timeline;
