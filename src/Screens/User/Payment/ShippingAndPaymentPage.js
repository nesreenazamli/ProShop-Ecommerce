import {
  InnerSection,
  FlexBox,
  FlexRow,
  FlexColumn,
  Typography,
} from "../../../App.Styles";
import { ErrorMessage, Input } from "../LoginPage/LoginPage.Styles";
import {
  ShippingBox,
  ShippingForm,
  ChangeBtn,
  OrderDetails,
  OrderReview,
  shippingContainer
} from "./Review Order.Style";
import { ShippingSchema } from "../../../Valedation";
import Button from "../../../Components/Button/Button";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addShippingAddress } from "../../../Redux/Cart/cartActions";
import { useHistory } from "react-router";

export default function ShippingAndPayment(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);

  const handleSaveShipping = (value) => {
    dispatch(addShippingAddress(value));
    history.push("/proceed-checkout/place-order");
  };

  return (
    <InnerSection style={{ justifyContent: "start", alignItems: "start" }}>
      <FlexColumn
        style={{
          justifyContent: "start",
          alignItems: "start",
        }}
      >
        <shippingContainer >
          <Formik
            initialValues={{
              country: state.cart.shippingAddress.country || "",
              city: state.cart.shippingAddress.city || "",
              address: state.cart.shippingAddress.address || "",
              postalCode: state.cart.shippingAddress.postalCode || "",
            }}
            validationSchema={ShippingSchema()}
            onSubmit={handleSaveShipping}
          >
            {({ errors, touched }) => {
              return (
                <Form
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    flexDirection: "row",
                  }}
                >
                  <ShippingForm>
                    <ShippingBox>
                      <FlexRow style={{ justifyContent: "space-between" }}>
                        <Typography
                          fontSize="32"
                          fontWeight="bold"
                          style={{
                            justifyContent: "start",
                            marginBottom: "16px",
                          }}
                        >
                          Shipping Address
                        </Typography>
                      </FlexRow>

                      <FlexRow
                        style={{
                          flexWrap: "wrap",
                          justifyContent: "space-between",
                          alignItems: "flex-start",
                        }}
                      >
                        <FlexColumn
                          style={{
                            width: "360px",
                            alignItems: "flex-start",
                            marginBottom: "40px",
                          }}
                        >
                          <Typography
                            fontSize="22"
                            color={"#707070"}
                            style={{
                              marginBottom: "10px",
                              justifyContent: "start",
                            }}
                          >
                            Country
                          </Typography>

                          <Input
                            style={{ width: "360px" }}
                            name={"country"}
                            type={"text"}
                            placeholder={"Enter your country"}
                          />
                          {errors.country && touched.country ? (
                            <ErrorMessage>{errors.country}</ErrorMessage>
                          ) : null}
                        </FlexColumn>
                        <FlexColumn
                          style={{
                            width: "360px",
                            alignItems: "flex-start",
                            marginBottom: "40px",
                          }}
                        >
                          <Typography
                            fontSize="22"
                            color={"#707070"}
                            style={{
                              marginBottom: "10px",
                              justifyContent: "start",
                            }}
                          >
                            City
                          </Typography>

                          <Input
                            style={{ width: "360px" }}
                            name={"city"}
                            type={"text"}
                            placeholder={"Enter your city"}
                          />
                          {errors.city && touched.city ? (
                            <ErrorMessage>{errors.city}</ErrorMessage>
                          ) : null}
                        </FlexColumn>
                        <FlexColumn
                          style={{
                            width: "360px",
                            alignItems: "flex-start",
                            marginBottom: "40px",
                          }}
                        >
                          <Typography
                            fontSize="22"
                            color={"#707070"}
                            style={{
                              marginBottom: "10px",
                              justifyContent: "start",
                            }}
                          >
                            postal Code
                          </Typography>

                          <Input
                            style={{ width: "360px" }}
                            name={"postalCode"}
                            type={"number"}
                            placeholder={"Zip code"}
                          />
                          {errors.postalCode && touched.postalCode ? (
                            <ErrorMessage>{errors.postalCode}</ErrorMessage>
                          ) : null}
                        </FlexColumn>
                        <FlexColumn
                          style={{
                            width: "360px",
                            alignItems: "flex-start",
                            marginBottom: "40px",
                          }}
                        >
                          <Typography
                            fontSize="22"
                            color={"#707070"}
                            style={{
                              marginBottom: "10px",
                              justifyContent: "start",
                            }}
                          >
                            Street Address
                          </Typography>

                          <Input
                            style={{ width: "360px" }}
                            name={"address"}
                            type={"text"}
                            placeholder={"Your Address"}
                          />
                          {errors.address && touched.address ? (
                            <ErrorMessage>{errors.address}</ErrorMessage>
                          ) : null}
                        </FlexColumn>
                      </FlexRow>
                    </ShippingBox>
                  </ShippingForm>
                  <OrderReview>
                    <OrderDetails>
                      <FlexRow
                        style={{
                          justifyContent: "space-between",
                          marginBottom: "16px",
                        }}
                      >
                        <Typography
                          style={{ justifyContent: "start" }}
                          fontSize="24"
                          fontWeight="bold"
                          color="#242424"
                        >
                          Order Details
                        </Typography>
                        <ChangeBtn>Change</ChangeBtn>
                      </FlexRow>
                      <FlexRow style={{ justifyContent: "space-between" }}>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#707070"}
                        >
                          Subtotal
                        </Typography>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#707070"}
                        >
                          $589.98
                        </Typography>
                      </FlexRow>
                      <FlexRow style={{ justifyContent: "space-between" }}>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#707070"}
                        >
                          Tax
                        </Typography>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#707070"}
                        >
                          $2.53
                        </Typography>
                      </FlexRow>
                      <FlexRow style={{ justifyContent: "space-between" }}>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#707070"}
                        >
                          Shipping
                        </Typography>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#707070"}
                        >
                          $0.00
                        </Typography>
                      </FlexRow>
                      <FlexRow style={{ justifyContent: "space-between" }}>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#242424"}
                          fontWeight={"bold"}
                        >
                          Total
                        </Typography>
                        <Typography
                          style={{ justifyContent: "start" }}
                          color={"#242424"}
                          fontWeight={"bold"}
                        >
                          $592.51
                        </Typography>
                      </FlexRow>
                    </OrderDetails>
                    <Button
                      link={""}
                      text={"Review Order"}
                      width={"324px"}
                      style={{
                        height: "62px",
                        alignSelf: "flex-end",
                        marginTop: "30px",
                      }}
                    />
                  </OrderReview>
                 
                </Form>
              );
            }}
          </Formik>
          </shippingContainer>
      </FlexColumn>
    </InnerSection>
  );
}
