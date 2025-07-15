import {useEffect} from "react";
import './App.css';
import SearchIcon from './magSearch.svg';
import MovieCard from './MovieCard';
import { useState} from "react";

const API_URL = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_OMDB_API_KEY}`;


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);
    }

    // Add this function to handle Enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            searchMovies(searchTerm);
        }
    }

    useEffect (() => {
        searchMovies('Spiderman')
    }, []);
    
    return (
        <div className="app">
            <h1>Filmoriel</h1>

            <div className="search">
                <input 
                    placeholder="Search any movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown}  // Add this line
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ?(
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} key={movie.imdbID}/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>Ugh..! No Movies Found</h2>
                            <div className="suggestions">
                                <h3><p>Try:</p>- Searching for a different movie title.</h3>
                                <h3>- Check your internet connection.</h3>
                                <h3>- Check the 'API key' in .env file & 'API URL' in App.js file.</h3>
                                <h3>- Check the API key validity.</h3>
                            </div>
                    </div>
                )}

        </div>
    );
}

export default App;