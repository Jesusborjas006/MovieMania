import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-10">
      <Link to="/" className="text-2xl font-semibold">
        MovieMania
      </Link>
      <ul className="flex space-x-6">
        <Link to="/">Movies</Link>
        <Link to="/shows">Shows</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
