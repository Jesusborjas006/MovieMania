import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Pagination from "../components/pagination";
import MovieData from "../types";


type HomeProps = {
  movies: MovieData
  setMovies: React.Dispatch<React.SetStateAction<MovieData | []>>
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
};

const Home = ({ movies, setMovies, setSelectedMovie }: HomeProps) => {
  const [pageNum, setPageNum] = useState(1);

  const movieElements = movies.map((movie) => (
    <Movie
      key={movie.id}
      adult={movie.adult}
      backdropImg={movie.backdrop_path}
      genreIDs={movie.genre_ids}
      id={movie.id}
      language={movie.original_language}
      overview={movie.overview}
      posterImg={movie.poster_path}
      title={movie.title}
      setSelectedMovie={setSelectedMovie}
    />
  ));

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNum}`
      );
      const data = await response.json();
      setMovies(data.results);
    };
    fetchMovies();
  }, [pageNum, setMovies]);

  return (
    <>
      <main className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {movieElements}
      </main>
      <Pagination pageNum={pageNum} setPageNum={setPageNum} />
    </>
  );
};

export default Home;
