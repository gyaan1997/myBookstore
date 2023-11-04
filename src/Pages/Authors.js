import React, { useState, useEffect } from "react";
import dummyData from "../Configs/dummyData";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAuthors(dummyData);
  }, []);

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <Typography variant="h4" style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
        Pick your favourite Author!
      </Typography>
      {authors.map((author) => (
        <Card
          key={author.id}
          onClick={() => handleNavigate(`/bookdetail/${author.id}`)}
          style={{ width: '300px', margin: '10px', cursor: 'pointer' }}
        >
          <CardContent>
            <Typography variant="h6">{author.author}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AuthorsPage;
