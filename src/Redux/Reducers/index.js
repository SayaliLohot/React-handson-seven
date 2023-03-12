import { combineReducers } from "@reduxjs/toolkit";
import StudentReducer from "./StudentReducer";

const Reducer = combineReducers({
  studentReducer: StudentReducer,
});

export default Reducer


