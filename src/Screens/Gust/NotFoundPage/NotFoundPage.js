import { InnerSection, Typography, FlexColumn } from "../../../App.Styles";
import { NotFoundBoutton } from "./NotFoundPage.Styles";

export default function NotFoundPage() {
  return (
    <FlexColumn>
      <InnerSection>
        <Typography fontSize={300} fontWeight={700}>
          404
        </Typography>
        <Typography fontSize={30} fontWeight={500} style={{ padding: "50px" }}>
          Sorry we can’t find that page! Don’t worry, though everything is STILL
          AWESOME!
        </Typography>
        <NotFoundBoutton to={"/"}> Start shopping &#10095; </NotFoundBoutton>
      </InnerSection>
    </FlexColumn>
  );
}
