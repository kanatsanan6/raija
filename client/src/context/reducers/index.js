import { initialProject, projectsReducer } from "./projects";
import combineReducers from "react-combine-reducers";

const [reducer, initialState] = combineReducers({
  projects: [projectsReducer, initialProject],
});

export { reducer, initialState };
