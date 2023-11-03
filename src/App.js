// AppRouter.js
import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Books from './Pages/Books';
import BookDetail from './Pages/BookDetail';
import Authors from './Pages/Authors';

const AppRouter = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/bookdetail/:id" element={<BookDetail />} />
        <Route path="/authors" element={<Authors />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
