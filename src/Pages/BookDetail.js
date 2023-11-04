import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import dummyData from "../Configs/dummyData";

const BookDetailPage = () => {
  const { id } = useParams();
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
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" align="center" gutterBottom>
          {title}
        </Typography>
        <Card>
          <CardMedia
            component="img"
            width= "200px"
            height= "500px"
            image={coverImage}
            alt={title}
            style={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography variant="h6">Author: {author}</Typography>
            <Typography variant="subtitle1">{genre}</Typography>
            <Typography variant="body1">Description: {description}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default BookDetailPage;
