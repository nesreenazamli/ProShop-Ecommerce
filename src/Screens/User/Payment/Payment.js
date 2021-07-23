import {
  FlexRow,
  InnerSection,
  Line,
  Typography,
  FlexBox,
} from "../../../App.Styles";
import { useLocation } from "react-router";
import { Num, ShortLine,PaymentBox } from "./Review Order.Style";
import ShippingAndPayment from "./ShippingAndPaymentPage";
import PlaceOrder from "./PlaceOrder";

export default function Payment(props) {
  const location = useLocation();
  const isShippingPage = location.pathname.includes("shipping-address");
  return (
    <PaymentBox style={{ alignItems: "flex-start" }}>
      <Typography
        style={{ justifyContent: "start" }}
        fontSize="32"
        color="#242424"
        fontWeight="700"
      >
        Review Order
      </Typography>
      <FlexRow
        style={{
          width: "682px",
          height: "40px",
          justifyContent: "start",
          margin: "20px 0",
        }}
      >
        <Typography fontSize={22} color={"#242424"}>
          <Num>&nbsp; 1 &nbsp;</Num> Shipping and Payment
        </Typography>
        <ShortLine />
        <Typography
          style={{ justifyContent: "start" }}
          fontSize={22}
          color={"#707070"}
        >
          <Num isGray={isShippingPage}>&nbsp; 2 &nbsp;</Num> Place an Order
        </Typography>
      </FlexRow>

      {isShippingPage ? <ShippingAndPayment /> : <PlaceOrder />}
    </PaymentBox>
  );
}
