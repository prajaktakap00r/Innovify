import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import logo from "../assets/images/innovify3.svg";
import main from "../assets/images/main.svg";
import "../index.css";
export default function Landing() {
  return (
    <Wrapper>
      <nav>
        {/*  <img
          src={logo}
          alt="Innovify"
          className="logo"
          style={{ width: 20, height: 20 }}
        /> */}
        <div className="container page">
          <h1>
            Partner <span>Finder</span> App
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
        </div>
      </nav>
    </Wrapper>
  );
}
