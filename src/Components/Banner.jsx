import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "../utils/request";
import request from "../utils/api";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { saveMovie } from "../utils/userSavedMovies";
const baseUrl = `https://image.tmdb.org/t/p/original/`;
const Banner = () => {
  const [banner, setBanner] = useState(``);
  const [trailerLink, setTrailerLink] = useState("");
  useEffect(() => {
    const fetchBannerMovie = async () => {
      try {
        const { data } = await axios.get(request.fetchNetflixOriginals);
        const { results } = data;
        setBanner(results[Math.floor(Math.random() * results.length)]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBannerMovie();
  }, []);
  const getBannerStyles = () => {
    let sm = false;
    if (window.innerWidth < 760) sm = true;
    const margin = sm ? "30px" : "0px";
    const style = {
      width: "100%",
      // height: "100%",
      backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1.9),60% , transparent),url("${baseUrl}${banner.backdrop_path}")`,
      paddingTop: `${margin}`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      objectFit: "contain",
    };
    return style;
  };
  const getClassesBySize = (class1, class2) => {
    if (window.innerWidth > 760) return class1;
    return class2;
  };
  const handleMovieClick = (movie) => {
    // console.log(movie?.name);
    if (trailerLink) {
      setTrailerLink("");
    } else {
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
  const handleMovieAdd = (movie) => {
    saveMovie(movie);
  };
  const videoOptions = {
    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <React.Fragment>
      <header className="banner" style={getBannerStyles()}>
        <div
          className={getClassesBySize("banner-content", "sm-banner-content")}
        >
          <h1 className={getClassesBySize("title", "sm-title")}>
            {banner?.title || banner?.name || banner?.original_name}
          </h1>
          <p
            className={getClassesBySize(
              "banner-overview",
              "sm-banner-overview"
            )}
          >
            {banner.overview}
          </p>
          {/* </div> */}
          <div className="button-div">
            <button
              className={getClassesBySize("banner-button", "sm-banner-button")}
              onClick={() => handleMovieClick(banner)}
            >
              Play
            </button>
            <button
              className={getClassesBySize("banner-button", "sm-banner-button")}
              onClick={() => handleMovieAdd(banner)}
            >
              add to list
            </button>
          </div>
        </div>
      </header>
      {trailerLink && <YouTube videoId={trailerLink} opts={videoOptions} />}
    </React.Fragment>
  );
};

export default Banner;
