import { useEffect, useState } from "react";
import SearchContentContainer from "../components/SearchContentContainer";

type SeachProps = {
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
  setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
};

const Search = ({ setSelectedMovie, setSelectedShowID }: SeachProps) => {
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchedShows, setSearchedShows] = useState([]);
  const [radioVal, setRadioVal] = useState("movie");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const onOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioVal(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/${radioVal}?query=${query}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ1MjE3ODZlNjYzOGEyZjY0M2Y5ZGM5Njk2NjdjZCIsInN1YiI6IjYzZmQ0NGY2N2E0ZWU3MDA3YzcyMTg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lDRCEVzBiFqhWfq_et8snCAy9cHkQBxKI3egxxKukh8",
          },
        }
      );
      const data = await response.json();
      if (radioVal === "movie") {
        setSearchedMovies(data.results);
      } else {
        setSearchedShows(data.results);
      }
    };
    fetchData();
  }, [query, radioVal]);

  return (
    <section className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto">
      <form className="text-center mb-12">
        <div className="text-white space-x-5">
          <input
            type="radio"
            name="movie"
            value="movie"
            checked={radioVal === "movie"}
            onChange={onOptionChange}
          />{" "}
          Movies
          <input
            type="radio"
            name="tv"
            value="tv"
            checked={radioVal === "tv"}
            onChange={onOptionChange}
          />{" "}
          Shows
        </div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search by title..."
          className="text-black w-[90%] sm:max-w-[550px] m rounded-md p-2 mt-4"
        />
      </form>
      <SearchContentContainer
        searchedMovies={searchedMovies}
        query={query}
        setSelectedMovie={setSelectedMovie}
        searchedShows={searchedShows}
        setSelectedShowID={setSelectedShowID}
        radioVal={radioVal}
      />
    </section>
  );
};

export default Search;
