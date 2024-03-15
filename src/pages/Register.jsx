import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import Logo from "../components/logo";
import { FormRow } from "../components";

export default function Register() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="John" />
        <FormRow type="text" name="Last name" defaultValue="John" />
        <FormRow type="text" name="Location" defaultValue="John" />
        <FormRow type="text" name="Email" defaultValue="John" />
        <FormRow type="password" name="Password" defaultValue="John" />

        <button className="btn btn-block">Submit</button>
        <p>
          Already a member?{" "}
          <Link to="/login" style={{ color: "#eb5e28" }}>
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
