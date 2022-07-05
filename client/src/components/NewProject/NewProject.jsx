import { useEffect, useRef, useState } from "react";
import { createProject } from "../../actions/projects";
import { useStateValue } from "../../context/StateProvider";
import { ClickOutSide } from "../../utils/function/handleClickOutside";
import Member from "../Member/Member";
import MemberDropDown from "../Member/MemberDropDown";

function NewProject({ setIsShowNewProject }) {
  const inputRef = useRef(null);
  const [{ users }, dispatch] = useStateValue();
  const [filterInput, setFilterInput] = useState("");
  const [showMemberDropDown, setShowMemberDropDown] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDes, setProjectDes] = useState("");
  const [members, setMembers] = useState([]);
  const showMembers = users.users.filter((user) => (members.includes(user._id) ? user : null));

  const onSubmitCreateProject = () => {
    const newProject = {
      projectName: projectName,
      projectDescription: projectDes,
      owner: "62c2fc913fe9c510a3177f21",
      members: members,
    };
    createProject(dispatch, newProject);
    setIsShowNewProject(false);
    setFilterInput("");
    setProjectName("");
    setProjectDes("");
    setShowMemberDropDown(false);
    setMembers([]);
  };

  const formRef = useRef(null);
  ClickOutSide([formRef], useEffect, () => setIsShowNewProject(false));

  return (
    <div className="absolute top-0 left-0 z-10 flex h-[100%] w-screen items-center justify-center bg-black bg-opacity-60">
      <div
        className="flex h-[70%] min-h-[656px] w-[30%] min-w-[360px] flex-col justify-between rounded-lg bg-white p-6"
        ref={formRef}
      >
        <div className="mb-3 flex h-[100%] flex-1 flex-col">
          <h4 className="mb-5 text-center text-2xl font-semibold">New Project</h4>
          <h5 className="mb-1 text-sm">Project Name</h5>
          <input
            type="text"
            placeholder="Enter Project Name"
            className="mb-4 w-[100%] rounded-md border border-gray-300 p-2 text-sm"
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
          />
          <h5 className="mb-1 text-sm">Project Discription</h5>
          <textarea
            name="text"
            cols="40"
            rows="5"
            placeholder="Enter Project Description"
            className="mb-4 min-h-[120px] w-[100%] rounded-md border border-gray-300 p-2 text-sm "
            onChange={(e) => setProjectDes(e.target.value)}
            value={projectDes}
          />
          <h5 className="mb-1 text-sm">Member</h5>
          <input
            type="text"
            placeholder="Enter Member Name"
            className="mb-2 w-[100%] rounded-md border border-gray-300 p-2 text-sm"
            onFocus={() => setShowMemberDropDown(true)}
            value={filterInput}
            onChange={(e) => setFilterInput(e.target.value)}
            ref={inputRef}
          />
          {showMemberDropDown && (
            <div className="z-10">
              <MemberDropDown
                filterInput={filterInput}
                setFilterInput={setFilterInput}
                members={members}
                setMembers={setMembers}
                setShowMemberDropDown={setShowMemberDropDown}
                inputRef={inputRef}
              />
            </div>
          )}
          <div
            className={`hide-scroll relative ${
              showMemberDropDown ? "bottom-44" : "bottom-0"
            } flex max-h-[200px] min-h-[200px] flex-1 flex-col overflow-y-scroll`}
          >
            {showMembers.map((user) => {
              return <Member key={user._id} user={user} members={members} setMembers={setMembers} />;
            })}
          </div>
        </div>
        <button
          className={`relative ${
            showMemberDropDown ? "bottom-[47px]" : "bottom-0"
          } rounded-lg bg-[#085DD7] py-2 font-semibold text-white`}
          onClick={onSubmitCreateProject}
        >
          Create Project
        </button>
      </div>
    </div>
  );
}

export default NewProject;
