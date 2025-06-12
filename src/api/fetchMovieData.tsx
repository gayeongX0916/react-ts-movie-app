const fetchMovieData = () => {
  const URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=7df3001bc5ef4f72a6d652f6f77d3177&language=ko-KR&page=1";

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
