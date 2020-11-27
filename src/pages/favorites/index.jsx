import { AlignContainer, ButtonStyled } from "../styles-page";
import { useState } from "react";

import Card from "../../components/card";

const Favorites = ({ collection, setCollection }) => {
  const [show, setShow] = useState(collection);

  const filteredPokemon = () => {
    setShow(collection.filter((pokemon) => pokemon.type === "pokemon"));
  };
  const filteredRickAndMorty = () => {
    setShow(collection.filter((pokemon) => pokemon.type === "rick-and-morty"));
  };

  return (
    <>
      <AlignContainer>
        <h1>Minha Coleção</h1>
      </AlignContainer>
      <AlignContainer>
        <h3>Selecione seus personagens preferidos em sua coleção.</h3>
      </AlignContainer>

      <AlignContainer>
        <ButtonStyled
          onClick={() => {
            setShow(collection);
          }}
        >
          Todos
        </ButtonStyled>
        <ButtonStyled onClick={filteredRickAndMorty}>
          Rick and Morty
        </ButtonStyled>
        <ButtonStyled onClick={filteredPokemon}>Pokemon</ButtonStyled>
      </AlignContainer>

      <AlignContainer>
        {show.map((items, index) => (
          <Card
            key={index}
            name={items.name}
            species={items.species}
            image={items.image}
            collection={collection}
            setCollection={setCollection}
          />
        ))}
      </AlignContainer>
    </>
  );
};

export default Favorites;
