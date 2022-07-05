import { Pagination } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { getProjects } from "../actions/projects";
import { getUsers } from "../actions/users";
import Header from "../components/Header/Header";
import Menu from "../components/Menu/Menu";
import NewProject from "../components/NewProject/NewProject";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Sidebar from "../components/Sidebar/Sidebar";
import { useStateValue } from "../context/StateProvider";
import { search } from "../utils/function/search";

const MAX_PROJECT = 12;

const USER_ID = "62c2fcc03fe9c510a3177f23";

function Homepage() {
  const [page, setPage] = useState(1);
  const [isShowSidebar, setIsShowSidebar] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("all");
  const [isShowNewProject, setIsShowNewProject] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const [{ projects, users }, dispatch] = useStateValue();
  const filterProject =
    selectedMenu === "all"
      ? projects.projects
      : projects.projects.filter((project) => ([project.owner, ...project.members].includes(USER_ID) ? project : null));
  const numberOfPage = Math.ceil(filterProject.length / MAX_PROJECT);

  const displayProject = filterProject.filter((project) => search(project, searchInput, users.users));

  useEffect(() => {
    getProjects(dispatch);
    getUsers(dispatch);
  }, [dispatch]);

  const selectAllProject = () => {
    setSelectedMenu("all");
  };

  const selectedYourMenu = () => {
    setSelectedMenu("your");
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className={`flex h-screen flex-1 flex-col overflow-y-auto`}>
      <Header setIsShowSidebar={setIsShowSidebar} />
      {isShowSidebar && <Sidebar setIsShowSidebar={setIsShowSidebar} />}

      <div className="w-[100%] px-5 py-7 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <p className="text-md font-light text-gray-400 sm:text-lg">RAIJA</p>
            <p className="text-md mx-3 font-light text-gray-400 sm:text-lg">/</p>
            <p className="text-md font-light text-gray-400 sm:text-lg">Dashboard</p>
          </div>
          <p className="hidden text-2xl sm:block">Hello, Kanatsanan</p>
        </div>

        <div className="flex items-center justify-between py-5">
          <h3 className="text-2xl font-semibold sm:text-3xl">Dashboard</h3>
          <button
            className="text-md rounded-md bg-[#0052CC] px-4 py-2 font-medium text-white hover:opacity-90 sm:py-2 sm:px-7 sm:text-lg"
            onClick={() => setIsShowNewProject(true)}
          >
            + New
          </button>
        </div>

        <div className="flex items-start justify-between">
          <div className="flex items-baseline">
            <Menu menuTitle="All Projects" isSelected={"all" === selectedMenu} onClick={selectAllProject} />
            <Menu menuTitle="Your Projects" isSelected={"your" === selectedMenu} onClick={selectedYourMenu} />
          </div>
          <div className="flex items-center rounded-md border border-gray-300 p-1">
            <img src="/images/search.svg" alt="" className="mr-2 ml-2 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="h-3 w-20 text-xs focus:outline-0 sm:h-6 sm:w-48 sm:text-base md:w-28"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
        </div>
        <hr className="mb-5" />
        <div className="flex h-auto min-h-[630px] flex-col items-center justify-between rounded-lg  bg-[#F1F1F1] pb-5">
          <div className="grid w-[100%] content-start gap-5 p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayProject.map((project, index) => {
              if (12 * (page - 1) <= index && 12 * page > index) {
                return <ProjectCard project={project} key={project._id} />;
              }
              return null;
            })}
          </div>
          <Pagination page={page} count={numberOfPage} variant="outlined" onChange={handleChange} />
        </div>
      </div>
      {isShowNewProject && <NewProject setIsShowNewProject={setIsShowNewProject} />}
    </div>
  );
}

export default Homepage;
