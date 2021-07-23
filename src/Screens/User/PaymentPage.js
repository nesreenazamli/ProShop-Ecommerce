import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../App.Styles";

import PaymentBox from "./ShoppingCart/ShoppingCart.Styles";
import Button from "../../Components/Button/Button";

export default function PaymentPage(props) {
  return (
    <FlexBox color={"#fff"} style={{ padding: "44px 0" }}>
      <InnerSection>
        <FlexColumn
          style={{
            alignItems: "start",
            borderRadius: "16px",
            backgroundColor: "#F2F2F2",
            padding: "31px 50px",
          }}
        >
          <FlexColumn style={{ width: "1200px" }}>
            <FlexBox style={{ justifyContent: "start" }}>
              <Typography
                fontSize={32}
                fontWeight={"bold"}
                style={{ padding: "0 0 28px 0" }}
              >
                {" "}
                Payment Success !{" "}
              </Typography>
            </FlexBox>

            <FlexRow>
              <FlexColumn style={{ alignItems: "start" }}>
                <Typography
                  fontSize={24}
                  fontWeight={"bold"}
                  style={{ paddingBottom: "26px" }}
                >
                  Order number
                </Typography>
                <Typography
                  fontSize={24}
                  fontWeight={"bold"}
                  style={{ paddingBottom: "26px" }}
                >
                  Shipping Address
                </Typography>
                <Typography
                  fontSize={24}
                  fontWeight={"bold"}
                  style={{ paddingBottom: "26px" }}
                >
                  {" "}
                  Order Items
                </Typography>
              </FlexColumn>

              <FlexColumn style={{ alignItems: "start" }}>
                <Typography fontSize={24} style={{ paddingBottom: "20px" }}>
                  {props.number}
                </Typography>
                <Typography fontSize={24} style={{ paddingBottom: "20px" }}>
                  {props.Address}
                </Typography>
                <Typography fontSize={24} style={{ paddingBottom: "20px" }}>
                  {props.Items}
                </Typography>
              </FlexColumn>
            </FlexRow>

            <FlexBox style={{ justifyContent: "start" }}>
              <Typography
                fontSize={16}
                style={{ margin: "20px 0", width: "378px" }}
              >
                {" "}
                An email will be sent to your email address contains order
                confirmation and tacking code.
              </Typography>
            </FlexBox>
          </FlexColumn>
        </FlexColumn>

        <FlexColumn
          style={{
            alignItems: "flex-end",
          }}
        >
          <Button
            onClick={() => {}}
            isGray={false}
            width={"324px"}
            borderRadius={"10px"}
            style={{ margin: "60px 0", height: "62px" }}
            text="Keep Shopping"
          />
        </FlexColumn>
      </InnerSection>
    </FlexBox>
  );
}
