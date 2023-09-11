import MovieData from "../types";

type DetailsProps = {
  movies: MovieData;
  selectedMovie: number;
};

const Details = ({ movies, selectedMovie }: DetailsProps) => {
  console.log(movies.find((movie) => movie.id === selectedMovie));
  return (
    <div>
      <h1>Details Page</h1>
      <p>{selectedMovie}</p>
    </div>
  );
};

export default Details;
