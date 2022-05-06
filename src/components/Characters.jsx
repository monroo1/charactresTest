import React, { useEffect, useState, useContext, useMemo } from "react";
import { SearchContext } from "../context/search";
import CharactersItem from "./CharactersItem";
import axios from "axios";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(
    "https://swapi.dev/api/people/?page=1"
  );
  const { search } = useContext(SearchContext);

  useEffect(() => {
    async function fetchCharacters() {
      await axios.get(nextPage).then((res) => {
        setCharacters([...characters, ...res.data.results]);
        setNextPage(res.data.next);
      });
    }
    if (nextPage) {
      fetchCharacters();
    }
  }, [nextPage, characters, setCharacters]);

  const peopleSearch = useMemo(() => {
    return characters.filter((people) =>
      people.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, characters]);

  return (
    <div className="characterList">
      {peopleSearch.map((charactersItem) => (
        <CharactersItem
          charactersItem={charactersItem}
          key={charactersItem.name}
        />
      ))}
    </div>
  );
};

export default Characters;
