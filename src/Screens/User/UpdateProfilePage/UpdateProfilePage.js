import { FlexColumn, InnerSection, Typography,SpinnerContainer } from "../../../App.Styles";
import { ErrorMessage, Input } from "../../User/LoginPage/LoginPage.Styles";
import { Form, Formik } from "formik";
import { updateProfileSchema } from "../../../Valedation";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Components/Button/Button";
import { useEffect } from "react";
import {
  getProfileAction,
  updateProfileAction,
} from "../../../Redux/User/userActions";


export default function UpdateProfilePage(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const userDetails = state.userDetails;

  const { error, isLoading } = userDetails;

  const handleSaveChanges = async (values) => {
    dispatch(updateProfileAction(values, history));
  };

  useEffect(() => {
    dispatch(getProfileAction());
  }, [dispatch]);

  return state.userDetails.userProfile?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn color={"#fff"} style={{ alignItems: "start" }}>
      <InnerSection>
        <FlexColumn style={{ alignItems: "start", justifyContent: "start", padding: "0 20px", }}>
          <Typography
            fontSize={60}
            fontWeight={"bold"}
            style={{ marginBottom: "20px" }}
          >
            My Profile
          </Typography>

          <Formik
            initialValues={{
              email: state.userDetails.userProfile?.user?.email,
              password: "",
              passwordConfirmation: "",
              name: state.userDetails.userProfile?.user?.name,
            }}
            validationSchema={updateProfileSchema()}
            onSubmit={handleSaveChanges}
          >
            {({ errors, touched }) => {
              return (
                <Form
                  style={{
                    width: "40%",
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

                  <Input name={"email"} type={"email"} placeholder={"Email"} />
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
                    style={{ padding: "10px" }}
                    text={"update profile"}
                    isLoading={isLoading}
                    width={"100%"}
                    borderRadius={6}
                  />
                </Form>
              );
            }}
          </Formik>
        </FlexColumn>
      </InnerSection>
    </FlexColumn>
  );
}
