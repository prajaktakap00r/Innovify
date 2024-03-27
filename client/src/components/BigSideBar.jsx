import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./logo";
import { useDashboardContext } from "../pages/DashboardLayout";
export default function BigSideBar() {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>

          <NavLinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
}
//Big slide bar for full screen
