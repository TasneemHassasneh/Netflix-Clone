import React, { useEffect, useState } from 'react';

const FavList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch data from the /getMovies endpoint
    fetch('https://movie-library-190n.onrender.com/getMovies')
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data);
        
        setMovies(data);
        
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Favorite Movies</h1>
      {movies.length < 0 ? (
        movies.map(movie => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={movie.poster_path} alt={movie.title} />
            <button>Delete</button>
            <button>Update</button>
          </div>
        ))
      ) : (
        <p>No favorite movies found</p>
      )}
    </div>
  );
};

export default FavList;
