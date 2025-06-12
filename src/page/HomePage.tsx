import "../App.css";
import MovieList from "../components/MovieList";
import { useEffect, useState, type KeyboardEvent } from "react";
import fetchMovieData from "../api/fetchMovieData";
import type { MovieData } from "../types/MovieData";
import { useNavigate, useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";
  const [searchTerm, setSearchTerm] = useState(query);

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovieData(query)
      .then((data) => {
        setLoading(true);
        setError(null);
        setMovies(data);
      })
      .catch(() => {
        setError("영화를 가져오는 중 오류 발생");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  const handleSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearchParams({ query: searchTerm });
    }
  };

  const handleClick = () => {
    navigate("/");
    setSearchTerm("");
  };

  return (
    <div className="movie-app">
      <header className="movie-header">
        <div className="movie-header-title" onClick={handleClick}>
          <h3>Movie</h3>
          <h3>View</h3>
        </div>
        <input
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => handleSearch(e)}
        />
      </header>
      {loading && <p className="movie-message">데이터를 가져오고 있습니다.</p>}
      {error && <p className="movie-message">{error}</p>}
      {!loading && !error && movies.length === 0 && (
        <p className="movie-message">검색 결과가 없습니다.</p>
      )}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
