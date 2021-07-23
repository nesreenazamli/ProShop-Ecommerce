import styled from "styled-components";
import { FlexBox, FlexRow, InnerSection, FlexColumn } from "../../App.Styles";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

export const NavContainer = styled("nav")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  height: 85px;
  background: #242424 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
`;

export const NavInnerSection = styled(InnerSection)`
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1400px) {
    padding: 0 20px;
  }
`;

export const NavBox = styled(FlexRow)`
  width: auto;
`;
export const StyledLink = styled(Link)`
  color: #fff;
  font-size: 40px;
  text-decoration: none;
`;

export const Logo = styled.span`
  color: ${(props) => (props.color ? props.color : "#fcdd06")};
`;

export const SearchInput = styled("input")`
  height: 40px;
  width: 100%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  border: none;
  padding: 12px 26px;

  &:focus {
    outline: none;
    border: none;
  }
  ::placeholder {
    font-size: 13px;
    color: #000;

  }
`;

export const SearchButton = styled(FlexBox)`
  width: 152px;
  height: 40px;
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 6px;
  opacity: 1;
  cursor: pointer;
`;

export const StyledSearchIcon = styled(SearchIcon)`
  font-size: 18;
  margin-right: 10px;
`;

export const Icon = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  width: auto;
  margin: auto 0 auto 32px;
`;

export const IconCouunt = styled("span")`
  color: #000;
  background: #fcdd06;
  font-size: 8px;
  font-weight: 700;
  border-radius: 50%;
  width: 13px;
  height: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 8px;
  top: 10px;
  z-index: 1;
`;

export const MobileMenu = styled(FlexColumn)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  padding: 40px 20px;
  background: #fcdd06;
  z-index: 100;
  color: #242424 !important;
  justify-content: start;

  animation: ease-in-out menu 500ms;

  @keyframes menu {
    0% {
      top: 100vh;
    }
    100% {
      top: 0px;
    }
  }
`;
export const CloseDiv = styled(StyledLink)`
  font-size: 40px !important;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const StyledBox = styled(NavBox)`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const StyledBoxForMobile = styled(NavBox)`
  display: none;
  @media screen and (max-width: 1100px) {
    display: flex;
  }
`;
