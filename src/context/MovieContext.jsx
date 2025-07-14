import { createContext, useContext, useState } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavs = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFav = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFav = (movieId) => {
    setFavorites((perv) => prev.some((movie) => movie.id === movieId));
  };

  const value = { favorites, addToFavs, removeFav, isFav };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
