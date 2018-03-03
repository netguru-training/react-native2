import { combineReducers } from "redux";
import { navReducer } from "../navigation/reducer";

import tasks from "./tasks";

export default combineReducers({
  tasks,
  nav: navReducer
});
