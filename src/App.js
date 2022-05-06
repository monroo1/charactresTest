import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import CharactersItemPage from "./pages/CharactersItemPage";

import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/people/:id" element={<CharactersItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
