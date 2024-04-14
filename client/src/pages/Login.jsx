import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login Successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error("error?.response?.data?.msg");
    return error;
  }
};
export default function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="Email"
          defaultValue="kprajakta235@gmail.com"
        />
        <FormRow type="password" name="Password" defaultValue="secret123" />
        <button className="btn btn-block" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        <button className="btn btn-block">Explore the App</button>
        <p>
          Not a member yet?
          <Link to="/register" style={{ color: "#eb5e28" }}>
            {" "}
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
