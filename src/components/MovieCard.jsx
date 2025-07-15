import { Link } from "react-router-dom";
import { useMovieContext } from "../context/MovieContext";
import "../css/MovieCard.css";

const MovieCard = ({ movie }) => {
  const { addToFavs, removeFav, isFav } = useMovieContext();
  const favorite = isFav(movie.id);

  const onFavClick = (e) => {
    e.preventDefault();
    if (favorite) removeFav(movie.id);
    else addToFavs(movie);
  };

  return (
    // now the movie prop is passed to the review component
    <Link to={`/movie/${movie.title}`} state={{ movie }} className="movie-card-container">
      <div className="movie-image-container">
        <img
          className="movie-image"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <button
          className={`favorite-btn ${favorite && "active"}`}
          onClick={onFavClick}
        >
          ❤︎
        </button>
      </div>
      <div className="movie-details">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-release-date">{movie.release_date.split("-")[0]}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
