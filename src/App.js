import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./styles/App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [loader, setLoader] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    setLoader(true);
    let i = 1;
    let arr = [];
    while (i < 10) {
      await axios.get(`https://swapi.dev/api/people/?page=${i}`).then((res) => {
        res.data.results.map((element) => arr.push(element));
      });
      i++;
    }
    setCharacters(arr);
    setLoader(false);
  }

  const charactersSearch = useMemo(() => {
    return characters.filter((character) =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, characters]);

  return (
    <div className="App">
      <div className="navBar">
        <div className="navBar__content">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Введите для поиска..."
          />
        </div>
      </div>
      <div className="characterList">
        {loader ? (
          <div id="loading">Идет загрузка...</div>
        ) : (
          charactersSearch.map((character) => (
            <div className="characterItem" key={character.name}>
              <h2>{character.name}</h2>
              <p>рост: {character.height}</p>
              <p>вес: {character.mass}</p>
              <p>цвет персонажа: {character.skin_color}</p>
              <p>цвет волос: {character.hair_color}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
