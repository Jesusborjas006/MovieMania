import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-6 py-5 px-4 md:px-10 bg-blue-900 text-white">
      <Link to="/" className="text-2xl font-semibold">
        MovieMania
      </Link>
      <div className="flex space-x-6">
        <Link
          to="/"
          className="md:text-lg border-b-2 border-blue-900 hover:border-b-2 hover:border-white transition-all"
        >
          Movies
        </Link>
        <Link to="/shows" className="md:text-lg hover:border-b-2">
          Shows
        </Link>
        <Link to="/search" className="md:text-lg hover:border-b-2">
          Search
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
