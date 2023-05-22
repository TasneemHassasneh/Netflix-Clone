import Movie from './Movie';
import { Row } from 'react-bootstrap'


function MovieList ({ movies })  {
  return (
    <>
        <Row>
       {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </Row> 
   </>

  );
};

export default MovieList;
