import React, { useState, useEffect } from "react";
import dummyData from "../Configs/dummyData";
import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthorsPage = () => {
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();
console.log(navigate)
  useEffect(() => {
    setAuthors(dummyData);
  }, []);


  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div>
      <Typography variant="h4">Pick your favourite Author!</Typography>
      {authors.map((author) => (
        <Card
          key={author.id}
          onClick={() => handleNavigate(`/bookdetail/:${author.id}`)} 
          style={{ margin: '10px', maxWidth: '300px', cursor: 'pointer' }}
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
