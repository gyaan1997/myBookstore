// AppRouter.js
import React,{useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Books from './Pages/Books';
import BookDetail from './Pages/BookDetail';
import Authors from './Pages/Authors';
import Cart from './Components/Cart';
import NavBar from './Components/Navbar';
import { CartProvider } from './Context';

const MainLayout = ({ children }) => (
  <div style={{background:'Gainsboro'}}>
    <NavBar />
    {children}
  </div>
);


const AppRouter = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (bookId) => {
    // Implement the logic to add items to the cart, similar to the previous example
  };

  return (
    <Router>
      <CartProvider>
      <Routes>
        <Route
          path="/"
          element={<MainLayout><Home /></MainLayout>}
        />
        <Route
          path="/books/*"
          element={<MainLayout><Books onAddToCart={handleAddToCart} /></MainLayout>}
        />
        <Route
          path="/bookdetail/:id"
          element={<MainLayout><BookDetail /></MainLayout>}
        />
        <Route
          path="/authors/*"
          element={<MainLayout><Authors /></MainLayout>}
        />
        <Route
          path="/cart"
          element={<MainLayout><Cart cartItems={cartItems} /></MainLayout>}
        />
      
      </Routes>
      </CartProvider>
    </Router>
  );
};

export default AppRouter;
