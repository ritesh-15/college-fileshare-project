import { configureStore } from "@reduxjs/toolkit";
import openReducer from "../fetures/emailSlice";
import messageReducer from "../fetures/messageSlice";
import msgOpenReducer from "../fetures/alertSlice";

export default configureStore({
  reducer: {
    open: openReducer,
    message: messageReducer,
    msgOpen: msgOpenReducer,
  },
});
