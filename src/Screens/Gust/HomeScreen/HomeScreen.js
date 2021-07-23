import {
  FlexColumn,
  SpinnerContainer
} from "../../../App.Styles";
import Cardimg from "../../../Assets/Screenshot 2021-06-15 114138.png";
import SwipeableViews from "react-swipeable-views";
import { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedProducts from "./FeaturedProducts";
import TopRatedProducts from "./TopRatedProducts"
import {
  getFeaturedProducts,
  getSliderImages,
} from "../../../Redux/Guest/guestActions";
import HeroSection from "./HeroSection";

const styles = {
  root: {
    position: "relative",
    width: "100%",
    height: 678,
  },
};

const StyleObj = {
  fontSize: 28,
  color: "#FCDD06",
  fill: "#FCDD06",
};

const StyleChevron = {
  fontSize: 50,
  color: "#000000",
  fill: "#000000",
};

const HomeScreen = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(getSliderImages());
    dispatch(getFeaturedProducts());
  }, [dispatch]);

  return state.guestState.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn >
      <HeroSection sliderProducts={state.guestState.sliderImages} />
      <FeaturedProducts products={state.guestState.products} />
      <TopRatedProducts topRatedProducts={state.guestState.sliderImages} />
    </FlexColumn>
  );
};

export default HomeScreen;
