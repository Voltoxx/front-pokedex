import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/home";
import Pokemons from "../pages/pokemons";
import Pokemon from "../pages/pokemon";

export default function Navbar() {
  return (
    <Router>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/pokemons" className="text-white hover:text-gray-300">
              Pokemons
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </Router>
  );
}
