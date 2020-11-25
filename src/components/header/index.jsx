import { MenuBar, ButtonStyled } from "./styles";

import { useHistory } from "react-router-dom";
const Header = () => {
  const history = useHistory();

  return (
    <MenuBar>
      <ButtonStyled
        onClick={() => {
          history.push("/");
        }}
      >
        Minha coleção
      </ButtonStyled>
      <ButtonStyled
        onClick={() => {
          history.push("/rick-and-morty");
        }}
      >
        Rick and Morty
      </ButtonStyled>
      <ButtonStyled
        onClick={() => {
          history.push("/pokemon");
        }}
      >
        Pokemon
      </ButtonStyled>
    </MenuBar>
  );
};

export default Header;
