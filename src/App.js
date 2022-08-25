import './App.css';
import React, { useState, createContext } from 'react';
import DummyComponent from './components/ctx-component/DummyComponent';
import DummyComponent2 from './components/ctx-component/DummyComponent2';

export const ThemeContext = createContext();

function App() {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      <div className=''>
        <DummyComponent />
        <DummyComponent2 />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
