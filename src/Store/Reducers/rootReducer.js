import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

import myReducer from "./MyReducer/myReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  page: myReducer,
  firestore: firestoreReducer,
  profileReducer: userReducer,
});

export default rootReducer;
