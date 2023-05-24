import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ModalMovie = ({ movie }) => {
  const [comments, setComment] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  
    const handleAddToFavorite = () => {
      // Send data to the server using the '/addMovie' endpoint
      const data = {
        movieId: movie.id,
        title: movie.title,
        comments: comments,
        poster_path:movie.poster_path,
      };
  
      fetch('https://movie-library-190n.onrender.com/getMovies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log('Movie added to favorites:', result);

        })
        .catch((error) => {
          console.error('Error adding movie to favorites:', error);
          // Handle error or display an error message to the user
        });
    };   

  const handleClose = () => {
    setShowModal(false);
  };

  const handleShow = () => {
    setShowModal(true);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add to Favorites
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <Form.Control
            type="text"
            placeholder="Add a comment..."
            value={comments}
            onChange={handleCommentChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToFavorite}>
            Add to Favorites
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalMovie;
