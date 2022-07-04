import { initialProject, projectsReducer } from "./projects";
import combineReducers from "react-combine-reducers";
import { initialUser, usersReducer } from "./users";

const [reducer, initialState] = combineReducers({
  projects: [projectsReducer, initialProject],
  users: [usersReducer, initialUser]
});

export { reducer, initialState };
