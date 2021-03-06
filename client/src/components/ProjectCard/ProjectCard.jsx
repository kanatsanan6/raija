import { Avatar, AvatarGroup } from "@mui/material";
import { useStateValue } from "../../context/StateProvider";
import { stringToHslColor } from "../../utils/colors/letterColor";

function ProjectCard({ project }) {
  const [{ users }] = useStateValue();
  const projectName = project.projectName;
  const projectDescription = project.projectDescription;
  const projectMember = users.users.filter((user) => project.members?.includes(user._id));

  return (
    <div className="flex h-40 w-[100%] flex-col justify-between rounded-lg bg-white p-5">
      <h3 className="text-lg font-semibold line-clamp-1 sm:text-xl">{projectName}</h3>
      <h4 className="mb-2 text-xs text-[#3D3D3D] line-clamp-3 sm:text-sm">{projectDescription}</h4>
      <AvatarGroup sx={{ transform: "scale(0.8)", marginRight: "-20px" }} max={4}>
        {projectMember.map((member, index) => {
          return (
            <Avatar key={index} sx={{ bgcolor: stringToHslColor(member.name) }} style={{ zIndex: 1 }}>
              {member.name[0].toUpperCase()}
            </Avatar>
          );
        })}
      </AvatarGroup>
    </div>
  );
}

export default ProjectCard;
