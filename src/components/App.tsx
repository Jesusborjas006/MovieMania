import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shows from "../pages/Shows";
import Navbar from "./Navbar";
import Details from "../pages/Details";
import { useState } from "react";
import MovieData from "../types";
import ShowDetails from "../pages/ShowDetails";
import NotFound from "../pages/NotFound";
import Search from "../pages/Search";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [, setSelectedShowID] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="bg-[#121212] text-white">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setSelectedMovie={setSelectedMovie}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
        />
        <Route
          path="/shows"
          element={
            <Shows
              setSelectedShowID={setSelectedShowID}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          }
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
        <Route
          path="/shows/:id"
          element={
            <ShowDetails isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/search"
          element={<Search setSelectedMovie={setSelectedMovie} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
