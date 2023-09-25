import { Link } from "react-router-dom";

type ShowProps = {
  key: number;
  id: number;
  name: string;
  posterImg: string;
  setSelectedShowID: React.Dispatch<React.SetStateAction<number>>;
};

const endpoint = window.location.pathname;

const Show = ({ id, name, posterImg, setSelectedShowID }: ShowProps) => {
  return (
    <Link
      to={endpoint === "/search" ? `${id}` : `/shows/${id}`}
      className="xl:text-lg"
      onClick={() => setSelectedShowID(id)}
    >
      <img
        className="rounded-md mb-2 border-2 border-[#121212] hover:border-2 hover:border-white"
        src={`http://image.tmdb.org/t/p/w500/${posterImg}`}
        alt={name}
      />
      <h2>{name}</h2>
    </Link>
  );
};

export default Show;
