const api = "b76b1bdc0623efd692d3fc2d43239a5e";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${api}&language=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${api}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${api}&with_networks=213`,
  fetchActionMovies: `/discover/movie?api_key=${api}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${api}&with_genres=99`,
};
// const app = {};
export default requests;
// export  api;
