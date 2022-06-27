export const initialProject = {
  projects: [],
};

export const projectsReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return { ...state };

    default:
      return { ...state };
  }
};
