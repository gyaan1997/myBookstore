import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import dummyData from '../Configs/dummyData';
import BookCard from '../Components/BookCard';
// import FilterBooks from '../Components/Filter';
import { Link } from 'react-router-dom';

const BookPage = () => {
    const [books, setBooks] = useState([]);
  // const[filteredBooks,setFilteredBooks]=useState([]);
    useEffect(() => {
   
        setBooks(dummyData);
            // setFilteredBooks(dummyData);
    }, []);
  
    // const handleAddToCart = (bookId) => {
    //   // Implement your "Add to Cart" logic here
    //   console.log(`Book with ID ${bookId} added to cart`);
    // };
    return (
      <div>
        <Typography variant="h4" gutterBottom >
     Find your favourite books here!
          {/* <FilterBooks /> */}
        </Typography>
        <div    style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
        }}>
          {books.map((book) => (
             <Link key={book.id} to={`/bookdetail/${book.id}`} style={{ textDecoration: 'none' }}>
             <BookCard book={book} />
           </Link>
        
          ))}
        </div>
      </div>
    );
  };
  
  export default BookPage;
  