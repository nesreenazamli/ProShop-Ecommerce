import {
  FlexColumn,
  FlexRow,
  FlexBox,
  InnerSection,
  Typography,
} from "../../../App.Styles";

import { EmptyCartImg } from "../ShoppingCart/ShoppingCart.Styles";
import emtycart from "../../../Assets/emptyCart.png";
import {RecentlyViewedProducts} from '../../../Components/ProductsCard/RecentlyViewedProducts'

export default function ShoppingCard() {
  return (
    <FlexColumn color={"#fff"}>
      <InnerSection>
        <FlexRow style={{ justifyContent: "start", marginTop: "20px" }}>
          <Typography style={{ color: "#707070" }}>Back </Typography>
          <Typography style={{ margin: "0 5px" }}> / </Typography>
          <Typography> Shopping Cart</Typography>
        </FlexRow>

        <FlexRow>
          <FlexColumn
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "60px",
              marginTop: "30px",
            }}
          >
            <Typography fontSize={32} fontWeight={"bold"}>
              Your shopping cart is empty{" "}
            </Typography>
            <EmptyCartImg src={emtycart} />

          </FlexColumn>
          
            
          
        </FlexRow>

        <RecentlyViewedProducts />
      </InnerSection>
    </FlexColumn>
  );
}
