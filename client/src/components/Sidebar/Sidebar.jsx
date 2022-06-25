import SidebarItem from "./SidebarItem";

function Sidebar({ setIsShowSidebar }) {
  const closeSidebar = () => {
    setIsShowSidebar(false);
  };

  return (
    <div className="fixed top-0 flex h-screen w-screen">
      <div className={`slideIn h-[100%] w-[280px] bg-white py-6`}>
        <div className="flex w-[10%] items-center px-5">
          <h4 className="text-xl font-semibold leading-7 tracking-wider text-[#253858]">RAIJA</h4>
        </div>
        <hr className="mx-5 mt-3" />
        <p className="mt-1 mb-3 px-5 text-sm text-gray-500">Page</p>
        <SidebarItem itemName="Dashboard" itemLogo="/images/dashboard-logo.svg" pathName="/" />
        <SidebarItem itemName="Profile" itemLogo="/images/profile-logo.svg" pathName="/profile" />
      </div>
      <div className="appearIn flex-1 bg-black bg-opacity-30" onClick={closeSidebar} />
    </div>
  );
}

export default Sidebar;
