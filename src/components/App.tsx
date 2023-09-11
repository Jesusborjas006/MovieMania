import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Shows from "../pages/Shows";
import Navbar from "./Navbar";
import Details from "../pages/Details";

function App() {
  return (
    <div className="max-w-[1650px] py-5 px-4 md:px-10 mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
