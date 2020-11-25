import { AlignContainer } from "../styles-page";
import axios from "axios";
import { useEffect } from "react";

import Card from "../../components/card";

const Pokemon = ({ listPokemon, setListPokemon, setCollection }) => {
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
      .then((response) => {
        setListPokemon(response.data.results);
      });
  }, [setListPokemon]);

  return (
    <>
      <AlignContainer>
        {listPokemon.map((items, index) => (
          <Card
            key={index}
            name={items.name}
            species={"Pokemon"}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            type={"pokemon"}
            setCollection={setCollection}
            show={true}
          />
        ))}
      </AlignContainer>
    </>
  );
};

export default Pokemon;
