import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';

const BookCard = ({ book, onAddToCart }) => {
  const id=useParams();

  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <Card style={{ maxWidth: '250px', margin: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <CardContent style={{ padding: '10px', textAlign: 'center' }}>
     <div onClick={() => handleNavigate(`/bookdetail/${id}`)}>
     <img
          src={book.coverImage}
          alt="coverpage"
          style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '8px' }}
        />
     </div>
        <Button variant="contained" color="primary" onClick={() => onAddToCart(book.id)}style={{ marginTop: '10px' }}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookCard;
