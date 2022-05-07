import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/search";

const CharactersItem = ({ charactersItem }) => {
  const router = useNavigate();
  const id = charactersItem.url.split("/");
  const name = charactersItem.name;
  const { historyList, setHistoryList } = useContext(SearchContext);

  return (
    <div
      className="characterItem"
      onClick={() => {
        router(`/people/${id[5]}`);
        if (!historyList.includes(name)) {
          setHistoryList([...historyList, name]);
        }
      }}
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
