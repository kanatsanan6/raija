import * as api from "../apis/projects"


export const getProjects = async (dispatch) => {
  const data = await api.getProjects();
  dispatch({
    type: "FETCH_PROJECTS",
    projects: data
  })
}