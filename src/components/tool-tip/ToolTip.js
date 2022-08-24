import './ToolTip.css';
import React, { useEffect, useRef, useState } from 'react';

const ToolTip = ({ element, message = '' }) => {
  const [display, setDisplay] = useState(false);
  const position = useRef({ x: 0, y: 0 });
  const timerRef = useRef();
  const tooltipRef = useRef();

  const toolTipMessageShow = {
    padding: '1em',
    backgroundColor: 'lightpink',
    position: 'absolute',
    width: '200px',
    // height: '100px',
    zIndex: '10',
    borderRadius: '5px',
    top: position.current.y,
    left: position.current.x,
  };

  function handleMouseMove(e) {
    if (!display) {
      let { x, y } = e;
      const { top, left } = e.target.getBoundingClientRect();
      const mouseTop = y - top + 'px';
      const mouseLeft = x - left + 'px';
      position.current = { x: mouseLeft, y: mouseTop };

      timerRef.current = setTimeout(() => {
        setDisplay(true);
      }, 100);
    }
  }

  useEffect(() => {
    if (display) {
      setTimeout(() => {
        setDisplay(false);
      }, 1000);
    }
  }, [display]);

  useEffect(() => {
    if (!tooltipRef.current) return;
    tooltipRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      tooltipRef.current.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='tool-tip-container' ref={tooltipRef}>
      {element}
      {display ? <div style={toolTipMessageShow}>{message}</div> : null}
    </div>
  );
};

export default ToolTip;
