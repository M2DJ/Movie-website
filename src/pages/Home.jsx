import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "../services/api";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const loadPopularMovies = async() => {
            try{
                const popluar = await getPopularMovies();
                setMovies(popluar);
            } catch(err) {
                console.log(err);
                setError('Failed to load movies');
            } finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    

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