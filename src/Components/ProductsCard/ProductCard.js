import { CardBox, CardImg, StarBox, ButtonsBox, CardLink } from "./ProductCard.styles";
import { Typography, FlexBox,FlexColumn } from "../../App.Styles";
import Cardimg from "../../Assets/camera.png";
import Button from "../Button/Button";
import Rating from "@material-ui/lab/Rating";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../Redux/Cart/cartActions";

export default function ProductCard({product,name,id,widthBorder,image,rate,price,discount,countInStock}) {
  const dispatch = useDispatch();
  return (
    <CardBox>
      <CardLink
      to={`/product/${id}/${name}`}
      >
      <FlexColumn
      widthBorder={widthBorder}
      
    >
      <CardImg src={image} alt={name} />

      <Typography fontSize={24}>{name}</Typography>
      <Rating name="simple-controlled" value={rate} />
      <FlexBox style={{ margin: "20px 0" }}>
        <Typography fontSize={30} color={"#242424"} fontWeight={"bold"}>
          ${price}
        </Typography>

        {discount > 0 && (
          <Typography color={"#FC4059"} fontSize={30}>
            ${discount}
          </Typography>
        )}
      </FlexBox>
    </FlexColumn>

    <ButtonsBox>
        <Button
          text={<TurnedInNotIcon />}
          width={"54px"}
          borderRadius={10}
          isGray={true}
          style={{ marginTop: 20, height: 62 }}
        >
          {" "}
        </Button>
        <Button
          text="Add to cart"
          width={"324px"}
          borderRadius={10}
          isGray={true}
          style={{ marginTop: 20, height: 62, marginLeft: 13 }}
          link={"/cart"}
          onClick={() => {
            if (product.countInStock)
              dispatch(addCartItem(product, 1));
          }}

        />
      </ButtonsBox>
      </CardLink>
      </CardBox>
  );
}
