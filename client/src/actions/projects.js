import * as api from "../apis/projects";

export const getProjects = async (dispatch) => {
  const data = await api.getProjects();
  dispatch({
    type: "FETCH_PROJECTS",
    projects: data,
  });
};

export const createProject = async (dispatch, newProject) => {
  const data = await api.createProject(newProject);
  dispatch({
    type: "ADD_PROJECT",
    project: data,
  });
};
