import React, {useState, useEffect} from 'react';
import './Results.css';
import VideoCard from './VideoCard';

function Results() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async
  }, []);

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
