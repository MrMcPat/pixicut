import { createSlice } from "@reduxjs/toolkit";

const selfSlice = createSlice({
  name: "self",
  initialState: {
    me: null,
  },
  reducers: {
    getSelf(state, action) {
      state.me = action.payload.me;
    },
  },
});

export const selfActions = selfSlice.actions;

export default selfSlice;
