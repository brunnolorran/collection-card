import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const MenuBar = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 75px;
  width: 100%;
  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
  box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16);
`;

export const ButtonStyled = styled(Button)`
  color: #fff !important;
`;
