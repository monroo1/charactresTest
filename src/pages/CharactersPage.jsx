import React from "react";
import Characters from "../components/Characters";
import Navbar from "../components/Navbar";
import HistoryNav from "../components/HistoryNav";

const CharactersPage = () => {
  return (
    <>
      <Navbar />
      <div className="peopleMain wrapper">
        <Characters />
        <HistoryNav />
      </div>
    </>
  );
};

export default CharactersPage;
