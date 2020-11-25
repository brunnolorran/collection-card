import GlobalStyle from "./styles/global";
import Header from "./components/header";
import Routes from "./routes";

import { useState } from "react";

const App = () => {
  const [listRickandMorty, setListRickandMort] = useState([]);
  const [listPokemon, setListPokemon] = useState([]);
  const [collection, setCollection] = useState([]);

  console.log(collection);

  return (
    <>
      <Header />
      <div id="main-container">
        <Routes
          listRickandMorty={listRickandMorty}
          setListRickandMort={setListRickandMort}
          collection={collection}
          setCollection={setCollection}
          listPokemon={listPokemon}
          setListPokemon={setListPokemon}
        />
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
