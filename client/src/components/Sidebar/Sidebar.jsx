import { useLocation } from "react-router";
import SidebarItem from "./SidebarItem";

function Sidebar() {
  const location = useLocation();
  const pathName = location.pathname;
  console.log(pathName);
  return (
    <div className="fixed top-0 flex h-screen w-screen">
      <div className="h-[100%] w-[280px] bg-white py-6">
        <div className="flex w-[10%] items-center px-5">
          <h4 className="text-xl font-semibold leading-7 tracking-wider text-[#253858]">RAIJA</h4>
        </div>
        <hr className="mx-5 mt-3" />
        <p className="mt-1 mb-3 px-5 text-sm text-gray-500">Page</p>
        <SidebarItem itemName="Dashboard" itemLogo="/images/dashboard-logo.svg" isSelected={pathName === "/"} />
        <SidebarItem itemName="Profile" itemLogo="/images/profile-logo.svg" isSelected={pathName === "/profile"} />
      </div>
      <div className="flex-1 bg-black bg-opacity-30" />
    </div>
  );
}

export default Sidebar;
