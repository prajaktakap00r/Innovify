import logo from "../assets/images/new-logo.png";
export default function Logo() {
  return (
    <img
      src={logo}
      alt="Innovify"
      className="logo"
      style={{ width: 180, height: 200, paddingTop: 30 }}
    />
  );
}
