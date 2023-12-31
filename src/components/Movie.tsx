import { Link } from "react-router-dom";
import imgNotFound from "../assets/not-found-2.png";

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
          className="mb-2 border-2 border-[#121212] rounded-md  hover:border-2 hover:border-white h-[83%] w-full"
          src={`http://image.tmdb.org/t/p/w500/${posterImg}`}
          alt={title}
        />
      ) : (
        <img
          className=" mb-2 border-2 border-[#121212] rounded-md h-[83%] w-full object-cover"
          src={imgNotFound}
          alt="not found"
        />
      )}

      <h2>{title}</h2>
    </Link>
  );
};

export default Movie;
