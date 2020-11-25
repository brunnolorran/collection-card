import { AlignContainer } from "../styles-page";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";

import Card from "../../components/card";

const RickandMorty = ({
  listRickandMorty,
  setListRickandMort,
  setCollection,
}) => {
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((response) => {
        setListRickandMort(response.data.results);
      });
  }, [page, setListRickandMort]);

  const rightPage = () => {
    setPage(page + 1);
  };

  const LeftPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <>
      <AlignContainer>
        <AiFillLeftCircle
          style={{
            fontSize: 56,
            color: "#8743FF",
          }}
          onClick={LeftPage}
        />
        <AiFillRightCircle
          style={{
            fontSize: 56,
            color: "#8743FF",
          }}
          onClick={rightPage}
        />
      </AlignContainer>
      <AlignContainer>
        {listRickandMorty.map((items, index) => (
          <Card
            key={index}
            name={items.name}
            species={items.species}
            image={items.image}
            type={"rick-and-morty"}
            setCollection={setCollection}
            show={true}
          />
        ))}
      </AlignContainer>
    </>
  );
};

export default RickandMorty;
