import { useLocation } from "react-router-dom";
import "../css/MovieReview.css";
import { useEffect, useState } from "react";
import { movieReview } from "../services/api";

const MovieReview = () => {
  const { state } = useLocation();
  const movie = state?.movie;

  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        const review = await movieReview(movie.id);
        setReviews(review);
      } catch (err) {
        console.log(err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };
    
    loadReviews();
  }, []);

  if (!movie) return <div>Movie not found</div>;

  console.log(reviews);

  return (
    <div className="movie-review-container">
      <img
        className="movie-review-poster"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="movie-review">
        <h1>{movie.title}</h1>
        <div>
          {reviews.length > 0 ? (
            reviews.map((review) => <p>{review.content}</p>)
          ) : (
            <p>No reviews found for this movie.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieReview;
