import { Avatar } from "@mui/material";
import { useEffect, useRef } from "react";
import { useStateValue } from "../../context/StateProvider";
import { stringToHslColor } from "../../utils/colors/letterColor";
import { ClickOutSide } from "../../utils/function/handleClickOutside";

function MemberDropDown({ filterInput, setFilterInput, members, setMembers, setShowMemberDropDown, inputRef }) {
  const [{ users }] = useStateValue();
  const allUsers = users.users;
  const filterUsers =
    filterInput === ""
      ? allUsers
      : allUsers.filter((user) => (user.email.includes(filterInput) || user.name.includes(filterInput) ? user : null));

  const addMember = (user) => {
    const newMembers = [...members];
    newMembers.push(user._id);
    setMembers(newMembers);
    setShowMemberDropDown(false);
    setFilterInput("");
  };

  const formRef = useRef(null);
  ClickOutSide([formRef, inputRef], useEffect, () => setShowMemberDropDown(false));

  return (
    <div className="z-10 h-44 rounded-md border border-gray-200 bg-white p-1 shadow-md" ref={formRef}>
      {filterUsers.map((user) => {
        return (
          <div
            key={user._id}
            className="flex cursor-pointer items-center rounded-md hover:bg-[#ebf3fe91]"
            onClick={() => addMember(user)}
          >
            <Avatar sx={{ transform: "scale(0.7)", bgcolor: stringToHslColor(user.name) }}>
              {user.name[0].toUpperCase()}
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xs">{user.name}</h3>
              <h4 className="text-xs text-gray-600">{user.email}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MemberDropDown;
