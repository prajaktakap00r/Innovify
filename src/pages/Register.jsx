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
        <FormRow type="text" name="name" defaultValue="Prajakta " />
        <FormRow type="text" name="Last name" defaultValue="Kapoor" />
        <FormRow type="text" name="Location" defaultValue="Jammu" />
        <FormRow
          type="text"
          name="Email"
          defaultValue="kprajakta235@gmail.com"
        />
        <FormRow type="password" name="Password" defaultValue="secret123" />

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
