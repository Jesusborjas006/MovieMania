import Movie from "./Movie";
import Show from "./Show";

type SearchContentContainerProps = {
  searchedMovies: any;
  query: string;
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
  searchedShows: any;
  setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
  radioVal: string;
};

const SearchContentContainer = ({
  searchedMovies,
  query,
  setSelectedMovie,
  searchedShows,
  setSelectedShowID,
  radioVal,
}: SearchContentContainerProps) => {
  const searchedMovieElements = searchedMovies.map(
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

  const searchedShowElements = searchedShows.map(
    (item: {
      name: string;
      title: string;
      poster_path: string;
      id: number;
    }) => (
      <Show
        key={item.id}
        id={item.id}
        posterImg={item.poster_path}
        name={item.name}
        setSelectedShowID={setSelectedShowID}
      />
    )
  );

  if (radioVal === "movie") {
    return (
      <>
        {searchedMovies.length ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {searchedMovieElements}
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
  } else {
    return (
      <>
        {searchedShows.length ? (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {searchedShowElements}
          </div>
        ) : (
          ""
        )}

        {!searchedShows.length && query && (
          <h4 className="text-center text-lg md:text-2xl mt-32">
            No results for "{query}"
          </h4>
        )}
      </>
    );
  }
};

export default SearchContentContainer;
