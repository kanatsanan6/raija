import { useState } from "react";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import Sidebar from "../components/Sidebar/Sidebar";

function Homepage() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("all");

  const selectAllProject = () => {
    setSelectedMenu("all");
  };

  const selectYourProject = () => {
    setSelectedMenu("your");
  };

  return (
    <>
      <Header setIsShowSidebar={setIsShowSidebar} />
      {isShowSidebar && <Sidebar setIsShowSidebar={setIsShowSidebar} />}

      <div className="px-5 py-7 md:px-10 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-md font-light text-gray-400 sm:text-lg">RAIJA</p>
            <p className="text-md mx-3 font-light text-gray-400 sm:text-lg">/</p>
            <p className="text-md font-light text-gray-400 sm:text-lg">Dashboard</p>
          </div>
          <p className="hidden text-2xl sm:block">Hello, Kanatsanan</p>
        </div>

        <div className="flex items-center justify-between py-5">
          <h3 className="text-2xl font-semibold sm:text-3xl">Dashboard</h3>
          <button className="text-md rounded-md bg-[#0052CC] px-4 py-2 font-medium text-white sm:py-2 sm:px-7 sm:text-lg">
            + New
          </button>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-baseline">
            <Menu menuTitle="All Projects" isSelected={"all" === selectedMenu} onClick={selectAllProject} />
            <Menu menuTitle="Your Projects" isSelected={"your" === selectedMenu} onClick={selectYourProject} />
          </div>
          <div className="flex items-center rounded-md border border-gray-300 p-1">
            <img src="/images/search.svg" alt="" className="mr-2 ml-2 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="h-3 w-20 text-xs focus:outline-0 sm:h-6 sm:w-48 sm:text-base md:w-28"
            />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Homepage;
