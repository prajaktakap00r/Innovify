import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import SubmitBtn from "../components/SubmitBtn";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Regsitration Successfull");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);

    return error;
  }
};
export default function Register() {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Prajakta" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Kapoor"
        />
        <FormRow type="text" name="location" defaultValue="Jammu" />
        <FormRow
          type="email"
          name="email"
          defaultValue="kprajakta235@gmail.com"
        />
        <FormRow type="password" name="password" defaultValue="secret123" />

        <SubmitBtn />
        <p>
          Already a member?{" "}
          <Link to="/login" style={{ color: "#eb5e28" }}>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
