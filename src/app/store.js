import { configureStore } from "@reduxjs/toolkit";
import openReducer from "../fetures/emailSlice";

export default configureStore({
  reducer: {
    open: openReducer,
  },
});
