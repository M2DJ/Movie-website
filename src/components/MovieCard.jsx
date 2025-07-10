
const MovieCard = ({movie}) => {
  return (
    <div>
        <div>
            <img src={movie.poster} alt={movie.title}/>
            <button>❤︎</button>
        </div>
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard