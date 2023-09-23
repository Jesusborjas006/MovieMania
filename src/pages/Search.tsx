import { useEffect, useState } from "react";

const Search = () => {
  const [searchedMovies, setSearchedMovies] = useState({});
  console.log(searchedMovies);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=john%20wick`,
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGQ1MjE3ODZlNjYzOGEyZjY0M2Y5ZGM5Njk2NjdjZCIsInN1YiI6IjYzZmQ0NGY2N2E0ZWU3MDA3YzcyMTg2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lDRCEVzBiFqhWfq_et8snCAy9cHkQBxKI3egxxKukh8",
          },
        }
      );
      const data = await response.json();
      setSearchedMovies(data);
    };
    fetchData();
  }, []);
  return (
    <section>
      <h2>Search</h2>
      <form>
        <input type="text" placeholder="Enter title..."/>
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Search;
