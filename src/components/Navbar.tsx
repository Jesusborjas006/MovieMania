import { type } from "os";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isActive, setIsActive] = useState({
    moviesNav: true,
    showsNav: false,
  });

  return (
    <nav className="flex justify-between items-center mb-10 py-5 px-4 md:px-10 bg-blue-900 text-white">
      <Link to="/" className="text-2xl font-semibold">
        MovieMania
      </Link>
      <div className="flex space-x-6">
        <Link
          to="/"
          className={
            isActive.moviesNav
              ? "underline underline-offset-4 md:text-lg"
              : "md:text-lg"
          }
          onClick={() =>
            setIsActive({
              moviesNav: true,
              showsNav: false,
            })
          }
        >
          Movies
        </Link>
        <Link
          to="/shows"
          className={
            isActive.showsNav
              ? "underline underline-offset-4 md:text-lg"
              : "md:text-lg"
          }
          onClick={() =>
            setIsActive({
              moviesNav: false,
              showsNav: true,
            })
          }
        >
          Shows
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
