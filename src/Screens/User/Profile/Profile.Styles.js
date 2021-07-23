import styled from "styled-components";
import { FlexColumn, FlexRow, FlexBox } from "../../../App.Styles";
import { Link } from "react-router-dom";

export const ProfileImg = styled("img")`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: ${(props) => props.border};
  border-radius: 50%;
  margin: 13px 15px;
`;
export const ProfileTypograpy = styled(Link)`
  font-size: 24px;
  color: #242424;
`;

export const ProfileContianer = styled(FlexRow)`
  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ProfileGrayBox = styled(FlexColumn)`
  margin: 0 20px;
  
  @media screen and (max-width: 1100px) {
    width: auto;
    margin-bottom: 10px;
  }
`;
