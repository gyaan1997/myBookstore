// BookFilter.js
import React, { useState, useEffect } from 'react';

const FilterBooks = ({ books, onFilterChange }) => {
  const [allGenres, setAllGenres] = useState(['All']);
  const [allAuthors, setAllAuthors] = useState(['All']);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedAuthor, setSelectedAuthor] = useState('All');

  useEffect(() => {
    fetchAllGenresAndAuthors();
  }, [books]);

  const fetchAllGenresAndAuthors = () => {
    const genresSet = new Set(books.map((book) => book.genre));
    const authorsSet = new Set(books.map((book) => book.author));

    setAllGenres(['All', ...Array.from(genresSet)]);
    setAllAuthors(['All', ...Array.from(authorsSet)]);
  };

  const handleGenreChange = (event) => {
    const genre = event.target.value;
    setSelectedGenre(genre);
    filterBooks(genre, selectedAuthor);
  };

  const handleAuthorChange = (event) => {
    const author = event.target.value;
    setSelectedAuthor(author);
    filterBooks(selectedGenre, author);
  };

  const filterBooks = (genre, author) => {
    let filtered = books;

    if (genre !== 'All') {
      filtered = filtered.filter((book) => book.genre === genre);
    }

    if (author !== 'All') {
      filtered = filtered.filter((book) => book.author === author);
    }

    onFilterChange(filtered);
  };

  return (
    <div>
      <label htmlFor="genre">Genre:</label>
      <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
        {allGenres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <label htmlFor="author" style={{ marginLeft: '10px' }}>
        Author:
      </label>
      <select id="author" value={selectedAuthor} onChange={handleAuthorChange}>
        {allAuthors.map((author) => (
          <option key={author} value={author}>
            {author}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBooks;
