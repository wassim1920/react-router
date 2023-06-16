import React from 'react';
import { useParams } from 'react-router-dom';
import moviesData from '../moviesData.json';

function MovieDetails({ history }) {
  const { id } = useParams();

  const movie = moviesData.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe title="Movie Trailer" width="560" height="315" src={movie.trailerLink} frameBorder="0" allowFullScreen></iframe>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default MovieDetails;
