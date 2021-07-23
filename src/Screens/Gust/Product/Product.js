import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import {
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
  SpinnerContainer,
} from "../../../App.Styles";
import Button from "../../../Components/Button/Button";
import { ButtonsBox } from "../../../Components/ProductsCard/ProductCard.styles";
import { Image, Counter } from "./Product.Styles";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import {
  getProduct,
  getFeaturedProducts,
} from "../../../Redux/Guest/guestActions";
import FeaturedProducts from "../HomeScreen/FeaturedProducts";
import { addCartItem } from "../../../Redux/Cart/cartActions";
import Review from "../../../Components/Review/Review";

export default function Product(props) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  const product = state.guestState.product;
  const history = useHistory();

  useEffect(() => {
    dispatch(getFeaturedProducts());
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);

  const goBack = () => {
    history.goBack();
  };
  console.log("name", product);
  return state.guestState.isLoading || product.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn color="#fff">
      <InnerSection style={{ marginBottom: "60px" }}>
        <FlexRow style={{ justifyContent: "start", margin: "20px" }}>
          <Typography
            onClick={goBack}
            style={{ color: "#707070", cursor: "pointer" }}
          >
            Back{" "}
          </Typography>
          <Typography style={{ margin: "0 5px" }}> / </Typography>
          <Typography>{product.product?.name}</Typography>
        </FlexRow>

        <FlexRow style={{ justifyContent: "start", alignItems: "flex-start" }}>
          <Image
            src={"https://proshop-ms.herokuapp.com/" + product.product?.image}
          />
          <FlexColumn>
            <FlexRow style={{ justifyContent: "space-between" }}>
              <FlexColumn
                style={{
                  justifyContent: "start",
                  alignItems: "flex-start",
                  marginLeft: "10px",
                }}
              >
                <Typography
                  fontSize={32}
                  fontWeight={"bold"}
                  style={{ margin: "10px 0  30px 0" }}
                >
                  {" "}
                  {product.product?.name}
                </Typography>
                <FlexRow style={{ justifyContent: "start" }}>
                  <Counter
                    onClick={() => {
                      if (count > 1) setCount(count - 1);
                    }}
                  >
                    -
                  </Counter>
                  <Typography style={{ margin: "0 30px" }}>{count}</Typography>
                  <Counter
                    onClick={() => {
                      if (count < product.product.countInStock)
                        setCount(count + 1);
                    }}
                  >
                    +
                  </Counter>
                </FlexRow>
              </FlexColumn>

              <Typography fontSize={32} fontWeight={"bold"}>
                ${product.product?.price}
              </Typography>
            </FlexRow>

            <ButtonsBox
              style={{ justifyContent: "flex-end", marginTop: "190px" }}
            >
              <Button
                text={<TurnedInNotIcon />}
                width={"54px"}
                borderRadius={10}
                style={{ marginTop: 20, height: 62, background: "#f2f2f2" }}
              >
                {" "}
              </Button>
              <Button
                text="Add to cart"
                width={"324px"}
                borderRadius={10}
                style={{ marginTop: 20, height: 62, marginLeft: 13 }}
                disabled={product.product.countInStock}
                link={"/cart"}
                onClick={() => {
                  if (product.product.countInStock)
                    dispatch(addCartItem(product.product, count));
                }}
              />
            </ButtonsBox>
            <Typography style={{ marginLeft: "10px" }}>
              {product.product?.description}
            </Typography>
          </FlexColumn>
        </FlexRow>

        <FlexColumn style={{ alignItems: "flex-start" }}>
          {product.product?.reviews?.length > 0 && (
            <FlexColumn style={{ alignItems: "flex-start" }}>
              <Typography
                fontSize={32}
                fontWeight={"bold"}
                style={{ justifyContent: "start" }}
              >
                Reviews
              </Typography>
              <FlexColumn>
                {product.product?.reviews?.map((item) => (
                  <Review
                    title={item.name}
                    text={item.comment}
                    date={item.createdAt}
                    rate={item.rating}
                  />
                ))}
              </FlexColumn>
            </FlexColumn>
          )}
        </FlexColumn>
      </InnerSection>
      <FeaturedProducts products={state.guestState.products} />
    </FlexColumn>
  );
}
