import React, {useState} from 'react';
import './Results.css';
import VideoCard from './VideoCard';

function Results() {
  const [movies, setMovies] = useState(["1"]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard
        //   movie={}
        />
      ))}
    </div>
  );
}

export default Results;
