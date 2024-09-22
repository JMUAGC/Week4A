// Import React and necessary hooks for fetching data
import React, { useState, useEffect } from 'react';

const TMDB = () => {
    const [movies, setMovies] = useState([]);

    //Fetch Data from TMDB API
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = 'f987c3a454cb33e512c411803c205535';
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
                if (response.ok) {
                    const data = await response.json();
                    setMovies(data.results);
                } else {
                    throw new Error('Failed to fetch movies');
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchMovies();
    }, []);

    //Display Fetched Data
    return (
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <h2>{movie.title}</h2>
                        <p>{movie.overview}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TMDB;
