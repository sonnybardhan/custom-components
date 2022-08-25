import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

const DummyComponent2 = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: '400px',
        backgroundColor: dark ? 'brown' : 'tomato',
        height: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => setDark(!dark)}>Change!</button>
    </div>
  );
};

export default DummyComponent2;
