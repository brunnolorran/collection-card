import { Route, Switch } from "react-router-dom";
import Pokemon from "../pages/pokemon";
import RickandMorty from "../pages/rick-and-morty";
import Favorites from "../pages/favorites";

const Routes = ({
  setListRickandMort,
  listRickandMorty,
  collection,
  setCollection,
  listPokemon,
  setListPokemon,
}) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Favorites collection={collection} />
      </Route>
      <Route path="/rick-and-morty" exact>
        <RickandMorty
          setListRickandMort={setListRickandMort}
          listRickandMorty={listRickandMorty}
          setCollection={setCollection}
        />
      </Route>
      <Route path="/pokemon" exact>
        <Pokemon
          listPokemon={listPokemon}
          setListPokemon={setListPokemon}
          setCollection={setCollection}
        />
      </Route>
    </Switch>
  );
};

export default Routes;
