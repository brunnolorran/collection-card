import styled from "styled-components";
import Button from "@material-ui/core/Button";

export const AlignContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonStyled = styled(Button)`
  width: 144px;
  height: 56px;
  background: linear-gradient(270deg, #8743ff 0%, #4136f1 100%);
  box-shadow: 0px 15px 30px rgba(20, 102, 204, 0.16) !important;
  border-radius: 16px !important;
  color: white !important;
  margin: 20px !important;
`;
