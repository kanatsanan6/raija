import { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Homepage() {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <>
      <Header setIsShowSidebar={setIsShowSidebar} />
      {isShowSidebar && <Sidebar setIsShowSidebar={setIsShowSidebar} />}
    </>
  );
}

export default Homepage;
