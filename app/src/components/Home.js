import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://movie-library-190n.onrender.com/trending`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching trending movies:', error));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
