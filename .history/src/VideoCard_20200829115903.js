import React from 'react';
import './VideoCard.css';

function VideoCard({movie}) {
  const base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="videoCard">
      <img
        // Some movie image doesn't backdrop_path so we have poster-path
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />
      {/* either show me the release_date or first-air-date */}
      <p>{movie.overview}</p>
      
      <h2>{movie.title}</h2>
      <p></p>
    </div>
  );
}

export default VideoCard;
