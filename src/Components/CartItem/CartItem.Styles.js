import styled from "styled-components";
import { FlexColumn, FlexRow } from "../../App.Styles";

export const CardBox = styled(FlexRow)`
  padding: 25px;
  background: #f2f2f2;
  border-radius: 16px;
  height: 242px;
  opacity: 1;
  margin-bottom: 30px;
  justify-content: space-between;
  margin-right: 20px;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: start;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: 25%;
  min-width: 200px;
  object-fit: cover;
  height: 100%;

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 203px;
  }
`;

export const ContentBox = styled(FlexColumn)`
  width: 70%;
  height: 100%;
  justify-content: start;
  align-items: start;
  @media screen and (max-width: 600px) {
    height: auto;
  }
`;
export const DeleteSpan = styled.span`
  font-size: 18;
  padding: 5;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 1100px){
    margin-left: 605px;
   
    }
`
export const CounterBox = styled(FlexRow)`
justify-content: flex-end;

@media screen and (max-width: 1100px){
  justify-content: flex-start;
  margin-top: 30px;
}
`
