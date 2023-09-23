import { Link } from "react-router-dom";

type MovieProps = {
  key: number;
  id: number;
  posterImg: string;
  title: string;
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
};

const Movie = ({ id, posterImg, title, setSelectedMovie }: MovieProps) => {
  return (
    <Link
      to={`/${id}`}
      className="xl:text-lg cursor-pointer rounded-md"
      onClick={() => setSelectedMovie(id)}
    >
      {posterImg ? (
        <img
          className="mb-2 border-2 border-[#121212] rounded-md  hover:border-2 hover:border-white"
          src={`http://image.tmdb.org/t/p/w500/${posterImg}`}
          alt={title}
        />
      ) : (
        "No Image"
      )}

      <h2>{title}</h2>
    </Link>
  );
};

export default Movie;
