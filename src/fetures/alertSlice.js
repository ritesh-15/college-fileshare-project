import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  msgOpen: false,
};

const alertSlice = createSlice({
  name: "msgOpen",
  initialState,
  reducers: {
    setOpenMsg: (state) => {
      state.msgOpen = true;
    },
    setCloseMsg: (state) => {
      state.msgOpen = false;
    },
  },
});

export const { setOpenMsg, setCloseMsg } = alertSlice.actions;
export const selectOpenMsg = (state) => state.msgOpen.msgOpen;
export default alertSlice.reducer;
