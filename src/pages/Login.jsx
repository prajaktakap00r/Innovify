import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";
import Logo from "../components/logo";
import { FormRow } from "../components";

export default function Login() {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          type="email"
          name="Email"
          defaultValue="kprajakta235@gmail.com"
        />
        <FormRow type="password" name="Password" defaultValue="secret123" />
        <button className="btn btn-block" type="submit">
          Submit
        </button>
        <button className="btn btn-block">Explore the App</button>
        <p>
          Not a member yet?
          <Link to="/register" style={{ color: "#eb5e28" }}>
            {" "}
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
}
