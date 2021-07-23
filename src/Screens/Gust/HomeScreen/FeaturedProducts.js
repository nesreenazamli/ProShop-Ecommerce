import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import {
  HeroBox,
  HeroTitle,
  SideBox,
  CardBox,
  CardTitle,
  Line,
  Cards,
  CardContainer,
  CardImg,
  StarBox,
  ButtonsBox,
  HeadBorder,
  DotsBox,
  SliderDots,
  SliderImg,
  Arrow,
} from "./HomeScreen.Styles";
import Button from "../../../Components/Button/Button";
import ProductCard from "../../../Components/ProductsCard/ProductCard";

const styles = {
  root: {
    position: "relative",
    width: "100%",
  },
};

const StyleObj = {
  fontSize: 28,
  color: "#FCDD06",
  fill: "#FCDD06",
};

export default function FeaturedProducts({ products }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  const chunkSize =
    window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;

  const handleChangeIndex = () => {};

  const getSlides = () => {
    const chunks = [];

    products.map((i, idx) => {
      if (idx % chunkSize === 0) {
        chunks.push([]);
      }
      const firstArrayLength = chunks.length;
      const secondArrayLength = chunks[firstArrayLength - 1].length;

      chunks[firstArrayLength - 1][secondArrayLength] = i;

      return i;
    });

    return chunks.map((i, idx) => (
      <FlexRow key={idx}>
        {i.map((item) => (
          <ProductCard
          product={item}
            key={item._id}
            id={item._id}
            image={"https://proshop-ms.herokuapp.com/" + item.image}
            name={item.name}
            discount={0}
            price={item.price}
            rate={item.rating}
          />
        ))}
      </FlexRow>
    ));
  };

  return (
    <FlexBox color={"#F7F8FC"}>
      <InnerSection>
        <CardTitle>Featured Products </CardTitle>
        <HeadBorder />
        <Line />
        <CardContainer>
          <SwipeableViews
            style={Object.assign({}, styles.root, styles.root)}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
            {getSlides()}
          </SwipeableViews>
          <FlexRow background={"#fff"} width={"31%"} borderRadius={"16px"}>
            {getSlides().map((i, idx) => (
              <SliderDots
                style={{ margin: "30px 5px 0" }}
                size={16}
                key={idx}
                isGray={sliderIndex !== idx}
                onClick={() => {
                  setSliderIndex(idx);
                }}
              />
            ))}
          </FlexRow>
        </CardContainer>
      </InnerSection>
    </FlexBox>
  );
}
