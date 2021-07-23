import propTypes from "prop-types";
import { ContentBox,CardImage,CardBox,DeleteSpan,CounterBox} from "./CartItem.Styles";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {
  FlexRow,
  Typography,
} from "../../App.Styles";
import { Counter } from "../../Screens/Gust/Product/Product.Styles";

export default function CartItem({
  count,
  setCount,
  price,
  image,
  name,
  handleDelete,
  increaseCounter,
  decreaseCounter
}) {
  return (
    <CardBox>
    <CardImage src={"https://proshop-ms.herokuapp.com/" + image} alt={name} />
    <ContentBox>
      <FlexRow style={{ justifyContent: "flex-end" }}> 
        <DeleteSpan onClick={handleDelete}>x</DeleteSpan>
      </FlexRow>
      <Typography
        fontSize={24}
        fontWeight={700}
        style={{ justifyContent: "start", maxWidth: "50%" }}
      >
        {name}
      </Typography>
      <CounterBox >
        <FlexRow
          style={{
            height: 40,
            width: 165,
            border: "1px solid #F2F2F2",
            background: "#FFFFFF",
          }}
        >
          <Counter onClick={decreaseCounter}>
            <RemoveIcon />
          </Counter>
          <Typography
            width={"90px"}
            alignItems="center"
            justifyContent="center"
            fontWeight="700"
            fontSize="24px"
            style={{padding:"0 32px"}}
          >
            {count}
          </Typography>
          <Counter onClick={increaseCounter}>
            <AddIcon />
          </Counter>
        </FlexRow>
        <Typography
          fontSize={30}
          fontWeight={700}
          style={{
            justifyContent: "flex-end",
            marginLeft: "10%",
            width: "auto",
          }}
        >
          ${price}
        </Typography>
      </CounterBox>
    </ContentBox>
  </CardBox>
  )}


CartItem.defaultProps = {
  handleDelete: () => {},
  setCounter: () => {},
  count: 1,
};

CartItem.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  count: propTypes.number.isRequired,
  price: propTypes.number.isRequired,
  setCount: propTypes.func.isRequired,
  handleDelete: propTypes.func.isRequired,
};
