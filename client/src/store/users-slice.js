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
    },
    getDrawings(state, action) {
      state.drawings = action.payload.drawings;
    },
    getComments(state, action) {
      state.comments = action.payload.comments;
    },
    getFollows(state, action) {
      state.follows = action.payload.follows;
    },
  },
});

export const usersActions = usersSlice.actions;

export default usersSlice;
