import React from 'react';
import './VideoCard.css';

function VideoCard({movie}) {
  const base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="videoCard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <p>This is a film about...</p>
      <h2>{movie.title}</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
