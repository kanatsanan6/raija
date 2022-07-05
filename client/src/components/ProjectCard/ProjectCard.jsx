import { Avatar, AvatarGroup } from "@mui/material";
import { useStateValue } from "../../context/StateProvider";

function ProjectCard({ project }) {
  const [{ users }] = useStateValue();
  const projectName = project.projectName;
  const projectDescription = project.projectDescription;
  const projectMember = users.users.filter((user) => project.members.includes(user._id));

  return (
    <div className="flex h-40 w-[100%] flex-col justify-between rounded-lg bg-white p-5">
      <h3 className="text-xl font-semibold">{projectName}</h3>
      <h4 className="mb-2 text-sm text-[#3D3D3D] line-clamp-3">{projectDescription}</h4>
      <AvatarGroup sx={{ transform: "scale(0.8)", marginRight: "-20px" }} max={4}>
        {projectMember.map((member, index) => {
          return <Avatar key={index}>{member.name[0].toUpperCase()}</Avatar>;
        })}
      </AvatarGroup>
    </div>
  );
}

export default ProjectCard;
