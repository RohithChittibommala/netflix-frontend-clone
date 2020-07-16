import React, { useState, useEffect } from "react";
import axios from "./../utils/request";
import "./row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { saveMovie } from "../utils/userSavedMovies";
const baseUrl = `https://image.tmdb.org/t/p/original/`;
const Row = (props) => {
  const { fetchUrl, title, isLarge } = props;
  const [movies, setMovies] = useState([]);
  const [trailerLink, setTrailerLink] = useState("");
  const [playingMovie, SetPlayingMovie] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      const {
        data: { results },
      } = await axios.get(fetchUrl);

      setMovies(results);
      return results;
    };
    fetchMovies();
  }, [fetchUrl]);
  const handleMovieAdd = (movie) => {
    saveMovie(movie);
  };
  const handleMovieClick = (movie) => {
    if (trailerLink && movie === playingMovie) {
      setTrailerLink("");
    } else {
      SetPlayingMovie(movie);
      movieTrailer(movie?.title || movie.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerLink(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const videoOptions = {
    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const classnames = isLarge ? `poster largeposter` : `poster`;
  return (
    <div className="row">
      <h1 className="row-title">{title}</h1>
      <div className={classnames}>
        {movies.map(
          (movie) =>
            movie.poster_path &&
            movie.backdrop_path && (
              <React.Fragment key={movie.id}>
                <img
                  key={movie.id}
                  src={`${baseUrl}${
                    isLarge ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title}
                  onClick={() => handleMovieClick(movie)}
                />

                <div className="play">
                  <button
                    className="btn1"
                    onClick={() => handleMovieClick(movie)}
                  >
                    play
                  </button>
                  <button
                    className="btn2"
                    onClick={() => handleMovieAdd(movie)}
                  >
                    add to list
                  </button>
                </div>
              </React.Fragment>
            )
        )}
      </div>
      {trailerLink && <YouTube videoId={trailerLink} opts={videoOptions} />}
    </div>
  );
};

export default Row;
