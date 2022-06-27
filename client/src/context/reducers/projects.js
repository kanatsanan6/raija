export const initialProject = {
  projects: [],
};

export const projectsReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "FETCH_PROJECTS":
      return { ...state, projects: action.projects };

    default:
      return { ...state };
  }
};
