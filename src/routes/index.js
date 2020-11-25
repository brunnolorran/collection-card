import { Route, Switch } from "react-router-dom";
import Pokemon from "../pages/pokemon";
import RickandMorty from "../pages/rick-and-morty";
import Favorites from "../pages/favorites";

const Routes = ({ setListRickandMort, listRickandMorty }) => {
  return (
    <Switch>
      <Route path="/" exact component={Favorites} />
      <Route path="/rick-and-morty" exact>
        <RickandMorty
          setListRickandMort={setListRickandMort}
          listRickandMorty={listRickandMorty}
        />
      </Route>
      <Route path="/pokemon" exact component={Pokemon} />
    </Switch>
  );
};

export default Routes;
