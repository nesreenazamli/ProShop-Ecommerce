import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
  SpinnerContainer
} from "../../../App.Styles";
import { CartBox } from "./ShoppingCart.Styles";
import { useDispatch } from "react-redux";
import Button from "../../../Components/Button/Button";
import CartItem from "../../../Components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { useState } from "react";

import {
  addCartItem,
  decreaseCartItemQty,
  deleteCartItem,
} from "../../../Redux/Cart/cartActions";
import { useHistory } from "react-router";

export default function ShoppingCart(props) {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const [count, setCount] = useState(1);
  const goBack = () => {
    history.goBack();
  };

  return state.cart?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn color={"#fff"}>
      <InnerSection>
        <FlexRow style={{ justifyContent: "start", margin: "20px" , marginLeft: "30px"}}>
          <Typography
            onClick={goBack}
            style={{ color: "#707070", cursor: "pointer" }}
          >
            Back{" "}
          </Typography>
          <Typography style={{ margin: "0 5px" }}> / </Typography>
          <Typography>Shopping </Typography>
        </FlexRow>

        <CartBox style={{ alignItems: "start" }}>
          <FlexColumn>
            {state.cart?.cart?.map((item) => (
              <CartItem
                increaseCounter={() => {
                  if (item.quantity < item.countInStock)
                    dispatch(addCartItem(item, 1));
                }}
                decreaseCounter={() => {
                  if (item.quantity > 1) dispatch(decreaseCartItemQty(item, 1));
                }}
                key={item._id}
                name={item.name}
                price={item.price}
                image={item.image}
                count={item.quantity}
                setCount={setCount}
                handleDelete={() => dispatch(deleteCartItem(item._id))}
              />
            ))}
          </FlexColumn>

          <FlexColumn
            style={{
              background: "#F2F2F2",
              width: "500px ",
              borderRadius: "16px",
            }}
          >
            <FlexColumn style={{ marginTop: 30 }}>
              <Typography fontSize={32} fontWeight={"bold"}>
                Subtotal ({state.cart.cart.length}) items
              </Typography>
              <Typography
                fontSize={30}
                fontWeight={"bold"}
                style={{ padding: "28px 0" }}
              >
                Total (
                {state.cart.cart.reduce((acc, item) => {
                  return acc + item.quantity;
                }, 0)}
                ) items
              </Typography>

              <Typography fontSize={32} fontWeight={"bold"}>
                Total Price $
                {state.cart.cart
                  .reduce((acc, item) => {
                    return acc + item.price * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </Typography>
            </FlexColumn>

            <FlexBox>
              <Button
                isGray={false}
                width={"324px"}
                borderRadius={"10px"}
                style={{ margin: "25px 0", height: "62px" }}
                text="Proceed to checkout"
                link={
                  state.userDetails.user._id
                    ? "/proceed-checkout/shipping-address"
                    : "/login"
                }
              />
            </FlexBox>
          </FlexColumn>
        </CartBox>
      </InnerSection>
    </FlexColumn>
  );
}
