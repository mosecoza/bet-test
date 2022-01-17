import { combineReducers } from "@reduxjs/toolkit";
import user from "./slices/auth/user";
import  news  from './slices/news/news';

export default combineReducers({user, news});