import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { ShowDetailsType } from "../types";

type ShowDetailsProps = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowDetails = ({ isLoading, setIsLoading }: ShowDetailsProps) => {
  const [showDetails, setShowDetails] = useState<ShowDetailsType | null>(null);

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
      const data = await response.json();
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
            />
            <div>
              <div className="space-y-4">
                <h3 className="text-2xl lg:text-4xl text-center font-bold ">
                  {showDetails?.name}
                </h3>
                {showDetails?.tagline && (
                  <p className="text-center">"{showDetails?.tagline}"</p>
                )}

                <p>{showDetails?.vote_average.toFixed(1)} / 10</p>
                <p>First Aired: {showDetails?.first_air_date}</p>
                <p>Last Aired: {showDetails?.last_air_date}</p>
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
