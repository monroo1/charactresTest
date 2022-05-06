import React from "react";
import { useNavigate } from "react-router-dom";

const CharactersItem = ({ charactersItem }) => {
  const router = useNavigate();
  return (
    <div
      className="characterItem"
      onClick={() => router(`/people/${charactersItem.name}`)}
    >
      <h2>{charactersItem.name}</h2>
      <p>рост: {charactersItem.height}</p>
      <p>вес: {charactersItem.mass}</p>
      <p>цвет персонажа: {charactersItem.skin_color}</p>
      <p>цвет волос: {charactersItem.hair_color}</p>
    </div>
  );
};

export default CharactersItem;
