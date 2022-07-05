import axios from "axios";

const url = "http://localhost:8080/api/project";

export const getProjects = async () => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createProject = async (newProject) => {
  const data = axios.post(url, newProject);
  return data
}
