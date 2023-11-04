import React, { useState, useEffect } from "react";
import dummyData from "../Configs/dummyData";
// import { Typography } from "@mui/material";
import { Card, CardContent, Typography,Link } from "@mui/material";


const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    setAuthors(dummyData);
  }, []);

  return (
    <div>
                  <Typography variant="h4">Pick your favourite Author!</Typography>
    {authors.map((author) => (
      <Link key={author.id} to={`/bookdetail/${author.id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ margin: '10px', maxWidth: '300px' }}>
          <CardContent>
            <Typography variant="h6">{author.author}</Typography>
          
          </CardContent>
        </Card>
      </Link>
    ))}
  </div>
  );
};

export default AuthorsPage;
