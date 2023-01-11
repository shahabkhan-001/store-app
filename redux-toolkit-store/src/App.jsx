import React from 'react';
import CartItem from './Components/Cart';
import HomeCart from './Pages/homeCart';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomeCart />}/>
        <Route path={"/cartItem"} element={<CartItem />}/>
      </Routes>
    </>
  );
}

export default App;
