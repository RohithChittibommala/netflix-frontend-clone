import React from "react";
import "./App.css";
import Row from "./Components/Row";
import Url from "./utils/api";
import Banner from "./Components/Banner";
import Navbar from "./Components/NavBar";
function Main() {
  // window.addEventListener("resize", () => {
  //   const { location } = window;
  //   if (window.innerWidth < 760) location.reload();
  // });
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row title={`Trending`} fetchUrl={Url.fetchTrending} isLarge={true} />
      <Row title={`Top Rated`} fetchUrl={Url.fetchTopRated} />
      <Row title={`Netflix Originals`} fetchUrl={Url.fetchNetflixOriginals} />
      <Row title={`Action `} fetchUrl={Url.fetchActionMovies} />
      <Row title={`Comedy`} fetchUrl={Url.fetchComedyMovies} />
      <Row title={`Horror `} fetchUrl={Url.fetchHorrorMovies} />
      <Row title={`Romance`} fetchUrl={Url.fetchRomanceMovies} />
      <Row title={`Documentries`} fetchUrl={Url.fetchDocumentries} />
      {/* <Route  */}
    </div>
  );
}
export default Main;
