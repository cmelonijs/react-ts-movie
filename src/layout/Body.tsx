import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Catalog from "../pages/catalog";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Catalog type="movie" />} />
      <Route path="/tv" element={<Catalog type="tv" />} />
      <Route path="/search" element={<Catalog type="search" />} />
    </Routes>
  );
};

export default Body;
