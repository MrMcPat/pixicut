import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    drawings: [],
    frames: [],
    comments: [],
    follows: [],
  },
  reducers: {
    getUsers(state, action) {
      state.users = action.payload.users;
      state.drawings = action.payload.drawings;
      state.frames = action.payload.frames;
      state.comments = action.payload.comments;
      state.follows = action.payload.follows;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
