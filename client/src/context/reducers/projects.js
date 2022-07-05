export const initialProject = {
  projects: [],
};

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PROJECTS":
      return { ...state, projects: action.projects };
    case "ADD_PROJECT":
      return { ...state, projects: [...state.projects, action.project.data] };
    default:
      return { ...state };
  }
};
