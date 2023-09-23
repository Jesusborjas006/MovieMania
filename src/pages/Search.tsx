import { useEffect, useState } from "react";
import SearchContentContainer from "../components/SearchContentContainer";

type SeachProps = {
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
};

const Search = ({ setSelectedMovie }: SeachProps) => {
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ1MjE3ODZlNjYzOGEyZjY0M2Y5ZGM5Njk2NjdjZCIsInN1YiI6IjYzZmQ0NGY2N2E0ZWU3MDA3YzcyMTg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lDRCEVzBiFqhWfq_et8snCAy9cHkQBxKI3egxxKukh8",
          },
        }
      );
      const data = await response.json();
      setSearchedMovies(data.results);
    };
    fetchData();
  }, [query]);
  return (
    <section className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto">
      <form className="text-center mb-12">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search by title..."
          className="text-black w-[400px] rounded-md py-1 px-2"
        />
      </form>
      <SearchContentContainer
        searchedMovies={searchedMovies}
        query={query}
        setSelectedMovie={setSelectedMovie}
      />
    </section>
  );
};

export default Search;
