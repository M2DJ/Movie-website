import '../css/MovieCard.css'

const MovieCard = ({movie}) => {
    
    const handleClick = () =>{
        alert('niice');
    }

  return (
    <div className="movie-card-container">
        <div className="movie-image-container">
            <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <button className="favorite-btn" onClick={handleClick}>❤︎</button>
        </div>
        <div className="movie-details">
            <h3 className='movie-title'>{movie.title}</h3>
            <p className='movie-release-date'>{movie.release_date.split('-')[0]}</p>
        </div>
    </div>
  )
}

export default MovieCard