import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';

function VideoCard({movie}) {
  const base_url = 'https://image.tmdb.org/t/p/original';
  return (
    <div className="videoCard">
      <img
        // Some movie image doesn't backdrop_path so we have poster-path
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="movie poster"
      />

      <TextTruncate
        line={2}
        element="p"
        truncateText="..."
        text={movie.overview}
      />
      {/* either show me the release_date or first-air-date */}

      <h2>{movie.title || movie.original_name}</h2>
      <p>{}</p>
    </div>
  );
}

export default VideoCard;
