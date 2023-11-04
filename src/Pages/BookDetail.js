
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import dummyData from "../Configs/dummyData";
const BookDetailPage = () => {
  const { id } = useParams(); // Geting book ID from the route parameters
  const [book, setBook] = useState(null);

  useEffect(() => {
    const selectedBook = dummyData.find((item) => item.id === Number(id));
    setBook(selectedBook);
  }, [id]);

  if (!book) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  const { title, author, genre, description, coverImage } = book;

  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      <Card style={{ maxWidth: 800, margin: "20px" }}>
        <CardMedia
          component="img"
          height="540"
          image={coverImage}
          alt={title}
        />
        <div style={{display:"flex"}}>
        <CardContent>
          <Typography variant="h6">Author: {author}</Typography>
          <Typography variant="subtitle1">Genre: {genre}</Typography>
      
        
          <Typography variant="body1">Description: {description}</Typography>
        </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default BookDetailPage;
