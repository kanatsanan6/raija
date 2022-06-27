import { Avatar, AvatarGroup } from "@mui/material";

function ProjectCard() {
  const projectName = "PDPA Project";
  const projectDescription =
    "Our experts offer cutting edge, practical & effective solutions for all your PDPA project.";
  const projectMember = [];

  return (
    // <div className="m-3 flex h-44 w-[90%] flex-col justify-between rounded-lg bg-white p-5 sm:w-[45%] lg:w-[30%] lg:min-w-[240px] xl:w-[23%] xl:min-w-[270px]">
    <div className="flex h-44 w-[100%] flex-col justify-between rounded-lg bg-white p-5">
      <h3 className="text-xl font-semibold">{projectName}</h3>
      <h4 className="mb-2 text-sm text-[#3D3D3D] line-clamp-3">{projectDescription}</h4>
      <AvatarGroup sx={{ transform: "scale(0.8)", marginRight: "-20px" }} max={4}>
        <Avatar>K</Avatar>
        <Avatar>B</Avatar>
        <Avatar>E</Avatar>
        <Avatar>D</Avatar>
        <Avatar>J</Avatar>
        <Avatar>L</Avatar>
      </AvatarGroup>
    </div>
  );
}

export default ProjectCard;
