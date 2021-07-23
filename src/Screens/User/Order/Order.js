import {
  FlexRow,
  InnerSection,
  SpinnerContainer,
  Typography,
} from "../../../App.Styles";
import {
  ErrorMessage,
  OrderDetail,
  OrderDetails,
  Shipping,
  ShippingAddress,
  Order as StyledOrder,
  SuccessMessage,
} from "../Payment/Review Order.Style";
import OrderCard from "../../../Components/OrderCard/OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderById, payOrder } from "../../../Redux/Orders/ordersActions";
import { PayPalButton } from "react-paypal-button-v2";

function Order(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderById(props.match.params.id));
  }, [dispatch, props.match.params.id, state.orders.payOrder.success]);

  return state.orders.userOrder.isLoading ? (
    <SpinnerContainer />
  ) : state.orders.userOrder.error ? (
    <ErrorMessage>{state.orders.userOrder.error}</ErrorMessage>
  ) : (
    <InnerSection style={{ margin: "44px 0 60px", alignItems: "flex-start" }}>
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
          justifyContent: "flex-start",
          alignItems: "flex-start",
          marginTop: "60px",
        }}
      >
        <Shipping>
          <ShippingAddress>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <Typography
                style={{ justifyContent: "start" }}
                fontSize="24"
                fontWeight="bold"
                color="#242424"
              >
                Shipping Address
              </Typography>
            </FlexRow>
            <Typography
              style={{ justifyContent: "start" }}
              fontSize={"22"}
              color={"#242424"}
            >
              {state.userDetails.user.name}
            </Typography>
            <Typography
              fontSize={"16"}
              color={"#242424"}
              fontWeigh={"light"}
              style={{
                maxWidth: "290px",
                lineHeight: "2",
                justifyContent: "start",
              }}
            >
              {state.orders.userOrder.order.shippingAddress.country}-
              {state.orders.userOrder.order.shippingAddress.city}
            </Typography>
            {state.orders.userOrder.order.isPaid ? (
              <SuccessMessage>Paid!</SuccessMessage>
            ) : (
              <ErrorMessage>Not Paid</ErrorMessage>
            )}
            {state.orders.userOrder.order.isDelivered ? (
              <SuccessMessage>Delivered!</SuccessMessage>
            ) : (
              <ErrorMessage>Not Delivered</ErrorMessage>
            )}
          </ShippingAddress>
          <OrderDetail>
            <FlexRow
              style={{ justifyContent: "space-between", marginBottom: "16px" }}
            >
              <Typography
                style={{ justifyContent: "start" }}
                fontSize="24"
                fontWeight="bold"
                color="#242424"
              >
                Order Details
              </Typography>
            </FlexRow>
            {state.orders?.userOrder?.order?.orderItems?.map((i) => (
              <OrderCard
                key={i._id}
                src={"https://proshop-ms.herokuapp.com/" + i.image}
                orderName={i.name}
                orderNumber={i.qty}
                subTotal={i.price * i.qty}
                price={i.price}
              />
            ))}
          </OrderDetail>
        </Shipping>
        <StyledOrder>
          <OrderDetails>
            <Typography
              fontSize={"32"}
              color={"#242424"}
              fontWeight={"bold"}
              style={{ marginBottom: "30px", justifyContent: "start" }}
            >
              Order Details
            </Typography>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                Subtotal
              </Typography>
              <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                $
                {state.orders?.userOrder?.order?.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </Typography>
            </FlexRow>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                Tax
              </Typography>
              <Typography style={{ justifyContent: "start" }} color={"#707070"}>
                $0
              </Typography>
            </FlexRow>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <Typography
                style={{ justifyContent: "start" }}
                color={"#242424"}
                fontWeight={"bold"}
              >
                Shipping
              </Typography>
              <Typography
                style={{ justifyContent: "start" }}
                color={"#242424"}
                fontWeight={"bold"}
              >
                $
                {state.orders?.userOrder?.order?.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
              </Typography>
            </FlexRow>
          </OrderDetails>
          {!state.orders.userOrder.order.isPaid && (
            <FlexRow style={{ width: "100%", margin: "40px auto" }}>
              <PayPalButton
                amount={state.orders?.userOrder?.order?.orderItems
                  .reduce((acc, item) => acc + item.price * item.qty, 0)
                  .toFixed(2)}
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );

                  dispatch(
                    payOrder(props.match.params.id, {
                      email_address: details.payer.email_address,
                      status: details.status,
                      create_time: details.create_time,
                      update_time: details.update_time,
                      id: details.id,
                    })
                  );
                }}
                onError={(error) => {
                  console.log(error);
                }}
                options={{
                  clientId:
                    "ATx8Na-9swFrVwvoIGlZWfw7-CJoXi4QaatMLp7pMMv0y8fEu49zwf6AYBnmdNLxS3G7i2gAhx5g4l0K",
                }}
              />
            </FlexRow>
          )}
        </StyledOrder>
      </FlexRow>
    </InnerSection>
  );
}

export default Order;
