import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../context/MovieContext";
import "../css/Favorites.css";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites.length != 0) {
    return (
      <div className="favorites-container">
        <div className="favorite-movies">
          <h1>Your Favorites</h1>
          <div className="movies">
            {favorites.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-container-of-no-fav">
        <h1 className="h1-of-no-favs">No Favorites Yet</h1>
        <p>Favorite some movies and you will see them here!</p>
      </div>
    );
  }
};

export default Favorites;
