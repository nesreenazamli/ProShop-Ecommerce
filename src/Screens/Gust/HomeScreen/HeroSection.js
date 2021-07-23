import {
    FlexBox,
    FlexRow,
    InnerSection,
    Typography,
  } from "../../../App.Styles";
  import SwipeableViews from "react-swipeable-views";
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
  import { useState } from "react";
  
  const styles = {
    root: {
      position: "relative",
      width: "100%",
      height: 678,
    },
  };
  
 
export default function HeroSection({ sliderProducts }) {
    const [sliderIndex, setSliderIndex] = useState(0);
  
    const handleChangeIndex = () => {};
  
    return (
      <FlexBox color={"#F2F2F2"}>
        <InnerSection>
          <SwipeableViews
            style={Object.assign({}, styles.root, styles.root)}
            index={sliderIndex}
            onChangeIndex={handleChangeIndex}
          >
            {sliderProducts.map((item) => (
              <HeroBox key={item._id}>
                <SideBox>
                  <Typography
                    fontSize={32}
                    color={"#242424"}
                    style={{ justifyContent: "start" }}
                  >
                    ${item.price}
                  </Typography>
                  <HeroTitle>{item.name.substring(0, 40)}</HeroTitle>
                  <Typography fontSize={32} color={"#242424"}>
                    {item.description.substring(0, 80)}
                  </Typography>
                  <Button
                    link={`/product/${item._id}/${item.name}`}
                    text="Shop now"
                    width={"220px"}
                    borderRadius={20}
                    style={{ marginTop: 42, height: 52 }}
                  />
                </SideBox>
                <SideBox>
                  <SliderImg src={"https://proshop-ms.herokuapp.com/" + item.image} />
                </SideBox>
              </HeroBox>
            ))}
          </SwipeableViews>
  
          <FlexRow style={{ marginBottom: 30 }}>
            <Arrow
              isLeft={true}
              onClick={() => {
                if (sliderIndex === 0) setSliderIndex(2);
                else setSliderIndex(sliderIndex - 1);
              }}
            >
              &#10095;
            </Arrow>
            <SliderDots
              size={25}
              isGray={sliderIndex !== 0}
              onClick={() => {
                setSliderIndex(0);
              }}
              style={{margin:"0 5px"}}
            />
            <SliderDots
              size={25}
              isGray={sliderIndex !== 1}
              onClick={() => {
                setSliderIndex(1);
              }}
              style={{margin:"0 5px"}}
            />
            <SliderDots
              size={25}
              isGray={sliderIndex !== 2}
              onClick={() => {
                setSliderIndex(2);
              }}
              style={{margin:"0 5px"}}
            />
            <Arrow
              onClick={() => {
                if (sliderIndex === 2) setSliderIndex(0);
                else setSliderIndex(sliderIndex + 1);
              }}
            >
              &#10095;
            </Arrow>
          </FlexRow>
        </InnerSection>
      </FlexBox>
    );
  }
  

  