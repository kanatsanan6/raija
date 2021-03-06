import React, { useState } from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

function Profile() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <>
      <Header setIsShowSidebar={setIsShowSidebar} />
      {isShowSidebar && <Sidebar setIsShowSidebar={setIsShowSidebar} />}
    </>
  );
}

export default Profile;
