import logo from "../assets/images/logo2.png";
export default function Logo() {
  return (
    <img
      src={logo}
      alt="Innovify"
      className="logo"
      style={{ width: 180, height: 50 }}
    />
  );
}
