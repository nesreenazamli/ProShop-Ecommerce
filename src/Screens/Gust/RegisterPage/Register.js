import {
  InnerSection,
  FlexBox,
  FlexRow,
  FlexColumn,
  Typography,
} from "../../../App.Styles";
import { SignImg, LineSep } from "./Register.Styles";
import SignUpImg from "../../../Assets/login.png";
import Button from "../../../Components/Button/Button";
import { ErrorMessage, Input } from "../../User/LoginPage/LoginPage.Styles";
import { Form, Formik } from "formik";
import { registerSchema } from "../../../Valedation";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../../Redux/User/userActions";
import { Link } from "react-router-dom";

export default function Register() {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(registerAction(values, history));
  };
  return (
    <FlexBox color="#fff">
      <InnerSection>
        <FlexRow style={{ justifyContent: "start", alignItems: "start" }}>
          <FlexColumn
            style={{
              justifyContent: "start",
              alignItems: "start",
              width: " 474px",
              margin:"0 20px",
            }}
          >
            <Typography fontSize={60} fontWeight={"bold"}>
              Signup.
            </Typography>
            <Typography fontSize={32}>
              Sign up and get exclusive offers from us
            </Typography>

            <Formik
              initialValues={{
                email: "",
                password: "",
                passwordConfirmation: "",
                name: "",
              }}
              validationSchema={registerSchema()}
              onSubmit={handleSaveChanges}
            >
              {({ errors, touched }) => {
                return (
                  <Form
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <Input name={"name"} type={"name"} placeholder={"Name"} />
                    {errors.name && touched.name ? (
                      <ErrorMessage>{errors.name}</ErrorMessage>
                    ) : null}

                    <Input
                      name={"email"}
                      type={"email"}
                      placeholder={"Email"}
                    />
                    {errors.email && touched.email ? (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    ) : null}

                    <Input
                      name={"password"}
                      type={"password"}
                      placeholder={"password"}
                    />
                    {errors.password && touched.password ? (
                      <ErrorMessage>{errors.password}</ErrorMessage>
                    ) : null}

                    <Input
                      name={"passwordConfirmation"}
                      type={"password"}
                      placeholder={"Confirmation password"}
                    />
                    {errors.passwordConfirmation &&
                    touched.passwordConfirmation ? (
                      <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
                    ) : null}

                    {error ? <ErrorMessage>{error}</ErrorMessage> : null}

                    <Button
                      isLoading={isLoading}
                      width={"100%"}
                      borderRadius={6}
                      text={"Sign up"}
                    />
                  </Form>
                );
              }}
            </Formik>

            <LineSep />

            <FlexRow>
              <Typography fontSize={22} style={{ opacity: "0.6" }}>
                {" "}
                Have an account ? <Link to={"/login"}>Login</Link>
              </Typography>
            </FlexRow>
          </FlexColumn>
          <SignImg src={SignUpImg} />
        </FlexRow>
      </InnerSection>
    </FlexBox>
  );
}
