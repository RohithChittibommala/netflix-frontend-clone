let movies = [];

export const saveMovie = (movie) => {
  if (movies.includes(movie)) return;
  movies.push(movie);
  localStorage.setItem("movies", JSON.stringify(movies));
};
export const getMovies = () => {
  const list = JSON.parse(localStorage.getItem("movies"));
  return list;
};
export const updateLocalStorage = (movie) => {
  const list = JSON.parse(localStorage.getItem("movies"));
  // localStorage.removeItem("movies");
  const listmovie = list.filter((m) => m.id !== movie.id);
  movies = [...listmovie];
  localStorage.setItem("movies", JSON.stringify(movies));
};
