import { Routes, Route } from "react-router-dom";

import HomeView from "./views/home";
import NotFoundView from "./views/404";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="about" element={<h1>Soon</h1>} />
      <Route path="legal" element={<h1>Soon</h1>} />
      <Route path="pokemon/:name" element={<h1>Pokemon here!</h1>} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
}

export default App;
