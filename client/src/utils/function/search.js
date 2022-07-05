export const search = (project, input, members) => {
  const projectMembers = members.filter((member) => project.members.includes(member._id));
  const projectParam = [project.projectName, project.projectDescription, project.owner];
  projectMembers.forEach((member) => {
    projectParam.push(member.name);
    projectParam.push(member.email);
  });
  if (input === "") return true;
  for (let i = 0; i < projectParam.length; i++) {
    if (projectParam[i].toLowerCase().includes(input.toLowerCase())) {
      return true
    }
  }

  return false;
};
