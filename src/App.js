import GlobalStyle from "./styles/global";
import Header from "./components/header";
import Routes from "./routes";

import { useState } from "react";

const App = () => {
  const [listRickandMorty, setListRickandMort] = useState([]);

  return (
    <>
      <Header />
      <div id="main-container">
        <Routes
          listRickandMorty={listRickandMorty}
          setListRickandMort={setListRickandMort}
        />
      </div>
      <GlobalStyle></GlobalStyle>
    </>
  );
};

export default App;
