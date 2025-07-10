import MovieCard from "../components/MovieCard";

const Home = () => {
    const movies = [
        {id: 1, title:"Saif's film", release_date:"2004"},
    ];

  return (
    <div>
        {/* This is the search form */}
        <form>
            <input placeholder="Search for movies..."/>
            <button>Submit</button>
        </form>
        {/* This is the div that displays the Movies */}
        <div>
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
    </div>
  )
}

export default Home