import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shows from "../pages/Shows";
import Navbar from "./Navbar";
import Details from "../pages/Details";
import { useState } from "react";
import MovieData from "../types";

function App() {
  const [movies, setMovies] = useState<MovieData | []>([]);
  const [selectedMovie, setSelectedMovie] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto ">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movies={movies}
              setMovies={setMovies}
              setSelectedMovie={setSelectedMovie}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/shows"
          element={<Shows isLoading={isLoading} setIsLoading={setIsLoading} />}
        />
        <Route
          path="/:id"
          element={
            <Details
              selectedMovie={selectedMovie}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
