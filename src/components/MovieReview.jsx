import { useLocation } from "react-router-dom";
import '../css/MovieReview.css'

const MovieReview = () => {
  const { state } = useLocation();
  const movie = state?.movie;

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-review-container">
        <img
          className="movie-review-poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      <div className="movie-review">
        <h1>{movie.title}</h1>
        <div>{movie.review}</div>
      </div>
    </div>
  );
};

export default MovieReview;
