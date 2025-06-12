const fetchMovieData = async (query?: string) => {
  const URL = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=7df3001bc5ef4f72a6d652f6f77d3177&language=ko-KR&query=${encodeURIComponent(
        query
      )}`
    : "https://api.themoviedb.org/3/movie/popular?api_key=7df3001bc5ef4f72a6d652f6f77d3177&language=ko-KR&page=1";

  return fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`${Error}`);
      }
      return res.json();
    })
    .then((data) => data.results);
};

export default fetchMovieData;
