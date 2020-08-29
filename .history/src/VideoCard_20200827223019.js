import React from 'react';
import './VideoCard.css';

function VideoCard({movie}) {
  
  const base_url = "https://image.tmd"
  return (
    <div className="videoCard">
      <img
        src={}
        alt=""
      />
      <p>This is a film about...</p>
      <h2>Movie title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
