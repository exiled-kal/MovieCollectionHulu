import React, {useState, useEffect} from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import Axios from 'axios';

function Results() {
  const [movies, setMovies] = useState([]);

  useEffect(()=> {
    axios.get
  })


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
