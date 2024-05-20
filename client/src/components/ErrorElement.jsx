import { useRouteError } from "react-router-dom";
import img from "../assets/images/cancel.svg";

export default function ErrorElement() {
  const error = useRouteError();
  console.log(error);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
  };

  const imageStyle = {
    marginBottom: 300,
    maxWidth: "500px",
    height: "500px",
  };

  return (
    <div style={containerStyle}>
      <img src={img} alt="not found" style={imageStyle} />
    </div>
  );
}
