import { Link } from "react-router-dom";

type MovieProps = {
  key: number;
  adult: boolean;
  backdropImg: string;
  genreIDs: number[];
  id: number;
  language: string;
  // original_title: string;
  overview: string;
  // popularity: number;
  posterImg: string;
  // release_date: string;
  title: string;
  // video: boolean;
  // vote_average: number;
  // vote_count: number;
  setSelectedMovie: React.Dispatch<React.SetStateAction<number>>;
};

const Movie = ({
  adult,
  backdropImg,
  genreIDs,
  id,
  language,
  overview,
  posterImg,
  title,
  setSelectedMovie
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
