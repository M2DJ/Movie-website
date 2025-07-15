
const MovieReview = ({movie}) => {
  return (
    <div className="movie-review-container">
        <div className="movie-details">
            <img src={movie.poster_path} alt={movie.title}/>
            <h1>{movie.title}</h1>
        </div>
        <div className="movie-review">
            {movie.review}
        </div>
    </div>
  )
}

export default MovieReview