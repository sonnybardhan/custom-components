import './App.css';
import Header from './components/shopping-cart-2/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/shopping-cart-2/Home';
import Cart from './components/shopping-cart-2/Cart';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
