import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { ShowDetailsType } from "../types";
import { Link } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";

type ShowDetailsProps = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ShowDetails = ({ isLoading, setIsLoading }: ShowDetailsProps) => {
  const [showDetails, setShowDetails] = useState<ShowDetailsType | null>(null);
  const [error, setError] = useState("");

  const productionCompanies = showDetails?.production_companies
    .map((company) => {
      return company.name;
    })
    .join(", ");

  const endpoint = window.location.pathname.substring(7);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${endpoint}1?api_key=${process.env.REACT_APP_API_KEY}`
        );
        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Failed to fetch show details");
        }
        const data = await response.json();
        setShowDetails(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchShow();
  }, [endpoint, setIsLoading]);

  return (
    <div className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto">
      {isLoading && <Loading />}
      {!isLoading && !error && (
        <>
          <Link to="/shows" className="border p-2 rounded-md">
            Back To Shows
          </Link>
          <div className="flex flex-col md:flex-row mt-16 gap-x-16 items-center">
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
                <p>
                  <span className="text-blue-500 font-bold">Seasons:</span>{" "}
                  {showDetails?.number_of_seasons}
                </p>
                <p>
                  <span className="text-blue-500 font-bold">Episodes:</span>{" "}
                  {showDetails?.number_of_episodes}
                </p>
                <p>
                  <span className="text-blue-500 font-bold">Status:</span>{" "}
                  {showDetails?.status}
                </p>
                <p>
                  <span className="text-blue-500 font-bold">Budget:</span>{" "}
                  Production Companies: {productionCompanies}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default ShowDetails;
