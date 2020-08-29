import React, {useState, useEffect} from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FlipMove from 'react-flip-move';

function Results({selectedOption}) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <Flip className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
