// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Books from './Pages/Books';
import BookDetail from './Pages/BookDetail';
import Authors from './Pages/Authors';
import Cart from './Components/Cart';
import NavBar from './Components/Navbar';
import { CartProvider } from './Context';
import PrivateRoute from './Components/PrivateRoute';
import LoginPage from './Pages/LoginPage'
const MainLayout = ({ children }) => (
  <div style={{ background: 'Gainsboro' }}>
    <NavBar />
    {children}
  </div>
);

const AppRouter = ({ isAuthenticated }) => {
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
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MainLayout><Books /></MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/bookdetail/:id"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MainLayout><BookDetail /></MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/authors/*"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MainLayout><Authors /></MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <MainLayout><Cart /></MainLayout>
              </PrivateRoute>
            }
          />

          <Route
            path="/loginpage"
            element={<MainLayout><LoginPage /></MainLayout>}
          />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default AppRouter;
