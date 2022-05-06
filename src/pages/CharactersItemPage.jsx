import React from "react";
import { useParams } from "react-router-dom";

function CharactersItemPage() {
  const params = useParams();

  return (
    <div className="peopleCard">
      <div>{params.id}</div>
    </div>
  );
}

export default CharactersItemPage;
