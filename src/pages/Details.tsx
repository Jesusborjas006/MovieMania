import { useEffect, useState } from "react";
import { MovieDetailsType } from "../types";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

type DetailsProps = {
  selectedMovie: number;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Details = ({ selectedMovie, isLoading, setIsLoading }: DetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );

  const endpoint = window.location.pathname;

  const productionCompanies = movieDetails?.production_companies
    .map((company) => {
      return company.name;
    })
    .join(", ");

  useEffect(() => {
    const fetchMovie = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setMovieDetails(data);
      setIsLoading(false);
    };
    fetchMovie();
  }, [selectedMovie, endpoint, setIsLoading]);

  return (
    <div className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Link to="/">Back To Movies</Link>
          <div className="flex flex-col md:flex-row mt-16 gap-x-16 items-center relative">
            <img
              className="w-full sm:w-[80%] md:w-[300px] lg:w-[450px] mb-5"
              src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
              alt={movieDetails?.title}
            />{" "}
            <div>
              <div className="space-y-4">
                <h3 className="text-2xl text-center font-bold ">
                  {movieDetails?.title}
                </h3>
                {movieDetails?.tagline && (
                  <p className="text-center">"{movieDetails?.tagline}"</p>
                )}
                <p>{movieDetails?.vote_average.toFixed(1)} / 10</p>
                <p>Released Date: {movieDetails?.release_date}</p>
                <p>{movieDetails?.overview}</p>
              </div>
              <div className="space-y-4 mt-10 text-center md:text-start">
                <h4 className="text-xl font-semibold text-center md:text-start">
                  More Info
                </h4>
                <p>
                  <span className="text-blue-500 font-bold">Budget:</span>
                  {movieDetails?.budget
                    ? ` $${movieDetails?.budget.toLocaleString()}`
                    : " Information Not Found"}
                </p>
                <p>
                  <span className="text-blue-500 font-bold">Revenue:</span>
                  {movieDetails?.revenue
                    ? ` $${movieDetails?.revenue.toLocaleString()}`
                    : " Information Not Found"}
                </p>
                <p>
                  <span className="text-blue-500 font-bold">Runtime: </span>
                  {movieDetails?.runtime} minutes
                </p>
                <p>
                  <span className="text-blue-500 font-bold">Status:</span>{" "}
                  {movieDetails?.status}
                </p>
                <p>
                  <span className="text-blue-500 font-bold">
                    Production Companies:
                  </span>{" "}
                  {productionCompanies}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
