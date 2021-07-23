import { FlexColumn } from "../../App.Styles";
import {
  RateBox,
  ReviewTitle,
  ReviewDate,
  ReviewDescription,
} from "./Review.Styles";
import Rating from "@material-ui/lab/Rating";

export default function Review({ title, text, rate, date }) {
  return (
    <FlexColumn
      style={{
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <ReviewTitle>{title}</ReviewTitle>
      <RateBox>
        <Rating name="simple-controlled" value={rate} />
        <ReviewDate>{date.substring(0, 10)}</ReviewDate>
      </RateBox>
      <ReviewDescription>{text}</ReviewDescription>
    </FlexColumn>
  );
}
