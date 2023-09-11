import { useEffect, useState } from "react";

const Home = () => {
  const [movies, setMovies] = useState(null);
  console.log(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=53208bbbe918239e53dd4f9602cf91b5"
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return <main></main>;
};

export default Home;
