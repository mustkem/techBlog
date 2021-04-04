import { combineReducers } from "redux";

import myReducer from "./MyReducer/myReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  page: myReducer,
  profileReducer: userReducer,
});

export default rootReducer;
