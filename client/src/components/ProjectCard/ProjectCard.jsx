import { Avatar, AvatarGroup } from "@mui/material";

function ProjectCard({ project }) {
  const projectName = project.projectName;
  const projectDescription = project.projectDescription;
  const projectMember = project.members;

  return (
    <div className="flex h-40 w-[100%] flex-col justify-between rounded-lg bg-white p-5">
      <h3 className="text-xl font-semibold">{projectName}</h3>
      <h4 className="mb-2 text-sm text-[#3D3D3D] line-clamp-3">{projectDescription}</h4>
      <AvatarGroup sx={{ transform: "scale(0.8)", marginRight: "-20px" }} max={4}>
        {projectMember.map((member, index) => {
          return <Avatar key={index}>{member[0].toUpperCase()}</Avatar>;
        })}
      </AvatarGroup>
    </div>
  );
}

export default ProjectCard;
