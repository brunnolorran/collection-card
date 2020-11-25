import { AlignContainer } from "../styles-page";

import Card from "../../components/card";

const Favorites = ({ collection }) => {
  return (
    <>
      <AlignContainer>
        {collection.map((items, index) => (
          <Card
            key={index}
            name={items.name}
            species={items.species}
            image={items.image}
          />
        ))}
      </AlignContainer>
    </>
  );
};

export default Favorites;
