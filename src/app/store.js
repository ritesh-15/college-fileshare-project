import { configureStore } from "@reduxjs/toolkit";
import openReducer from "../fetures/emailSlice";
import messageReducer from "../fetures/messageSlice";

export default configureStore({
  reducer: {
    open: openReducer,
    message: messageReducer,
  },
});
