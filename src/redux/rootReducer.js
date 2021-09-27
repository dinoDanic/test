import { combineReducers } from "redux";
import configReducer from "./config/config.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  config: configReducer,
  user: userReducer,
});

export default rootReducer;
