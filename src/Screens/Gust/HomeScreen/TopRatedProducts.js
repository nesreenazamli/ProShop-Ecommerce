import {
  CardBox,
  CardTitle,
  Line,
  Cards,
  CardContainer,
  HeadBorder
} from "./HomeScreen.Styles";
import {
  FlexBox,
  FlexColumn,
  FlexRow,
  InnerSection,
  Typography,
} from "../../../App.Styles";
import ProductCard from "../../../Components/ProductsCard/ProductCard"

export default function TopRatedProducts({ topRatedProducts }) {
  return (
    <FlexBox color={"white"}>
      <InnerSection>
        <CardContainer>
          <CardTitle>TOP RATE PRODUCTS</CardTitle>
          <HeadBorder />
          <Line />
          <Cards border={"1px solid #FCDD06"}>
          {topRatedProducts.map((item) => (
            <ProductCard
              product={item}
              id={item._id}
              key={item._id}
              widthBorder={true}
              image={"https://proshop-ms.herokuapp.com/" + item.image}
              name={item.name}
              discount={0}
              price={item.price}
              rate={item.rating}
            />
          ))}
          </Cards>
        </CardContainer>
      </InnerSection>
    </FlexBox>
  );
}
