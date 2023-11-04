// BookPage.js
import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import dummyData from '../Configs/dummyData';
import BookCard from '../Components/BookCard';
// import Cart from '../Components/Cart';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context'; // Import useCart hook

const BookPage = () => {
  const [books, setBooks] = React.useState([]);
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart(); // Use useCart hook to access cart state and addToCart function

  useEffect(() => {
    setBooks(dummyData);
  }, []);

  const handleNavigate = () => {
    navigate('/cart');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Find your favourite books here!
      </Typography>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} onAddToCart={() => addToCart(book)} />
        ))}
      </div>
      {/* <Cart cartItems={cartItems} /> */}
    </div>
  );
};

export default BookPage;
