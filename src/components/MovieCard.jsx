
const MovieCard = ({movie}) => {
    const handleClick = () =>{
        alert('niice');
    }
  return (
    <div>
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
            <button onClick={handleClick}>❤︎</button>
        </div>
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date.split('-').slice(0 ,2).join('-')}</p>
        </div>
    </div>
  )
}

export default MovieCard