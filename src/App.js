import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CharactersPage from "./pages/CharactersPage";
import CharactersItemPage from "./pages/CharactersItemPage";
import { SearchContext } from "./context/search";

import "./styles/App.css";

function App() {
  const [search, setSearch] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        historyList,
        setHistoryList,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharactersPage />} />
          <Route path="/people/:id" element={<CharactersItemPage />} />
        </Routes>
      </BrowserRouter>
    </SearchContext.Provider>
  );
}

export default App;
