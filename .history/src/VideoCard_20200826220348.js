import React from 'react';
import './VideoCard.css';

function VideoCard({movie}) {
  return (
    <div className="videoCard">
      <h1>Hello</h1>
      <img
        src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/a3liO9nUSCyEhyiAnDOW_Profit-with-JavaScript-new.jpg"
        alt=""
      />
      <p>This is a film about</p>
      <h2>Movie title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
