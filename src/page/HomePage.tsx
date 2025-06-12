import "../App.css";
import MovieList from "../components/MovieList";
import { useEffect, useState, type KeyboardEvent } from "react";
import fetchMovieData from "../api/fetchMovieData";
import type { MovieData } from "../types/MovieData";

const HomePage = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovieData().then((data) => setMovies(data));
  }, []);

  const handleSearch = async (
    e: KeyboardEvent<HTMLInputElement>,
    query: string
  ) => {
    if (e.key === "Enter") {
      fetchMovieData(query).then((data) => setMovies(data));
    }
  };

  return (
    <div className="movie-app">
      <header className="movie-header">
        <div className="movie-header-title">
          <h3>Movie</h3>
          <h3>View</h3>
        </div>
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleSearch(e, searchTerm)}
        />
      </header>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
