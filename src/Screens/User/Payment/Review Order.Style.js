import styled from "styled-components";
import { FlexColumn, FlexRow,InnerSection, Typography } from "../../../App.Styles";

export const PaymentBox = styled(InnerSection)`


 @media screen and (max-width: 1500px){
   margin-left: 40px;
 }
`

export const BorderedNum = styled(Typography)`
  background: #fcdd06;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin-right: 9px;
`;


export const ShortLine = styled("hr")`
  width: 20%;
  margin: 5px 30px;
`;

export const OrderImg = styled("img")`
  width: 135px;
  height: 90px;
  background: transparent;
  margin-right: 20px;
`;

export const ChangeText = styled(Typography)`
  text-decoration: underline;
  letter-spacing: 0.44px;
  color: #707070;
  font-size: 22px;
`;
export const PayBox = styled(FlexColumn)`
  justify-content: start;
  align-items: start;
  width: ${(props) => props.width}px;
  height: 652px;
  padding: 41px 41px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;
export const Input = styled("input")`
  outline: none;
  height: 40px;
  width: 360px;
  border-radius: 6px;
  font-size: 14px;
  padding: 11px;
  color: #787878;
  background-color: #f2f2f2;

  &::placeholder {
    outline: none;
  }
`;
export const OrderBox = styled(FlexColumn)`
  width: 950px;
  height: 652px;
  justify-content: start;
  padding: 41px 41px;
  background: #f2f2f2;
  border-radius: 16px;
`;
export const ShippingBox = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
  min-height: 154px;
`;

export const ShippingForm = styled(FlexColumn)`
  width: 950px;
  min-height: 652px;
  justify-content: space-between;
  padding: 45px 88px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;
export const OrderReview = styled(FlexColumn)`
  width: 536px;
  margin-left: 30px;
`;
export const OrderDetails = styled(FlexColumn)`
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 280px;
  padding: 40px 25px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;
export const ChangeBtn = styled(Typography)`
  font-size: 22px;
  color: #707070;
  text-decoration: underline;
  cursor: pointer;
`;

export const Order = styled(FlexColumn)`
  width: 400px;
  margin-left: 30px;
`;

export const OrderDetail = styled(FlexColumn)`
  align-items: flex-start;
  min-height: 229px;
`;

export const Shipping = styled(FlexColumn)`
  width: 950px;
  min-height: 652px;
  justify-content: space-between;
  padding: 40px 70px;
  background-color: #f2f2f2;
  border-radius: 16px;
`;

export const ShippingAddress = styled(FlexColumn)`
  align-items: flex-start;
  justify-content: space-between;
  min-height: 154px;
`;
export const Num = styled(FlexRow)`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.isGray ? "#707070" : "#FCDD06")};
  color: ${(props) => (props.isGray ? "#FFFFFF" : "#00000")};
`;
export const shippingContainer = styled(FlexRow)`
@media screen and (max-width: 1100px){
  flex-direction: column;
}
`
export const ErrorMessage = styled(FlexRow)`
  justify-content: start;
  min-height: 60px;
  color: red;
  background: #e8c4c4;
  padding: 10px 30px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 16px;
`;

export const SuccessMessage = styled(ErrorMessage)`
  color: green;
  background: lightgreen;
`;
