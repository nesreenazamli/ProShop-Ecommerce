import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../App.Styles";
import { Link } from "react-router-dom";

export const CardTitle = styled("h3")`
  text-align: center;
  letter-spacing: 1.28px;
  color: #242424;
  text-transform: uppercase;
  opacity: 1;
  margin-top: 40px;
  font-size: 32px;
  margin-bottom: 30px;
`;

export const CardBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 520px;
  height: 655px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 16px;
  color: #000000;
  margin:20px 10px;
`;

export const CardImg = styled("img")`
  width: 90%;
  border-radius: 16px;
  opacity: 1;
  margin-bottom: 20px;
  object-fit: cover;
  margin-top:20px
`;

export const ButtonsBox = styled(FlexRow)`
  margin-bottom: 40px;
`;

export const Border = styled("hr")`
  width: 40%;
  height: 5px;
  background-color: #fcdd06;
  margin-top: 12px;
`;

export const CardLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #242424;
`;