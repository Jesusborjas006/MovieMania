import { useEffect, useState } from "react";
import { ShowData } from "../types";
import Pagination from "../components/pagination";
import Show from "../components/Show";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

type ShowProps = {
  setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Shows = ({ setSelectedShowID, isLoading, setIsLoading }: ShowProps) => {
  const [shows, setShows] = useState<ShowData | []>([]);
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState("");

  const showElements = shows.map((show) => (
    <Show
      id={show.id}
      key={show.id}
      name={show.name}
      posterImg={show.poster_path}
      setSelectedShowID={setSelectedShowID}
    />
  ));

  useEffect(() => {
    const fetchShows = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}&page=0`
        );
        if (!response.ok) {
          setIsLoading(false);
          throw new Error("Something went wrong with fetching shows");
        }

        const data = await response.json();
        setShows(data.results);
        setIsLoading(false);
      } catch (err: any) {
        setError(err.message);
      }
    };
    fetchShows();
  }, [pageNum, setIsLoading]);

  return (
    <div className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto">
      {isLoading && <Loading />}
      {!isLoading && !error && (
        <>
          <main className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
            {showElements}
          </main>
          <Pagination pageNum={pageNum} setPageNum={setPageNum} />
        </>
      )}
      {error && <ErrorMessage />}
    </div>
  );
};

export default Shows;
