import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import ModalUpdate from './ModalUpdate';

const FavList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    console.log(id)
    const serverURL = `https://movie-library-190n.onrender.com/getMovies/${id}`;
    axios
      .delete(serverURL)
      .then((response) => {
        setMovies((movies) => movies.filter((movie) => movie.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleUpdate = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  useEffect(() => {
    fetch(`https://movie-library-190n.onrender.com/getMovies`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching trending movies:', error));
  }, []);

  return (
    <div>
      <h1>Favorite Movies</h1>
      <Row>
        {movies.map(movie => (
           <Card style={{ width: '18rem' }} key={movie.id}>
             <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
             <Card.Body>
               <Card.Title>{movie.title}</Card.Title>
               <Card.Text>{movie.comments}</Card.Text>
               <Button variant="danger" onClick={() => handleDelete(movie.id)}>Delete</Button>
                <Button variant="primary" onClick={() => handleUpdate(movie)}> Update </Button>
             </Card.Body>
           </Card>
            
             
        ))}</Row>
          {selectedMovie && (
        <ModalUpdate movie={selectedMovie} showModal={showModal} setShowModal={setShowModal} setMovies={setMovies} />
      )}
    </div>
  );
};

export default FavList;
