import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import ModalMovie from './ModalMovie';

function Movie ({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const options = () => {
    setShowModal(true);
  };

  return (
    <Card style={{ width: '18rem' }} key={movie.id}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.overview}</Card.Text>
          <Button onClick={options}>...</Button>
           {showModal && <ModalMovie movie={movie} />}
      </Card.Body>
    </Card>
  );
};

export default Movie;
