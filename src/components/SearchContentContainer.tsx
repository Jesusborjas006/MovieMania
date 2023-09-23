import { SetStateAction } from "react";
import Movie from "./Movie";

type SearchContentContainerProps = {
  searchedMovies: any;
  query: string;
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
};

const SearchContentContainer = ({
  searchedMovies,
  query,
  setSelectedMovie,
}: SearchContentContainerProps) => {
  const searchedElements = searchedMovies.map(
    (item: { title: string; poster_path: string; id: number }) => (
      <Movie
        key={item.id}
        id={item.id}
        posterImg={item.poster_path}
        title={item.title}
        setSelectedMovie={setSelectedMovie}
      />
    )
  );

  return (
    <>
      {searchedMovies.length ? (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {searchedElements}
        </div>
      ) : (
        ""
      )}

      {!searchedMovies.length && query && (
        <h4 className="text-center text-lg md:text-2xl mt-32">
          No results for "{query}"
        </h4>
      )}
    </>
  );
};

export default SearchContentContainer;
