import { Routes, Route } from "react-router-dom";

import HomeView from "./views/home";
import PokemonView from "./views/pokemon";
import SearchView from "./views/search";
import NotFoundView from "./views/404";
import AboutPage from "./pages/about";
import LegalPage from "./pages/legal";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="page/:page" element={<HomeView />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="legal" element={<LegalPage />} />
      <Route path="pokemon" element={<PokemonView />} />
      <Route path="pokemon/:name" element={<PokemonView />} />
      <Route path="search/" element={<SearchView />} />
      <Route path="search/:query" element={<SearchView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
