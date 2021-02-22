import { combineReducers } from 'redux';
import { firestoreReducer } from "redux-firestore";

import myReducer from './MyReducer/myReducer';


const rootReducer = combineReducers({
    page: myReducer,
    firestore: firestoreReducer
})

export default rootReducer;