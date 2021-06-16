import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMsgOpen: (state, action) => {
      state.message = action.payload;
    },
    setMsgClose: (state) => {
      state.message = null;
    },
  },
});

export const { setMsgOpen, setMsgClose } = messageSlice.actions;
export const selectMsg = (state) => state.message.message;
export default messageSlice.reducer;
