import { Link } from "react-router-dom";

type MovieProps = {
  key: number;
  id: number;
  posterImg: string;
  title: string;
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
};

const Movie = ({
  id,
  posterImg,
  title,
  setSelectedMovie,
}: MovieProps) => {
  return (
    <Link
      to={`/${id}`}
      className="xl:text-lg cursor-pointer"
      onClick={() => setSelectedMovie(id)}
    >
      <img
        className="rounded-md mb-2"
        src={`http://image.tmdb.org/t/p/w500/${posterImg}`}
        alt={title}
      />
      <h2>{title}</h2>
    </Link>
  );
};

export default Movie;
