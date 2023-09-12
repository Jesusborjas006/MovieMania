import { useEffect, useState } from "react";
import { MovieDetailsType } from "../types";

type DetailsProps = {
  selectedMovie: number;
};

const Details = ({ selectedMovie }: DetailsProps) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );

  const productionCompanies = movieDetails?.production_companies
    .map((company) => {
      return company.name;
    })
    .join(", ");

  console.log(productionCompanies);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      const data = await response.json();
      setMovieDetails(data);
    };
    fetchMovie();
  }, [selectedMovie]);

  return (
    <>
      <div className="flex flex-col md:flex-row mt-20 gap-x-16 items-center">
        <img
          className="w-full sm:w-[80%] md:w-[300px] lg:w-[450px] mb-5"
          src={`https://image.tmdb.org/t/p/original/${movieDetails?.poster_path}`}
          alt={movieDetails?.title}
        />
        <div>
          <div className="space-y-4">
            <h3 className="text-2xl text-center font-bold ">
              {movieDetails?.title}
            </h3>
            <p className="text-center">"{movieDetails?.tagline}"</p>
            <p>{movieDetails?.vote_average.toFixed(1)} / 10</p>
            <p>Released Date: {movieDetails?.release_date}</p>
            <p>{movieDetails?.overview}</p>
          </div>
          <div className="space-y-4 mt-10 text-center md:text-start">
            <h4 className="text-xl font-semibold text-center md:text-start">
              More Info
            </h4>
            <p>
              Budget:
              {movieDetails?.budget
                ? ` $${movieDetails?.budget.toLocaleString()}`
                : " Information Not Found"}
            </p>
            <p>
              Revenue:
              {movieDetails?.revenue
                ? ` $${movieDetails?.revenue.toLocaleString()}`
                : " Information Not Found"}
            </p>
            <p>Runtime: {movieDetails?.runtime} minutes</p>
            <p>Status: {movieDetails?.status}</p>
            <p>Production Companies: {productionCompanies}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;