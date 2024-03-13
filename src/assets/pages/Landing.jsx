import styled from "styled-components";

const Styledbtn = styled.button`
  background: red;
  color: white;
  font-size: 1.5rem;
`;

export default function Landing() {
  return (
    <div>
      <h1>Landing Layout</h1>
      <Styledbtn>Button</Styledbtn>
    </div>
  );
}
