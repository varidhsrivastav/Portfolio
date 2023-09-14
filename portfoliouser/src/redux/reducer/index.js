import addItem from "./additem";
import addProject from "./additem";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    addItem,
    addProject
})

export default rootReducers;