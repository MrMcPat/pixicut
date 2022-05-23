import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    drawings: [],
    comments: [],
    follows: [],
  },
  reducers: {
    getUsers(state, action) {
      state.users = action.payload.users;
      state.drawings = action.payload.drawings;
      state.comments = action.payload.comments;
      state.follows = action.payload.follows;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
