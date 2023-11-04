import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import dummyData from '../Configs/dummyData';
import BookCard from '../Components/BookCard';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context';

const BookPage = () => {
  const [books, setBooks] = React.useState([]);
  const [sortValue, setSortValue] = useState('');
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    setBooks(dummyData);
  }, []);



  const handleSortChange = (event) => {
    const selectedValue = event.target.value;

    setSortValue(selectedValue);

    // Implement sorting logic based on the selected value
    if (selectedValue === 'author') {
      // Sort by author's name
      const sortedBooks = [...dummyData].sort((a, b) => a.author.localeCompare(b.author));
      setBooks(sortedBooks);
    } 
  };

  const uniqueAuthors = [...new Set(books.map((book) => book.author))];

  return (
    <div>
   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <Typography variant="h4" gutterBottom>
    Find your favourite books here!
  </Typography>

  {/* Dropdown for sorting */}
  <span style={{ fontSize: '18px', fontWeight: 'bold', margin: '10px 0' }}>
          Sort books by authors
        </span>  <Select value={sortValue} onChange={handleSortChange} style={{ marginBottom: '20px' }}>
  <MenuItem value="">All Authorsr</MenuItem>
    {uniqueAuthors.map((author) => (
      <MenuItem key={author} value={author}>
        {author}
      </MenuItem>
    ))}
  </Select>
</div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}
      >
        {books
          .filter((book) => !sortValue || book.author === sortValue) // Filter based on selected author
          .map((book) => (
            <BookCard key={book.id} book={book} onAddToCart={() => addToCart(book)} />
          ))}
      </div>
    </div>
  );
};

export default BookPage;
