import styled from "styled-components";
import Wrapper from "../wrappers/LandingPage";
import logo from "../images/logo.svg";

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <img src="{logo}" className="logo" alt="Inovify" />
      </nav>
    </Wrapper>
  );
}
