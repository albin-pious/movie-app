import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constant';


function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(res => {
      console.log(res.data.results[0]);
      const movies = res.data.results;
      const randomMovieIndex = Math.floor(Math.random()* movies.length);
      const randomMovie = movies[randomMovieIndex];
      setMovie(randomMovie);
    });
  }, []);

  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:''})`}}>
      {movie && (
        <div className="content">
          <h1 className='title'>{movie.title}</h1>
          <div className="banner-buttons">
            <button className="button">Play</button>
            <button className="button">My List</button>
            <h1 className="description">{movie.overview}</h1>
          </div>
        </div>
      )}
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
