import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const emailSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.open = true;
    },
    setClose: (state) => {
      state.open = false;
    },
  },
});

export const { setOpen, setClose } = emailSlice.actions;
export const selectOpen = (state) => state.open.open;
export default emailSlice.reducer;
