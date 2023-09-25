import { Link } from "react-router-dom";
import imgNotFound from "../assets/not-found-2.png";

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
      {posterImg ? (
        <img
          className="rounded-md mb-2 border-2 border-[#121212] hover:border-2 hover:border-white h-[83%] w-full"
          src={`http://image.tmdb.org/t/p/w500/${posterImg}`}
          alt={name}
        />
      ) : (
        <img
          className=" mb-2 border-2 border-[#121212] rounded-md h-[83%] w-full object-cover"
          src={imgNotFound}
          alt="not found"
        />
      )}

      <h2>{name}</h2>
    </Link>
  );
};

export default Show;
