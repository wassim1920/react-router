import React from 'react';
import MovieCard from './MovieCard';
import moviesData from '../moviesData.json';

function MovieList() {
  return (
    <div>
      {moviesData.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
