import { useEffect, useState } from "react";
import Loading from "../components/Loading";

type ShowDetailsProps = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

type ShowDetailsType = {
  adult: boolean;
  backdrop_path: string;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: null;
  };
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  original_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: {
    iso_3166_1: string;
    name: string;
  }[];
  release_date: string;
  seasons: {
    air_data: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
  };
  spoken_languages: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
};

const ShowDetails = ({ isLoading, setIsLoading }: ShowDetailsProps) => {
  const [showDetails, setShowDetails] = useState<ShowDetailsType | null>(null);
  console.log(showDetails);

  const productionCompanies = showDetails?.production_companies
    .map((company) => {
      return company.name;
    })
    .join(", ");

  const endpoint = window.location.pathname.substring(7);

  useEffect(() => {
    const fetchShow = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${endpoint}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data);
      setShowDetails(data);
      setIsLoading(false);
    };
    fetchShow();
  }, [endpoint, setIsLoading]);

  return (
    <>
      <div className="flex flex-col md:flex-row mt-20 gap-x-16 items-center">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <img
              className="w-full sm:w-[80%] md:w-[300px] lg:w-[450px] mb-5"
              src={`https://image.tmdb.org/t/p/original/${showDetails?.poster_path}`}
              alt={showDetails?.name}
            />{" "}
            <div>
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl text-center font-bold ">
                  {showDetails?.name}
                </h3>
                {showDetails?.tagline && (
                  <p className="text-center">"{showDetails?.tagline}"</p>
                )}

                <p>{showDetails?.vote_average.toFixed(1)} / 10</p>
                <p>Released Date: {showDetails?.first_air_date}</p>
                <p>Released Date: {showDetails?.last_air_date}</p>
                <p>{showDetails?.overview}</p>
              </div>
              <div className="space-y-4 mt-10 text-center md:text-start">
                <h4 className="text-xl font-semibold text-center md:text-start">
                  More Info
                </h4>
                <p>Seasons: {showDetails?.number_of_seasons}</p>
                <p>Episodes: {showDetails?.number_of_episodes}</p>
                <p>Status: {showDetails?.status}</p>
                <p>Production Companies: {productionCompanies}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ShowDetails;
