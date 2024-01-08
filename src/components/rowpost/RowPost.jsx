import React, { useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constant';
import Youtube from 'react-youtube';

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios.get(props.url).then((res) => {
      console.log('banner movies: ', res.data);
      setMovies(res.data.results);
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  };

  const movieTrailers = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res) => {
      if (res.data.results.length !== 0) {
        console.log('movie data: ', res.data.results);
        setSelectedMovie(res.data.results[0]);
      } else {
        alert('Trailer not available...');
      }
    });
  };
  return (
    <div className='row'>
      <h2 className='row-title'>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              onClick={() => movieTrailers(movie.id)}
              className={props.isSmall ? 'small-posters' : 'poster'}
              src={`${imageUrl + movie.backdrop_path}`}
              alt="Posters"
            />
            <p>{movie.original_title}</p>
          </div>
        ))}
      </div>
      {selectedMovie && <Youtube opts={opts} videoId={selectedMovie.key} />}
    </div>
  );
}



export default RowPost;
