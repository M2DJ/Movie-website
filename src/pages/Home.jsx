import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/api";
import '../css/Home.css'

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    {/* For loading movies */}
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

    {/* For searching for movies */}
    const handleSearch = async(e) => {
        e.preventDefault();

        if(!search.trim()) return;
        if(loading) return;

        setLoading(true);
        try{
            const searchResult = await searchMovies(search);
            setMovies(searchResult);
            setError(null);
        } catch(err) {
            console.log(err);
            setError('Failed to load movies');
        } finally {
            setLoading(false);
        }

        setSearch("");
    }


  return (
    <div className="home-container">
        {/* This is the search form */}
        <div className="search-bar-container">
            <form className="search-form" onSubmit={handleSearch}>
                <input className="search-input" type='text' onChange={e => setSearch(e.target.value)} placeholder="Search for movies..."/>
                <button className="search-btn">Submit</button>
            </form>
        </div>
        {/* This is the div that displays the Movies */}
        <div className="movie-container">
            <div className="movies">
                {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
            </div>
        </div>
    </div>
  )
}

export default Home