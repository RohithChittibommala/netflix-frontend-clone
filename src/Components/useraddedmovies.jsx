import React, { useState, useEffect } from "react";
import styles from "./useradded.module.css";
import { getMovies, updateLocalStorage } from "../utils/userSavedMovies";
const baseUrl = `https://image.tmdb.org/t/p/original/`;
const UserAdded = ({ history }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    setMovies(getMovies());
  }, []);
  const getDate = (date) => {
    const date1 = new Date(date);
    const month = date1.toLocaleString("default", { month: "long" });
    const year = date1.getFullYear();
    return `${year}  ${month}`;
  };
  const handleMovieDelete = (movie) => {
    const listmovie = movies.filter((m) => m.id !== movie.id);
    setMovies(listmovie);
    updateLocalStorage(movie);
  };
  const handleGoBack = () => {
    history.push("./");
  };
  const getCardStyles = (button = null) => {
    if (window.innerWidth < 750) {
      console.log(true);
      return {
        marginBottom: "25px",
      };
    }
    if (button && window.innerWidth < 750) {
      return;
    }
  };
  const getMovieCard = (movie, key) => {
    return (
      <div style={getCardStyles()} className={styles.card} key={key}>
        <div className={styles.movieposter}>
          <img
            src={`${baseUrl}${movie.backdrop_path || movie.poster_path}`}
            alt="movie"
          />
        </div>
        <div className={styles.details}>
          <h1>{movie.title || movie.original_name}</h1>
          <div className={styles.info}>
            {movie.adult && <p>18+</p>}
            <p>average vote:{movie.vote_average}</p>
            <p>
              date of release :{" "}
              {getDate(movie.release_date || movie.first_air_date)}
            </p>
            <p>popularity :{movie.popularity}</p>
            <button onClick={() => handleMovieDelete(movie)}>delete</button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.body}>
      {!movies?.length && (
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Hmm... add some movies
        </h1>
      )}
      <div className={styles.container}>
        {movies?.map((movie) => getMovieCard(movie, movie.id))}
      </div>

      <button
        style={
          window.innerWidth < 750
            ? {
                left: "36%",
              }
            : null
        }
        onClick={handleGoBack}
        className={styles.goBack}
      >
        Go back
      </button>
    </div>
  );
};

export default UserAdded;
