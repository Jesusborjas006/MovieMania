import { useEffect, useState } from "react";
import { ShowData } from "../types";
import Show from "../components/Show";

const Shows = () => {
  const [shows, setShows] = useState<ShowData | []>([]);

  const showElements = shows.map((show) => (
    <Show
      id={show.id}
      key={show.id}
      name={show.name}
      posterImg={show.poster_path}
    />
  ));

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}&page=1`
      );
      const data = await response.json();
      setShows(data.results);
    };
    fetchShows();
  }, []);

  return (
    <>
      <main className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
        {showElements}
      </main>
    </>
  );
};

export default Shows;
