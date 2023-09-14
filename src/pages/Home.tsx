import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Pagination from "../components/pagination";
import MovieData from "../types";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

type HomeProps = {
  movies: MovieData;
  setMovies: React.Dispatch<React.SetStateAction<MovieData | []>>;
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Home = ({
  movies,
  setMovies,
  setSelectedMovie,
  isLoading,
  setIsLoading,
}: HomeProps) => {
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState("");

  const movieElements = movies.map((movie) => (
    <Movie
      key={movie.id}
      id={movie.id}
      posterImg={movie.poster_path}
      title={movie.title}
      setSelectedMovie={setSelectedMovie}
    />
  ));

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNum}`
        );
        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Something went wrong with fetching movies");
        }
        const data = await response.json();
        setMovies(data.results);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchMovies();
  }, [pageNum, setIsLoading, setMovies]);

  return (
    <div className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto">
      {isLoading && <Loading />}
      {!isLoading && !error && (
        <>
          <main className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
            {movieElements}
          </main>
          <Pagination pageNum={pageNum} setPageNum={setPageNum} />
        </>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Home;
