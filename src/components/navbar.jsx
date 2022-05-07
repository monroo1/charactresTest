import React, { useContext } from "react";
import { SearchContext } from "../context/search";

const Navbar = () => {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className="navBar">
      <div className="navBar__content wrapper">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Введите для поиска..."
        />
      </div>
    </div>
  );
};

export default Navbar;
