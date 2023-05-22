import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap'

const FavList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://movie-library-190n.onrender.com/getMovies`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching trending movies:', error));
  }, []);

  return (
    <div>
      <h1>Favorite Movies</h1>
      
        {movies.map(movie => (
            <Row>
                <Card style={{ width: '18rem' }} key={movie.id}>
             <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
             <Card.Body>
               <Card.Title>{movie.title}</Card.Title>
                 <Button >Delete</Button>
                 <Button >Update</Button>
             </Card.Body>
           </Card>
            </Row>
             
        ))}
    </div>
  );
};

export default FavList;
