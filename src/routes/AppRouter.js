import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Tvshows from "../pages/Tvshows";
import Sports from "../pages/Sports";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Tvshows" element={<Tvshows />} />
        <Route path="/Sports" element={<Sports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;