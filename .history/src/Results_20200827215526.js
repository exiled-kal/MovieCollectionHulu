import React, {useState, useEffect} from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './requests';

function Results() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchA);
    }
    fetchData();
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
