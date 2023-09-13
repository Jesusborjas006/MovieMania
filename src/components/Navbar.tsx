import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-10 py-5 px-4 md:px-10 bg-blue-900 text-white">
      <Link to="/" className="text-2xl font-semibold">
        MovieMania
      </Link>
      <div className="flex space-x-6">
        <Link to="/" className=" md:text-lg">
          Movies
        </Link>
        <Link to="/shows" className=" md:text-lg">
          Shows
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
