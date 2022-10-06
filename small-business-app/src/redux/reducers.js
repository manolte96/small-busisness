import { combineReducers } from "redux";

const user = (state = null) => state;

const businesses = (state = []) => state;
const username = (state = "") => state;
const email = (state = "") => state;

export default combineReducers({ user, businesses, username, email });