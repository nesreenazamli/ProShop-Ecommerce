import React from "react";
import { Line } from "../../Screens/Gust/HomeScreen/HomeScreen.Styles";
import {
  FlexColumn,
  Typography,
  InnerSection,
  FlexRow,
  FlexBox,
} from "../../App.Styles";
import { Border } from "./ProductCard.styles";
import ProductCard from "./ProductCard";

export  function RecentlyViewedProducts() {
  return (
    <FlexBox style={{ background: "#FFF" }}>
      <InnerSection>
        <FlexColumn style={{ alignItems: "start" }}>
          <Typography
            fontSize={32}
            fontWeight={"bold"}
            style={{ letterSpacing: "1.28px", textTransform: "uppercase " }}
          >
            Recently viewed
            <Border />
          </Typography>
          <Line />

          <FlexRow
            style={{
              justifyContent: "space-between",
              border: "1px solid yellow",
            }}
          >
            <ProductCard item={"Canon Eos 80D DSLR Camera"} price={"$799.99"} />
            <ProductCard item={"Canon Eos 80D DSLR Camera"} price={"$799.99"} />
            <ProductCard item={"Canon Eos 80D DSLR Camera"} price={"$799.99"} />
          </FlexRow>
        </FlexColumn>
      </InnerSection>
    </FlexBox>
  );
}
