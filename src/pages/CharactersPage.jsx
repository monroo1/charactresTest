import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Characters from "../components/Characters";
import { SearchContext } from "../context/search";

function CharactersPage() {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      <Navbar />
      <Characters />
    </SearchContext.Provider>
  );
}

export default CharactersPage;
