import Avatar from "@mui/material/Avatar";
import { stringToHslColor } from "../../utils/colors/letterColor";

function Header({ setIsShowSidebar }) {
  const openSidebar = () => {
    setIsShowSidebar(true);
  };

  return (
    <div className="z-10 sticky top-0 flex h-16 w-[100%] items-center justify-between bg-white shadow-sm">
      <div className="flex w-[10%] items-center">
        <img src="/images/option.svg" alt="" className="mr-4 ml-5 cursor-pointer sm:ml-10" onClick={openSidebar} />
        <img src="/images/raija-logo.svg" alt="" className="mr-2" />
        <h1 className="text-xl font-semibold leading-7 tracking-wider text-[#253858]">RAIJA</h1>
      </div>

      <div className="mr-5 sm:mr-10">
        <Avatar sx={{ bgcolor: stringToHslColor("Kanatsanan Janpakdee") }}>K</Avatar>
      </div>
    </div>
  );
}

export default Header;
