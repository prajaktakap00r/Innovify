import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import innovify2 from "../assets/images/ino1.png";
import "../index.css";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            Job <span>Finder</span> App
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            LogIn
          </Link>
        </div>
        <img src={innovify2} alt="hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
}
