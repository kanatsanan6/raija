import { Avatar } from "@mui/material";
import { stringToHslColor } from "../../utils/colors/letterColor";

function Member({ user, members, setMembers }) {
  const deleteMemner = () => {
    setMembers([...members].filter((member) => member !== user._id));
  };
  return (
    <div className="mb-2 flex w-[100%] items-center rounded-md bg-[#EBF3FE] px-1 py-1">
      <Avatar sx={{ transform: "scale(0.8)", bgcolor: stringToHslColor(user.name) }}>
        {user.name[0].toUpperCase()}
      </Avatar>
      <div className="ml-1 flex-1">
        <h4 className="text-sm">{user.name}</h4>
        <h5 className="text-xs text-gray-700">{user.email}</h5>
      </div>
      <img src="\images\close.svg" alt="" className="mr-2 cursor-pointer" onClick={deleteMemner} />
    </div>
  );
}

export default Member;
