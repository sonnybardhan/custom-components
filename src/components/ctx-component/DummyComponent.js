import React, { useContext } from 'react';
import { ThemeContext } from '../../App';

const DummyComponent = () => {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: dark ? 'black' : '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={() => setDark(!dark)}>Change!</button>
    </div>
  );
};

export default DummyComponent;
