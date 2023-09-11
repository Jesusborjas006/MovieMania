import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Pagination from "../components/pagination";

type MovieData = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}[];

const Home = () => {
  const [movies, setMovies] = useState<MovieData | []>([]);
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
  }, [pageNum]);

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
