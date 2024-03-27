import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
export default function LogoutContainer() {
  const [showLogout, setShowLogout] = useState();
  const { user, logoutUser } = useDashboardContext();
  return (
    <Wrapper>
      <button
        className="btn logout-btn"
        type="button"
        onClick={() => setShowLogout(!showLogout)}
      >
        <FaUserCircle />
        {user.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "show-dropdown dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
}
