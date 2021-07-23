import styled from "styled-components";
import { FlexColumn, FlexRow, FlexBox } from "../../../App.Styles";

export const EmptyCartImg = styled("img")`
  width: 458px;
  height: 331px;
  object-fit: cover;
`;
export const CartBox = styled(FlexRow)`

@media screen and (max-width: 1100px) {
  flex-direction:column;
  margin-left: 60px;
}
`


