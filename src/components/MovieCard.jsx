import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Link to={`/movie/${movie.id}`}>See Details</Link>
    </div>
  );
}

export default MovieCard;
