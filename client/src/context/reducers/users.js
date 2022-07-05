export const initialUser = {
  users: [],
};

export const usersReducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case "FETCH_USER":
      return { ...state, users: action.users };

    default:
      return { ...state };
  }
};
