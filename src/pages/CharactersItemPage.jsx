import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function CharactersItemPage() {
  const params = useParams();
  const router = useNavigate();
  const [people, setPeople] = useState({});

  useEffect(() => {
    async function fetchPeople() {
      await axios
        .get(`https://swapi.dev/api/people/${params.id}`)
        .then((res) => {
          setPeople(res.data);
        });
    }
    fetchPeople();
  }, [params.id]);

  return (
    <>
      <div className="peopleCard__navbar">
        <div className="peopleCard__navbar-container wrapper">
          <div onClick={() => router(`/`)}>На главную</div>
          <div>{people.name}</div>
        </div>
      </div>
      <div className="peopleCard wrapper">
        <h1> {people.name}</h1>
        <h3>пол: {people.gender}</h3>
        <h3>день рождения: {people.birth_year}</h3>
        <h3>вес: {people.mass}</h3>
        <h3>рост: {people.height}</h3>
        <h3>цвет волос: {people.hair_color}</h3>
        <h3>цвет кожи: {people.skin_color}</h3>
        <h3>цвет глаз: {people.eye_color}</h3>
      </div>
    </>
  );
}

export default CharactersItemPage;
