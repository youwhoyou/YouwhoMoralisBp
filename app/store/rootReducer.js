import { combineReducers } from "redux";
// slices
import userReducer from "./slices/user";
import appReducer from "./slices/app";
// env
import {
  REACT_APP_MORALIS_APPLICATION_ID,
  REACT_APP_MORALIS_SERVER_URL,
} from "@env";
// moralis
const Moralis = require("moralis/react-native");

// ----------------------------------------------------------------------

const serverUrl = REACT_APP_MORALIS_SERVER_URL;
const appId = REACT_APP_MORALIS_APPLICATION_ID;
Moralis.start({ serverUrl, appId });

const rootReducer = combineReducers({
  user: userReducer,
  app: appReducer,
});

export { rootReducer, Moralis };
