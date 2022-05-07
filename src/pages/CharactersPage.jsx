import React from "react";
import Navbar from "../components/Navbar";
import Characters from "../components/Characters";
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
