const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (movie) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      movie
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const movieReview = async(movie) => {
  const response = await fetch(`${BASE_URL}/movie/${movie.id}/reviews?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}