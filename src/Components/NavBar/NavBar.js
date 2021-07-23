import {
  NavContainer,
  NavInnerSection,
  StyledLink,
  CloseDiv,
  NavBox,
  Logo,
  SearchInput,
  SearchButton,
  StyledSearchIcon,
  Icon,
  IconCouunt,
  MobileMenu,
  StyledBoxForMobile,
  StyledBox,
} from "./NavBar.Styles";
import { Typography } from "../../App.Styles";
import { useState } from "react";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logoutAction } from "../../Redux/User/userActions";
import { MenuOutlined } from "@material-ui/icons";
import { useLocationWithQuery } from "react-router-query-hooks";

const StyleObj = {
  fontSize: 20,
  color: "#FFF",
  fill: "#FFF",
  margin: "auto 0 auto 32px",
};

const NavBar = () => {
  const history = useHistory();
  const locationQuery = useLocationWithQuery();
  const {
    query: { keyword },
  } = locationQuery;
  const [value, setValue] = useState(keyword ? keyword : "");

  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    setIsMenuOpened(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <>
      {isMenuOpened && (
        <MobileMenu>
          <CloseDiv color={"#242424"} as={"div"} onClick={handleCloseMenu}>
            x
          </CloseDiv>
          <StyledLink color={"#242424"} to={"/"}>
            <Logo color={"#242424"}>Pro</Logo>Shop
          </StyledLink>

          <Icon to={state.userDetails.user._id ? "/Profile" : "/LoginPage"}>
            <PersonIcon style={StyleObj} />
            {state.userDetails.user._id ? (
              <Typography fontSize={"13px"} color={"#fff"}>
                {state.userDetails.user.name}
              </Typography>
            ) : (
              <Typography fontSize={"13px"} color={"#fff"}>
                Login / Sign up
              </Typography>
            )}
          </Icon>

          <Icon to={"/cart"} style={{ transform: "translate(0, -4px)" }}>
            <IconCouunt>{state.cart.cart.length}</IconCouunt>
            <ShoppingCartIcon style={StyleObj} />
            <Typography fontSize={"13px"} color={"#fff"}>
              Cart
            </Typography>
          </Icon>
          {state.userDetails.user._id && (
            <Icon
              onClick={() => {
                dispatch(logoutAction());
                localStorage.removeItem("user");
              }}
            >
              <ExitToAppIcon style={StyleObj} />

              <Typography fontSize={"13px"} color={"#fff"}>
                Logout
              </Typography>
            </Icon>
          )}
        </MobileMenu>
      )}
      <NavContainer>
        <NavInnerSection>
          <NavBox>
            <StyledLink to={"/"}>
              <Logo>Pro</Logo>Shop
            </StyledLink>
          </NavBox>
          <NavBox style={{ background: "#FFF", borderRadius: 6 }}>
            <SearchInput
              value={value}
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <SearchButton 
            onClick={() => {
                history.push(`/search${value ? `?keyword=${value}` : ""}`);
              }}
              >

             
              <StyledSearchIcon />
              Search
            </SearchButton>
          </NavBox>

          <StyledBox>
            <Icon to={state.userDetails.user._id ? "/Profile" : "/LoginPage"}>
              <PersonIcon style={StyleObj} />
              {state.userDetails.user._id ? (
                <Typography fontSize={"13px"} color={"#fff"}>
                  {state.userDetails.user.name}
                </Typography>
              ) : (
                <Typography fontSize={"13px"} color={"#fff"}>
                  Login / Sign up
                </Typography>
              )}
            </Icon>

            <Icon to={"/cart"} style={{ transform: "translate(0, -4px)" }}>
              <IconCouunt>{state.cart.cart.length}</IconCouunt>
              <ShoppingCartIcon style={StyleObj} />
              <Typography fontSize={"13px"} color={"#fff"}>
                Cart
              </Typography>
            </Icon>
            {state.userDetails.user._id && (
              <Icon
                onClick={() => {
                  dispatch(logoutAction());
                  localStorage.removeItem("user");
                }}
              >
                <ExitToAppIcon style={StyleObj} />

                <Typography fontSize={"13px"} color={"#fff"}>
                  Logout
                </Typography>
              </Icon>
            )}
          </StyledBox>
          <StyledBoxForMobile>
            <MenuOutlined style={StyleObj} onClick={handleOpenMenu} />
          </StyledBoxForMobile>
        </NavInnerSection>
      </NavContainer>
    </>
  );
};

export default NavBar;
