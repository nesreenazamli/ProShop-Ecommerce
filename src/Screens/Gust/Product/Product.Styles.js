import styled from "styled-components";
import { FlexRow } from "../../../App.Styles";

export const Image = styled.img`
  width: 501px;
  height: 501px;
  border-radius: 16px;
  object-fit: cover;
`;
export const Counter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 40px;
  border: 1px solid #fcdd06;
  opacity: 0.3;
  cursor: pointer;
`;
export const Review = styled.div`
  border: 1px solid #bcbcbc;
  width: 100%;
  height: auto;
`;

export const LoadMore = styled(FlexRow)`
  width: 200px;
  height: 50px;
  font-size: 18px;
  background: ${(props) => (props.isLoading ? "#ddd" : "#fcdd06")};
  color: #242424;
  border-radius: 21px;
  margin-bottom: 20px;
  cursor: pointer;
  margin: 0 auto;
`;

export const CardsBox = styled(FlexRow)`
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 1800px;
  @media screen and (max-width: 1100px) {
    justify-content: center;
    align-items: center;
  }
`;
